// store
import { rootStore } from "src/store/root-store";
import { SignUpType } from "src/types/authentication-types";
import { BookType } from "src/types/book-types";
import { CommunityType } from "src/types/engagement-types";
// types

export type ScreenReducerType = {
  mediaType: string;
  appTheme: string;
  notifications: any[] | [];
};
export type EngagementReducerType = {
  action: string;
  isLoading: boolean;
  error: string;
  communities: CommunityType[] | [];
  messageBuddies: { _id: string; imageUrl: string; name: string }[];
  activeBuddyMessage: {
    buddy: { _id: string; name: string };
    messages: { _id: string; userId: string; message: string }[];
  };
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
  messages: any[] | [];
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
  engagement: EngagementReducerType;
};

export type AppDispatch = typeof rootStore.dispatch;
