// types
import { AppStoreType } from "src/store/reducer-type";

export const selectAuthIsLoading = (state: AppStoreType): boolean =>
  state?.auth?.isLoading;
export const selectAuthAction = (state: AppStoreType): string =>
  state?.auth?.action;
export const selectAuthError = (state: AppStoreType): string =>
  state?.auth?.error;

export const selectIsUserAuthenticated = (state: AppStoreType): boolean =>
  state?.auth?.isUserAuthenticated;
export const selectLoginState = (state: AppStoreType): string =>
  state?.auth?.loginState;
export const selectSignupState = (state: AppStoreType): string =>
  state?.auth?.signupState;
export const selectAuthOtp = (state: AppStoreType): string =>
  state?.auth?.authOtp;
