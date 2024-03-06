import { combineReducers } from "@reduxjs/toolkit";
// reducers
import { AuthReducer } from "src/store/auth/auth-reducer";
import { BookReducer } from "src/store/book/book-reducer";
import { ScreenReducer } from "src/store/screen/screen-reducer";
import { UserReducer } from "./user/user-reducer";
// utils
import { removeAllItemFromLS } from "src/utils/storage-utils";
// constants
import {
  RESET_USER_AUTH,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS,
} from "./auth/auth-constants";
import { EngagementReducer } from "./engagement/engagement-reducer";

// Define your reducers
const combinedReducers = combineReducers({
  screen: ScreenReducer,
  auth: AuthReducer,
  user: UserReducer,
  book: BookReducer,
  engagement: EngagementReducer
});
const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_USER_AUTH || action.type === USER_LOGOUT_SUCCESS) {
    removeAllItemFromLS();
    window.location.href = "/"; 
    // Reset the state to its initial state when logging out
    state = undefined;
  }
  if (action.type === USER_LOGOUT_FAILURE) {
    console.log("TOKEN NOT VALID");
  }
  return combinedReducers(state, action);
};
export { rootReducer };

