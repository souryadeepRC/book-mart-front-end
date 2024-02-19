// types
import { AppStoreType } from "src/store/reducer-type";

export const selectAppIsLoading = (state: AppStoreType): boolean =>
  state?.app?.isLoading;

export const selectAppAction = (state: AppStoreType): string =>
  state?.app?.action;
  export const selectAppError = (state: AppStoreType): string =>
    state?.app?.error;
export const selectAppDeviceState = (state: AppStoreType): boolean =>
  state?.app?.isMobile;

export const selectUserName = (state: AppStoreType): string =>
  state?.app?.userDetails?.username;
export const selectUserEmail = (state: AppStoreType): string =>
  state?.app?.userDetails?.email;
  export const selectIsUserVerified = (state: AppStoreType): boolean =>
    state?.app?.isLoginVerified;
