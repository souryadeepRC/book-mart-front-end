// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import { FETCH_USER_DETAILS, SET_USER_DETAILS } from "./user-constants";

export const fetchUserDetails = (): ReducerActionPayloadType => {
  return {
    type: FETCH_USER_DETAILS,
  };
};

export const setUserDetails = (payload: {
  username: string;
  email: string;
}): ReducerActionPayloadType => {
  return {
    type: SET_USER_DETAILS,
    payload,
  };
};
