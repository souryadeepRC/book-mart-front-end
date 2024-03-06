import AppHTTP from "./http/app";

export const getBooks = () => {
  return AppHTTP.get(`/api/book-mart/book`);
};
