// types
import { AppStoreType } from "src/store/reducer-types";
import { CommunityPostType } from "src/types/engagement-types";

export const selectEngagementIsLoading = (state: AppStoreType): boolean =>
  state?.engagement?.isLoading;
export const selectEngagementAction = (state: AppStoreType): string =>
  state?.engagement?.action;
export const selectEngagementError = (state: AppStoreType): string =>
  state?.engagement?.error;

export const selectCommunityPosts = (
  state: AppStoreType
): CommunityPostType[] | [] => state?.engagement?.communityPosts;
