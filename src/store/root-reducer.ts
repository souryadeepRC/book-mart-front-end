import { combineReducers } from "@reduxjs/toolkit";
// reducers
import { AuthReducer } from "src/store/auth/auth-reducer";
import { BookReducer } from "src/store/book/book-reducer";
import { ScreenReducer } from "src/store/screen/screen-reducer";
import { UserReducer } from "./user/user-reducer";
// utils
import { removeItemFromLS } from "src/utils/storage-utils";
// constants
import { STORAGE_KEY } from "src/constants/common-constants";
import { USER_LOGOUT } from "./auth/auth-constants";

// Define your reducers
const combinedReducers = combineReducers({
  screen: ScreenReducer,
  auth: AuthReducer,
  user: UserReducer,
  book: BookReducer,
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

