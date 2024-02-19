import { put, takeEvery } from "redux-saga/effects";
// api
import { loginUser, postVerifyLoginOtp } from "src/api/user-api";
// constants
import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  VERIFY_LOGIN_OTP,
  VERIFY_LOGIN_OTP_FAILURE,
  VERIFY_LOGIN_OTP_REQUEST,
  VERIFY_LOGIN_OTP_SUCCESS,
} from "./app-constants";

export function* loginUserSaga({ payload }: any): any {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const response = yield loginUser(payload);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}

export function* verifyOtpSaga({ payload }: any): any {
  yield put({ type: VERIFY_LOGIN_OTP_REQUEST });
  try {
    const response = yield postVerifyLoginOtp(payload);
    yield put({ type: VERIFY_LOGIN_OTP_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({
      type: VERIFY_LOGIN_OTP_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}
export function* appSaga() {
  yield takeEvery(USER_LOGIN, loginUserSaga);
  yield takeEvery(VERIFY_LOGIN_OTP, verifyOtpSaga);
}
