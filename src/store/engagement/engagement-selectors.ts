// types
import { AppStoreType } from "src/store/reducer-types";
import { CommunityType } from "src/types/engagement-types";

export const selectEngagementIsLoading = (state: AppStoreType): boolean =>
  state?.engagement?.isLoading;
export const selectEngagementAction = (state: AppStoreType): string =>
  state?.engagement?.action;
export const selectEngagementError = (state: AppStoreType): string =>
  state?.engagement?.error;

export const selectCommunities = (state: AppStoreType): CommunityType[] | [] =>
  state?.engagement?.communities;
