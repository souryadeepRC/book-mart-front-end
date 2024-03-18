// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import { ChatMessageType } from "src/types/engagement-types";
import {
  ADD_ACTIVE_CHAT_MESSAGE,
  FETCH_CHAT_BUDDIES,
  FETCH_COMMUNITIES,
  SEND_MESSAGE,
  SET_ACTIVE_BUDDY_MESSAGE,
  SET_ACTIVE_CHAT,
} from "./engagement-constants";

export const fetchCommunities = (): ReducerActionPayloadType => {
  return {
    type: FETCH_COMMUNITIES,
  };
};
export const fetchChatBuddies = (): ReducerActionPayloadType => {
  return {
    type: FETCH_CHAT_BUDDIES,
  };
};

export const setActiveChat = (payload: any): ReducerActionPayloadType => {
  return {
    type: SET_ACTIVE_CHAT,
    payload,
  };
};
export const setActiveBuddyMessage = (
  payload: any
): ReducerActionPayloadType => {
  return {
    type: SET_ACTIVE_BUDDY_MESSAGE,
    payload,
  };
};
export const sendMessage = (
  payload: ChatMessageType
): ReducerActionPayloadType => {
  return {
    type: SEND_MESSAGE,
    payload,
  };
};
export const addActiveChatMessage = (
  payload: ChatMessageType
): ReducerActionPayloadType => {
  return {
    type: ADD_ACTIVE_CHAT_MESSAGE,
    payload,
  };
};
