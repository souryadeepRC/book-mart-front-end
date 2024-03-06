import AppHTTP from "./http/app";

export const getLoggedInUserDetails = () => {
  return AppHTTP.get(`/api/book-mart/account/user/me`);
};
