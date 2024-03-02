// types
import { AppStoreType } from "src/store/reducer-types";
import {
  SignUpDetailsAccountType,
  SignUpDetailsAddressType,
  SignUpDetailsContactType,
  SignUpDetailsPasswordType,
  SignUpDetailsPersonalType,
  SignUpDetailsType,
} from "src/types/authentication-types";

export const selectAuthIsLoading = (state: AppStoreType): boolean =>
  state?.auth?.isLoading;
export const selectAuthAction = (state: AppStoreType): string =>
  state?.auth?.action;
export const selectAuthError = (state: AppStoreType): string =>
  state?.auth?.error;
export const selectAuthErrorStatusCode = (
  state: AppStoreType
): number | undefined => state?.auth?.errorStatusCode;

export const selectIsUserAuthenticated = (state: AppStoreType): boolean =>
  state?.auth?.isUserAuthenticated;
export const selectLoginState = (state: AppStoreType): string =>
  state?.auth?.loginState;
export const selectSignupState = (state: AppStoreType): string =>
  state?.auth?.signupState;
export const selectAuthOtp = (state: AppStoreType): string =>
  state?.auth?.authOtp;
export const selectIsAccessTokenExist = (state: AppStoreType): boolean =>
  state?.auth?.isAccessTokenExist;

/// SIGN UP

export const selectSignUpActiveStepIndex = (state: AppStoreType): number =>
  state?.auth?.signUp?.activeStepIndex;
export const selectSignUpSavedStepIndexes = (state: AppStoreType): boolean[] =>
  state?.auth?.signUp?.savedStepIndexes;
export const selectSignUpMaxStep = (state: AppStoreType): number =>
  state?.auth?.signUp?.maxStep;
export const selectSignUpDetails = (state: AppStoreType): SignUpDetailsType =>
  state?.auth?.signUp?.details;
export const selectSignUpAccountDetails = (
  state: AppStoreType
): SignUpDetailsAccountType => state?.auth?.signUp?.details?.account;
export const selectSignUpPasswordDetails = (
  state: AppStoreType
): SignUpDetailsPasswordType => state?.auth?.signUp?.details?.password;

export const selectSignUpPersonalDetails = (
  state: AppStoreType
): SignUpDetailsPersonalType => state?.auth?.signUp?.details?.personal;

export const selectSignUpAddressDetails = (
  state: AppStoreType
): SignUpDetailsAddressType => state?.auth?.signUp?.details?.address;

export const selectSignUpContactDetails = (
  state: AppStoreType
): SignUpDetailsContactType => state?.auth?.signUp?.details?.contact;