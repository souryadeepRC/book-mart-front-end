// types
import { ReducerActionPayloadType } from "src/store/reducer-type";
// constants
import {
  USER_LOGIN,
  VERIFY_LOGIN_OTP,
  RESET_LOGIN_AUTH,
  RESEND_LOGIN_OTP,
  USER_LOGOUT,
  SET_USER_AUTHENTICATE,
  SET_LOGIN_STATE,
  SET_AUTH_ERROR,
} from "./auth-constants";

export const loginUser = (payload: {
  email: string;
  password: string;
}): ReducerActionPayloadType => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

export const setUserAuthenticate = (
  payload: boolean
): ReducerActionPayloadType => {
  return { type: SET_USER_AUTHENTICATE, payload };
};
export const logoutUser = (): ReducerActionPayloadType => {
  return { type: USER_LOGOUT };
};
export const verifyOtp = (payload: string): ReducerActionPayloadType => {
  return { type: VERIFY_LOGIN_OTP, payload };
};
export const resendOtp = (): ReducerActionPayloadType => {
  return { type: RESEND_LOGIN_OTP };
};
export const resetLoginAuthentication = (): ReducerActionPayloadType => {
  return { type: RESET_LOGIN_AUTH };
};
export const setLoginState = (payload: string): ReducerActionPayloadType => {
  return { type: SET_LOGIN_STATE, payload };
};
export const setAuthError = (payload: string): ReducerActionPayloadType => {
  return { type: SET_AUTH_ERROR, payload };
};
