// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import {
  FETCH_COMMUNITIES,
  FETCH_MESSAGE_BUDDIES,
  SET_ACTIVE_BUDDY,
  SET_ACTIVE_BUDDY_MESSAGE,
} from "./engagement-constants";

export const fetchCommunities = (): ReducerActionPayloadType => {
  return {
    type: FETCH_COMMUNITIES,
  };
};
export const fetchMessageBuddies = (): ReducerActionPayloadType => {
  return {
    type: FETCH_MESSAGE_BUDDIES,
  };
};

export const setActiveBuddy = (payload:any): ReducerActionPayloadType => {
  return {
    type: SET_ACTIVE_BUDDY,
    payload
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
