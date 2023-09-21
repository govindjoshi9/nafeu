import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"

//Include Both Helper File with needed methods
import { postJwtRegister } from "../../../helpers/helper"

function* registerUser({ payload: { user } }) {
  console.log("using the following url for registration: ")
  try {
    const response = yield call(postJwtRegister, {
      sponcerid: user.sponcerid,
      contactNumber: user.contactNumber,
      countryCode: user.country,
      password: user.password,
      cpassword: user.cpassword,
      member_name: user.username,
      email: user.email,
    })
    yield put(registerUserSuccessful(response))
  } catch (error) {
    console.log("There was an error registering: ", error)
    yield put(registerUserFailed(error))
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser)
}

function* accountSaga() {
  yield all([fork(watchUserRegister)])
}

export default accountSaga
