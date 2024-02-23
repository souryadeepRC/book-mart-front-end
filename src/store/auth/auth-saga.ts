import { put, takeEvery } from "redux-saga/effects";
// api
import {
  postLoginUser,
  postVerifyLoginOtp,
  getResendLoginOtp,
  getLogoutUser,
} from "src/api/auth-api";
// actions
import { addNotifications } from "../screen/screen-action";
// utils
import { setItemToLS } from "src/utils/storage-utils";
// constants
import {
  RESEND_LOGIN_OTP,
  RESEND_LOGIN_OTP_REQUEST,
  RESEND_LOGIN_OTP_SUCCESS,
  RESEND_LOGIN_OTP_FAILURE,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  VERIFY_LOGIN_OTP,
  VERIFY_LOGIN_OTP_FAILURE,
  VERIFY_LOGIN_OTP_REQUEST,
  VERIFY_LOGIN_OTP_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
} from "./auth-constants";
import { fetchUserDetails } from "../user/user-action";

function* loginUserSaga({ payload }: any): any {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const response = yield postLoginUser(payload);
    const { value: otpValue, expiresIn } = response.data.otp;

    setItemToLS("accessToken", response.data.accessToken);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: response.data.otp,
    });
    yield put(
      addNotifications(
        `Your verification code is ${otpValue} is valid for ${expiresIn}`
      )
    );
  } catch (error: any) {
    yield put({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}

function* verifyOtpSaga({ payload }: any): any {
  yield put({ type: VERIFY_LOGIN_OTP_REQUEST });
  try {
    const response = yield postVerifyLoginOtp(payload);
    const { accessToken, expiryDate } = response.data;
    setItemToLS("accessToken", accessToken);
    setItemToLS("tokenExpiryDate", expiryDate);
    yield put({ type: VERIFY_LOGIN_OTP_SUCCESS });
    yield put(fetchUserDetails());
  } catch (error: any) {
    yield put({
      type: VERIFY_LOGIN_OTP_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}

function* resendOtpSaga(): any {
  yield put({ type: RESEND_LOGIN_OTP_REQUEST });
  try {
    const response = yield getResendLoginOtp();
    const { value: otpValue, expiresIn } = response.data.otp;
    yield put({ type: RESEND_LOGIN_OTP_SUCCESS, payload: response.data });
    yield put(
      addNotifications(
        `Your verification code is ${otpValue} is valid for ${expiresIn}`
      )
    );
  } catch (error: any) {
    yield put({
      type: RESEND_LOGIN_OTP_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}

function* logoutUserSaga(): any {
  yield put({ type: USER_LOGOUT_REQUEST });
  try {
    const response = yield getLogoutUser();
    console.log(response);
    
    yield put({ type: USER_LOGOUT_SUCCESS });
  } catch (error: any) {
    yield put({
      type: USER_LOGOUT_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}
export function* authSaga() {
  yield takeEvery(USER_LOGIN, loginUserSaga);
  yield takeEvery(VERIFY_LOGIN_OTP, verifyOtpSaga);
  yield takeEvery(RESEND_LOGIN_OTP, resendOtpSaga);
  yield takeEvery(USER_LOGOUT, logoutUserSaga);
}
