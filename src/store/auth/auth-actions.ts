// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
import {
  SignUpDetailsPayloadType,
  SignUpDetailsType
} from "src/types/authentication-types";
// constants
import {
  CHECK_SIGN_UP_EMAIL,
  CHECK_USER_AUTH,
  MOVE_SIGN_UP_STEP_ACTIVE_INDEX,
  RESEND_LOGIN_OTP,
  RESET_LOGIN_AUTH,
  RESET_USER_AUTH,
  SET_ACCESS_TOKEN_EXISTENCE,
  SET_AUTH_ERROR,
  SET_LOGIN_STATE,
  SET_SIGN_UP_DETAILS,
  SET_SIGN_UP_STEP_ACTIVE_INDEX,
  SET_USER_AUTHENTICATE,
  SIGN_UP_USER,
  USER_LOGIN,
  USER_LOGOUT,
  VERIFY_LOGIN_OTP,
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

export const setSignUpStep = (payload: string): ReducerActionPayloadType => {
  return { type: SET_SIGN_UP_STEP_ACTIVE_INDEX, payload };
};
export const moveSignUpStep = (payload: number): ReducerActionPayloadType => {
  return { type: MOVE_SIGN_UP_STEP_ACTIVE_INDEX, payload };
};

export const checkSignUpEmail = (payload: {
  email: string;
}): ReducerActionPayloadType => {
  return { type: CHECK_SIGN_UP_EMAIL, payload };
};
export const setSignUpDetails = (
  payload: SignUpDetailsPayloadType
): ReducerActionPayloadType => {
  return { type: SET_SIGN_UP_DETAILS, payload };
};
export const signUpUser = (
  payload: SignUpDetailsType
): ReducerActionPayloadType => {
  return { type: SIGN_UP_USER, payload };
};
