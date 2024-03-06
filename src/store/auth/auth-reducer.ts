// types
import {
  AuthReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// constants
import {
  LOGIN_STATE,
  SIGN_UP_STATE
} from "src/constants/authentication-constants";
import {
  CHECK_SIGN_UP_EMAIL_FAILURE,
  CHECK_SIGN_UP_EMAIL_REQUEST,
  CHECK_SIGN_UP_EMAIL_SUCCESS,
  CHECK_USER_AUTH_FAILURE,
  CHECK_USER_AUTH_REQUEST,
  CHECK_USER_AUTH_SUCCESS,
  MOVE_SIGN_UP_STEP_ACTIVE_INDEX,
  RESEND_LOGIN_OTP_FAILURE,
  RESEND_LOGIN_OTP_REQUEST,
  RESEND_LOGIN_OTP_SUCCESS,
  RESET_LOGIN_AUTH,
  SET_ACCESS_TOKEN_EXISTENCE,
  SET_AUTH_ERROR,
  SET_LOGIN_STATE,
  SET_SIGN_UP_DETAILS,
  SET_SIGN_UP_STEP_ACTIVE_INDEX,
  SET_USER_AUTHENTICATE,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  VERIFY_LOGIN_OTP_FAILURE,
  VERIFY_LOGIN_OTP_REQUEST,
  VERIFY_LOGIN_OTP_SUCCESS
} from "src/store/auth/auth-constants";
import { mapMovedSignUpStep, mapSignUpDetails, mapSignUpStepInfo } from "./auth-mapper";

const initialState: AuthReducerType = {
  action: "",
  isLoading: false,
  error: "",
  errorStatusCode: undefined,
  authToken: "",
  isUserAuthenticated: false,
  loginState: LOGIN_STATE.ACCOUNT,
  signupState: SIGN_UP_STATE.ACCOUNT,
  authOtp: "",
  isAccessTokenExist: true,
  signUp: {
    details: {
      account: { email: "", username: "" },
      password: { password: "" },
      personal: {
        name: {
          firstName: "",
          middleName: "",
          lastName: "",
        },
      },
      address: {
        pinCode: "",
      },
      contact: {
        primary: {
          code: "",
          value: "",
        },
        secondary: {
          code: "",
          value: "",
        },
      },
    },
    activeStepIndex: 0,
    stepStatus: Array(5).fill(''),
    maxStep: 5,
  },
};
const setSuccessState = (type: string) => {
  return { isLoading: false, action: type, error: "" };
};
const AuthReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case VERIFY_LOGIN_OTP_REQUEST:
    case RESEND_LOGIN_OTP_REQUEST:
    case CHECK_USER_AUTH_REQUEST:
    case CHECK_SIGN_UP_EMAIL_REQUEST:
    case SIGN_UP_USER_REQUEST:
      return { ...state, isLoading: true, action: type };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...setSuccessState(type),
        loginState: LOGIN_STATE.OTP,
        authOtp: payload,
      };
    case VERIFY_LOGIN_OTP_SUCCESS: {
      return {
        ...state,
        ...setSuccessState(type),
        isUserAuthenticated: true,
        loginState: LOGIN_STATE.DONE,
      };
    }
    case RESEND_LOGIN_OTP_SUCCESS: {
      return {
        ...state,
        ...setSuccessState(type),
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
      return {
        ...state,
        loginState: payload,
        errorStatusCode: undefined,
        error: "",
      };
    case CHECK_USER_AUTH_SUCCESS:
      return {
        ...state,
        ...setSuccessState(type),
        isUserAuthenticated: payload,
        loginState: LOGIN_STATE.DONE,
      };
    case SET_ACCESS_TOKEN_EXISTENCE:
      return { ...state, isAccessTokenExist: payload };
    case SET_SIGN_UP_STEP_ACTIVE_INDEX:
      return {
        ...state,
        action: type,
        signUp: mapSignUpStepInfo(state.signUp, payload),
      };
    case MOVE_SIGN_UP_STEP_ACTIVE_INDEX:
      return {
        ...state,
        action: type,
        signUp: mapMovedSignUpStep(state.signUp,payload)
      };
    case SET_SIGN_UP_DETAILS:
      return {
        ...state,
        action: type,
        error: "",
        signUp: mapSignUpDetails(state.signUp, payload),
      };
    case CHECK_SIGN_UP_EMAIL_SUCCESS:
      return {
        ...state,
        ...setSuccessState(type),
      };
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        ...setSuccessState(type),
        isUserAuthenticated: true,
        signupState: SIGN_UP_STATE.DONE,
      };
    case USER_LOGIN_FAILURE:
    case VERIFY_LOGIN_OTP_FAILURE:
    case RESEND_LOGIN_OTP_FAILURE:
    case CHECK_USER_AUTH_FAILURE:
    case CHECK_SIGN_UP_EMAIL_FAILURE:
    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        action: type,
        error: payload?.error ?? state.error,
        errorStatusCode: payload?.errorStatusCode ?? state.errorStatusCode,
      };
    case RESET_LOGIN_AUTH:
      return { ...state, loginState: initialState.loginState };
    default:
      return state;
  }
};
export { AuthReducer };

