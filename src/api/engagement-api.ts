import qs from "qs";
import AppHTTP from "./http/app";

import {
  ChatMessageFilterType,
  ChatMessageType,
} from "src/types/engagement-types";

const API_BASE_URL_ENGAGEMENT: string = "/api/book-mart/engagement";
const ApiRequestConfig = {
  "Content-Type": "application/json",
};
export const getChatRooms = (payload: any) => {
  return AppHTTP.post(
    `${API_BASE_URL_ENGAGEMENT}/message/chat-rooms`,
    qs.stringify(payload),
    ApiRequestConfig
  );
};
export const postSendChatMessage = (payload: ChatMessageType) => {
  return AppHTTP.post(
    `${API_BASE_URL_ENGAGEMENT}/message/send-message`,
    qs.stringify(payload),
    ApiRequestConfig
  );
};
export const getChatMessages = (payload: ChatMessageFilterType) => {
  return AppHTTP.post(
    `${API_BASE_URL_ENGAGEMENT}/message/get-messages`,
    qs.stringify(payload),
    ApiRequestConfig
  );
};
