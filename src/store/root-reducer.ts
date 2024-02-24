import { combineReducers } from "@reduxjs/toolkit";
// reducers
import { UserReducer } from "./user/user-reducer";
import { ScreenReducer } from "src/store/screen/screen-reducer";
import { AuthReducer } from "src/store/auth/auth-reducer";
import { USER_LOGOUT } from "./auth/auth-constants";
// utils
import { removeItemFromLS } from "src/utils/storage-utils";
// constants
import { STORAGE_KEY } from "src/constants/common-constants";

// Define your reducers
const combinedReducers = combineReducers({
  screen: ScreenReducer,
  auth: AuthReducer,
  user: UserReducer,
});
const rootReducer = (state: any, action: any) => {
  if (action.type === USER_LOGOUT) {
    removeItemFromLS(STORAGE_KEY.ACCESS_TOKEN);
    window.location.href = "/";
    // Reset the state to its initial state when logging out
    state = undefined;
  }
  return combinedReducers(state, action);
};
export { rootReducer };
