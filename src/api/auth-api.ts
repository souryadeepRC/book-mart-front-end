import AppHTTP from "./http/app";
import AuthHTTP from "./http/auth";
import qs from "qs";

const API_BASE_URL_AUTH: string = "/api/book-mart/auth";
export const postLoginUser = (payload: any) => {
  return AuthHTTP.post(`${API_BASE_URL_AUTH}/login`, qs.stringify(payload), {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    "Content-Type": "application/json",
  });
};

export const postVerifyLoginOtp = (payload: any) => {
  return AppHTTP.post(
    `${API_BASE_URL_AUTH}/verify-auth-otp`,
    qs.stringify({ otp: payload }),
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      "Content-Type": "application/json",
    }
  );
};

export const getResendLoginOtp = () => {
  return AppHTTP.get(`${API_BASE_URL_AUTH}/resend-auth-otp`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    "Content-Type": "application/json",
  });
};

export const getLogoutUser = () => {
  localStorage.removeItem("accessToken");
  return true;
  /* return AppHTTP.get(`${API_BASE_URL_AUTH}/logout`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    "Content-Type": "application/json",
  }); */
};
