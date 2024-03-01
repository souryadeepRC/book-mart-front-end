// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import {
  CHECK_USER_AUTH,
  RESEND_LOGIN_OTP,
  RESET_LOGIN_AUTH,
  RESET_USER_AUTH,
  SET_ACCESS_TOKEN_EXISTENCE,
  SET_AUTH_ERROR,
  SET_LOGIN_STATE,
  SET_USER_AUTHENTICATE,
  USER_LOGIN,
  USER_LOGOUT,
  VERIFY_LOGIN_OTP
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

export const checkUserAuth = (): ReducerActionPayloadType => {
  return { type: CHECK_USER_AUTH };
};

export const resetUserAuth = (): ReducerActionPayloadType => {
  return { type: RESET_USER_AUTH };
};
export const setAccessTokenExistence = (
  payload: boolean
): ReducerActionPayloadType => {
  return { type: SET_ACCESS_TOKEN_EXISTENCE, payload };
};
