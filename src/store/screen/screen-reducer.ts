// types
import { ScreenReducerType, ReducerActionPayloadType } from "../reducer-type";
// utils
import { generateRandomId } from "src/utils/common-utils";
// constants
import {
  SET_SCREEN_THEME,
  SET_SCREEN_TYPE,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./screen-constants";

const initialState: ScreenReducerType = {
  screenType: "",
  screenTheme: "",
  notifications: [],
};
const ScreenReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
): ScreenReducerType => {
  switch (type) {
    case SET_SCREEN_TYPE:
      return { ...state, screenType: payload };
    case SET_SCREEN_THEME:
      return { ...state, screenTheme: payload };
    case ADD_NOTIFICATION: {
      const existingNotifications = [...state.notifications];
      const notifications = [
        ...existingNotifications,
        {
          id: generateRandomId(),
          message: payload,
        },
      ];
      return {
        ...state,
        notifications,
      };
    }
    case REMOVE_NOTIFICATION: {
      const notifications = state.notifications.filter(
        (notification) => notification.id !== payload
      );
      return { ...state, notifications };
    }
    default:
      return state;
  }
};
export { ScreenReducer };
