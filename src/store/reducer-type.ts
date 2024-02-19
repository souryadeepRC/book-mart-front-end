import { rootStore } from "src/store/root-store";

export type AppReducerType = {
  isLoading: boolean;
  action: string;
  error: string;
  isMobile: boolean;
  isLoginVerified: boolean;
  userDetails: { username: string; email: string };
};
export type ReducerActionPayloadType = {
  type: any;
  payload?: any;
};

export type AppStoreType = {
  app: AppReducerType;
};

export type AppDispatch = typeof rootStore.dispatch;
