// types
import { AppStoreType } from "src/store/reducer-types";

export const selectUserIsLoading = (state: AppStoreType): boolean =>
  state?.user?.isLoading;

export const selectUserAction = (state: AppStoreType): string =>
  state?.user?.action;
export const selectUserError = (state: AppStoreType): string =>
  state?.user?.error;

export const selectUserName = (state: AppStoreType): string =>
  state?.user?.username;
export const selectUserEmail = (state: AppStoreType): string =>
  state?.user?.email;
export const selectMessages = (state: AppStoreType): any[] | [] =>
  state?.user?.messages;
