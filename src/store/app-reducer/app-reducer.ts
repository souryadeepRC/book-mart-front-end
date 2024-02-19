// types
import { AppReducerType, ReducerActionPayloadType } from "../reducer-type";
// constants
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  VERIFY_LOGIN_OTP_FAILURE,
  VERIFY_LOGIN_OTP_REQUEST,
  VERIFY_LOGIN_OTP_SUCCESS,
} from "./app-constants";

const initialState: AppReducerType = {
  isLoading: false,
  action: "",
  error: "",
  isMobile: false,
  isLoginVerified: false,
  userDetails: { username: "", email: "" },
};
const AppReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
): AppReducerType => {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case VERIFY_LOGIN_OTP_REQUEST:
      return { ...state, isLoading: true, action: type };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        userDetails: payload,
      };
    case VERIFY_LOGIN_OTP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        isLoginVerified: payload,
      };
    }
    case USER_LOGIN_FAILURE:
    case VERIFY_LOGIN_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        action: type,
        error: payload,
      };
    default:
      return state;
  }
};
export { AppReducer };
