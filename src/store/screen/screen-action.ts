// types
import { ReducerActionPayloadType } from "../reducer-type";
// constants
import {
  SET_SCREEN_TYPE,
  SET_SCREEN_THEME,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./screen-constants";

export const setScreenType = (payload: string): ReducerActionPayloadType => {
  return {
    type: SET_SCREEN_TYPE,
    payload,
  };
};

export const setScreenTheme = (payload: string): ReducerActionPayloadType => {
  return {
    type: SET_SCREEN_THEME,
    payload,
  };
};

export const addNotifications = (payload: string): ReducerActionPayloadType => {
  return {
    type: ADD_NOTIFICATION,
    payload,
  };
};

export const removeNotifications = (
  payload: string
): ReducerActionPayloadType => {
  return {
    type: REMOVE_NOTIFICATION,
    payload,
  };
};
