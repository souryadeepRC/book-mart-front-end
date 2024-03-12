// types
import {
  ReducerActionPayloadType,
  ScreenReducerType,
} from "src/store/reducer-types";
// utils
import { generateRandomId } from "src/utils/common-utils";
// constants
import { THEME_TYPES } from "src/constants/screen-constants";
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_SCREEN_TYPE,
  TOGGLE_APP_THEME,
} from "./screen-constants";

const initialState: ScreenReducerType = {
  screenType: "",
  appTheme: THEME_TYPES.LIGHT,
  notifications: [],
};
const ScreenReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
): ScreenReducerType => {
  switch (type) {
    case SET_SCREEN_TYPE:
      return { ...state, screenType: payload };
    case TOGGLE_APP_THEME:
      return {
        ...state,
        appTheme:
          state.appTheme === THEME_TYPES.LIGHT
            ? THEME_TYPES.DARK
            : THEME_TYPES.LIGHT,
      };
    case ADD_NOTIFICATION: {
      const existingNotifications = [...state.notifications];
      const { message, type = "success" } = payload;
      const notifications = [
        ...existingNotifications,
        {
          id: generateRandomId(),
          message,
          type,
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

