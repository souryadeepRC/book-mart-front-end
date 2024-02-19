// types
import { ReducerActionPayloadType } from "../reducer-type";
// constants
import {
  UPDATE_APP_DEVICE_STATE,
  USER_LOGIN,
  VERIFY_LOGIN_OTP,
} from "./app-constants";

export const updateAppDeviceState = (
  payload: boolean
): ReducerActionPayloadType => {
  return {
    type: UPDATE_APP_DEVICE_STATE,
    payload,
  };
};

export const loginUser = (payload: {
  email: string;
  password: string;
}): ReducerActionPayloadType => {
  return {
    type: USER_LOGIN,
    payload,
  };
};
export const verifyOtp = (payload: string): ReducerActionPayloadType => {
  return { type: VERIFY_LOGIN_OTP, payload };
};
