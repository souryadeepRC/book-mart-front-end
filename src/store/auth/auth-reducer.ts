// types
import {
  AuthReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-type";
// constants
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  VERIFY_LOGIN_OTP_FAILURE,
  VERIFY_LOGIN_OTP_REQUEST,
  VERIFY_LOGIN_OTP_SUCCESS,
  RESET_LOGIN_AUTH,
  RESEND_LOGIN_OTP_REQUEST,
  RESEND_LOGIN_OTP_SUCCESS,
  RESEND_LOGIN_OTP_FAILURE,
  SET_USER_AUTHENTICATE,
  SET_LOGIN_STATE,
  SET_AUTH_ERROR,
} from "src/store/auth/auth-constants";
import {
  LOGIN_STATE,
  SIGN_UP_STATE,
} from "src/constants/authentication-constants";

const initialState: AuthReducerType = {
  action: "",
  isLoading: false,
  error: "",
  authToken: "",
  isUserAuthenticated: false,
  loginState: LOGIN_STATE.ACCOUNT,
  signupState: SIGN_UP_STATE.ACCOUNT,
  authOtp: "",
};
const AuthReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case VERIFY_LOGIN_OTP_REQUEST:
    case RESEND_LOGIN_OTP_REQUEST:
      return { ...state, isLoading: true, action: type };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        loginState: LOGIN_STATE.OTP,
        authOtp: payload,
      };
    case VERIFY_LOGIN_OTP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        isUserAuthenticated: true,
        loginState: LOGIN_STATE.DONE,
      };
    }
    case RESEND_LOGIN_OTP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
      };
    }
    case SET_USER_AUTHENTICATE: {
      return {
        ...state,
        isUserAuthenticated: payload,
      };
    }
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_LOGIN_STATE:
      return { ...state, loginState: payload };
    case USER_LOGIN_FAILURE:
    case VERIFY_LOGIN_OTP_FAILURE:
    case RESEND_LOGIN_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        action: type,
        error: payload,
      };
    case RESET_LOGIN_AUTH:
      return { ...state, loginState: initialState.loginState };
    default:
      return state;
  }
};
export { AuthReducer };
