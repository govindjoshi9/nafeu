import axios from "axios"

import { API_ROUTES } from "./constant"

const handleInvalidToken = async () => {
  try {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("authUser")

    window.location.href = "/login" // Redirect to the /login route
  } catch (error) {
    console.log(error)
  }
}

export async function getDashboardFunction() {
  console.log("calling dashboard")
  try {
    const URL = API_ROUTES.GET_DASHBOARD
    const accessToken = JSON.parse(window.localStorage.getItem("authUser"))

    const headers = {
      Authorization: `Bearer ${accessToken.token}`,
    }
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (Error) {
    console.log("show this errro", Error)
    return {
      user: "Error",
    }
  }
}

export async function getTotalIncomeFunction() {
  try {
    const URL = API_ROUTES.GET_TOTALINCOME
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (Error) {
    console.log("Error are here:", Error)
  }
}

export async function getApiPriceFetch() {
  try {
    const URL = API_ROUTES.GET_PRICE
    const accessToken = window.localStorage.getItem("accessToken")

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (Error) {
    console.log("Error are here:", Error)
  }
}

export async function getStackingSummary() {
  try {
    const URL = API_ROUTES.GET_STACKING_SUMMARY
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (Error) {
    console.log("Error are here :", Error)
  }
}

// get dailyprofit function is here:@@@@@@@@@@@@@@@@@@@@
export async function getDailyProfit() {
  try {
    const URL = API_ROUTES.GET_DAILY_PROFIT
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      handleInvalidToken()
    }
    console.log("Error are here:", error)
  }
}

// get Directmember function -------
export async function getDirectMemberFunction() {
  try {
    const URL = API_ROUTES.GET_DIRECT_MEMBER
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      handleInvalidToken()
    }
    console.log("Error are here:", error)
  }
}

// get All direct member Function ---------
export async function getAllDirectFunction() {
  try {
    const URL = API_ROUTES.GET_MYALL_TEAM
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    console.log("object", headers)
    const response = await axios.get(URL, { headers })
    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      handleInvalidToken()
    }
    console.log("Errro are here why you are fear:", error)
  }
}

//  post method in stacking functin -----

export async function postStacking(payload) {
  console.log("payload is here :", payload)
  try {
    const accessToken = window.localStorage.getItem("accessToken")
    const URL = API_ROUTES.POST_STACKING
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const responce = await axios.post(URL, payload, { headers })
    return responce
  } catch (error) {
    if (error.response.status === 401) {
      handleInvalidToken()
    }
    return error
  }
}

//  staking bonus function ---------

export async function postAllIncomes(payload) {
  try {
    const URL = API_ROUTES.POST_STAKING_BONUS
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const responce = await axios.post(URL, payload, { headers })
    return responce.data
  } catch (error) {
    console.log("Errro are here:", error)
  }
}

// all level income function --------------
export async function postAllLevelTeam(payload) {
  try {
    const URL = API_ROUTES.POST_LEVEL_TEAM
    const accessToken = window.localStorage.getItem("accessToken")
    // console.log("accessToken is here in all level income:",accessToken);
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const responce = await axios.post(URL, payload, { headers })
    return responce.data
  } catch (error) {
    console.log("Error are here:", error)
  }
}

export async function postUpdateProfile(payload) {
  try {
    const URL = API_ROUTES.POST_UPDATE_PROFILE
    const accessToken = window.localStorage.getItem("accessToken")
    // console.log("accessToken is here in all level income:",accessToken);
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const responce = await axios.put(URL, payload, { headers })
    console.log(responce.data)
    return responce.data
  } catch (error) {
    if (error.response.status === 401) {
      handleInvalidToken()
    }
    return error
  }
}

export async function putChangePassword(payload) {
  try {
    const URL = API_ROUTES.PUT_CHANGE_PASSWORD
    const accessToken = window.localStorage.getItem("accessToken")
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    const responce = await axios.put(URL, payload, { headers })
    return responce
  } catch (error) {
    if (error.response.status === 401) {
      handleInvalidToken()
    }
    return error
  }
}

// find sponcer name from sponcer is
export async function getSponcerName(payload) {
  try {
    const URL = API_ROUTES.GET_SPONCER_NAME
    const responce = await axios.get(`${URL}=${payload}`)
    return responce.data.sponcer_name
  } catch (error) {
    console.log("Error are here:", error)
    return "Invalid Sponsor Id"
  }
}
