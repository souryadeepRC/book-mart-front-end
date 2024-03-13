import qs from "qs";
import AppHTTP from "./http/app";

import { ChatMessageType } from "src/types/engagement-types";

const API_BASE_URL_ENGAGEMENT: string = "/api/book-mart/engagement";
const ApiRequestConfig = {
  "Content-Type": "application/json",
};
export const getChatBuddies = () => {
  return AppHTTP.get(`${API_BASE_URL_ENGAGEMENT}/message/buddies`);
};
export const postSendChatMessage = (payload: ChatMessageType) => {
  return AppHTTP.post(
    `${API_BASE_URL_ENGAGEMENT}/message/send-message`,
    qs.stringify(payload),
    ApiRequestConfig
  );
};
