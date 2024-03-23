// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import {
  ChatMessageFilterType,
  ChatMessageType,
} from "src/types/engagement-types";
import {
  ADD_ACTIVE_CHAT_MESSAGE,
  FETCH_CHAT_ROOMS,
  FETCH_COMMUNITIES,
  FETCH_MESSAGE,
  RESET_ACTIVE_CHAT,
  SEND_MESSAGE,
  SET_ACTIVE_BUDDY_MESSAGE,
  SET_ACTIVE_CHAT,
  SET_CHAT_ROOM_SEARCH_TEXT,
} from "./engagement-constants";

export const fetchCommunities = (): ReducerActionPayloadType => {
  return {
    type: FETCH_COMMUNITIES,
  };
};
export const fetchChatRooms = (payload: {
  page: number;
  pageSize: number;
  searchText: string;
}): ReducerActionPayloadType => {
  return {
    type: FETCH_CHAT_ROOMS,
    payload,
  };
};

export const setChatRoomSearchText = (
  payload: string
): ReducerActionPayloadType => {
  return {
    type: SET_CHAT_ROOM_SEARCH_TEXT,
    payload,
  };
};

export const setActiveChatRoom = (payload: any): ReducerActionPayloadType => {
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

export const fetchMessages = (
  payload: ChatMessageFilterType
): ReducerActionPayloadType => {
  return {
    type: FETCH_MESSAGE,
    payload,
  };
};

export const resetActiveChatRoom = (): ReducerActionPayloadType => {
  return { type: RESET_ACTIVE_CHAT };
};
