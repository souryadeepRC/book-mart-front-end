import { put, takeEvery } from "redux-saga/effects";
// api
import {
  getResendLoginOtp,
  postLoginUser,
  postVerifyLoginOtp,
} from "src/api/auth-api";
// actions
import { addNotifications } from "../screen/screen-action";
import { fetchUserDetails } from "../user/user-action";
// utils
import { removeItemFromLS, setItemToLS } from "src/utils/storage-utils";
// constants
import { STORAGE_KEY } from "src/constants/common-constants";
import {
  RESEND_LOGIN_OTP,
  RESEND_LOGIN_OTP_FAILURE,
  RESEND_LOGIN_OTP_REQUEST,
  RESEND_LOGIN_OTP_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  VERIFY_LOGIN_OTP,
  VERIFY_LOGIN_OTP_FAILURE,
  VERIFY_LOGIN_OTP_REQUEST,
  VERIFY_LOGIN_OTP_SUCCESS,
} from "./auth-constants";

function* loginUserSaga({ payload }: any): any {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const response = yield postLoginUser(payload);
    const { value: otpValue, expiresIn } = response.data.otp;

    setItemToLS(STORAGE_KEY.AUTH_TOKEN, response.data.authToken);
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

    setItemToLS(STORAGE_KEY.ACCESS_TOKEN, accessToken);
    setItemToLS(STORAGE_KEY.TOKEN_EXPIRY_DATE, expiryDate);
    removeItemFromLS(STORAGE_KEY.AUTH_TOKEN);

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

export function* authSaga() {
  yield takeEvery(USER_LOGIN, loginUserSaga);
  yield takeEvery(VERIFY_LOGIN_OTP, verifyOtpSaga);
  yield takeEvery(RESEND_LOGIN_OTP, resendOtpSaga);
}
