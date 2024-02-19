import AuthHTTP from "./http/auth";
import qs from "qs";

export const loginUser = (payload: any) => {
  return AuthHTTP.post(`/login`, qs.stringify(payload), {
    baseURL: process.env.REACT_APP_DATABASE_URL,
    "Content-Type": "application/json",
  });
  /*  return fetch(`${process.env.REACT_APP_DATABASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json()); */
};

export const postVerifyLoginOtp = (payload: any) => {
  return AuthHTTP.post(`/verify-login-otp`, qs.stringify({ otp: payload }), {
    baseURL: process.env.REACT_APP_DATABASE_URL,
    "Content-Type": "application/json",
  });
};
