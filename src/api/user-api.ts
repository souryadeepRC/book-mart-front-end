import qs from "qs";
import AppHTTP from "./http/app";

export const getLoggedInUserDetails = () => {
  return AppHTTP.get(`/api/book-mart/account/user/me`);
};
export const sendMessage = (payload: any) => {
  console.log(payload);
  
  return AppHTTP.post(
    `/api/book-mart/message/send-message`,
    qs.stringify(payload),
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      "Content-Type": "application/json",
    }
  );
};
