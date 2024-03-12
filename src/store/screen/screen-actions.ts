// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_SCREEN_TYPE,
  TOGGLE_APP_THEME,
} from "./screen-constants";

export const setScreenType = (payload: string): ReducerActionPayloadType => {
  return {
    type: SET_SCREEN_TYPE,
    payload,
  };
};

export const toggleAppTheme = (): ReducerActionPayloadType => {
  return {
    type: TOGGLE_APP_THEME,
  };
};

export const addNotifications = (payload: {
  message: string;
  type?: string;
}): ReducerActionPayloadType => {
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
