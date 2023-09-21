import { createContext, useEffect, useReducer } from "react"
import PropTypes from "prop-types"
// utils
import axios from "axios"
import { useLocation } from "react-router"
import { isValidToken, setSession } from "../jwt"
import { API_ROUTES } from "./constant"

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    }
  },
  LOGIN: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },
  LOGOUT: state => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },
}

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
})

AuthProvider.propTypes = {
  children: PropTypes.node,
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const location = useLocation()

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken")

        if (accessToken && isValidToken(accessToken)) {
          // if (true) {
          setSession(accessToken)
          const headers = { Authorization: `Bearer ${accessToken}` }
          const response = await axios.get(`${baseUrl}/users/dashboard`, {
            headers,
          })
          const { user } = response.data
          console.log(user)
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          })
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        })
      }
    }

    initialize()
  }, [location.pathname])

  const login = async (userId, password) => {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      userId,
      password,
    })

    const { token, user } = response.data

    setSession(token)
    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    })
  }

  const register = async (
    sponsorId,
    memberName,
    email,
    contactNo,
    password,
    cpassword,
    selectedPackage
  ) => {
    const response = await axios({
      method: "post",
      url: `${baseUrl}/Auth/register`,
      data: {
        sponcerid: sponsorId,
        member_name: memberName,
        email,
        contactNumber: contactNo,
        password,
        cpassword,
        position: selectedPackage,
      },
    })

    const { accessToken, user } = response.data

    window.localStorage.setItem("accessToken", accessToken)
    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    })
    return response
  }

  const logout = async () => {
    setSession(null)
    dispatch({ type: "LOGOUT" })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
