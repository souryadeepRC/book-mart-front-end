import AppHTTP from "./http/app";

export const getMessageBuddies = () => {
  return AppHTTP.get(`/api/book-mart/engagement/message/buddies`);
};
