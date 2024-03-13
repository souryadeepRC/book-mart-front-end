// store
import { rootStore } from "src/store/root-store";
import { SignUpType } from "src/types/authentication-types";
import { BookType } from "src/types/book-types";
// types

export type ScreenReducerType = {
  mediaType: string;
  appTheme: string;
  notifications: any[] | [];
};

export type BookReducerType = {
  action: string;
  isLoading: boolean;
  error: string;
  books: BookType[] | [];
};
export type AuthReducerType = {
  action: string;
  isLoading: boolean;
  error: string;
  errorStatusCode: number | undefined;
  authToken: string;
  isUserAuthenticated: boolean;
  loginState: string;
  signupState: string;
  authOtp: string;
  isAccessTokenExist: boolean;
  signUp: SignUpType;
};
export type UserReducerType = {
  isLoading: boolean;
  action: string;
  error: string;
  username: string;
  email: string;
  personal: {
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
  };
  contact: {
    primary: {
      code: string;
      value: string;
    };
    secondary: {
      code: string;
      value: string;
    };
  };
};
export type ReducerActionPayloadType = {
  type: any;
  payload?: any;
};

export type AppStoreType = {
  screen: ScreenReducerType;
  auth: AuthReducerType;
  user: UserReducerType;
  book: BookReducerType;
};

export type AppDispatch = typeof rootStore.dispatch;
