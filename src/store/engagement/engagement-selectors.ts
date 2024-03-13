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
export const selectMessageBuddies = (state: AppStoreType): any[] | [] =>
  state?.engagement?.messageBuddies;
export const selectIsMessageBuddyPresent = (state: AppStoreType): boolean =>
  state?.engagement?.messageBuddies.length > 0;
export const selectActiveBuddy = (state: AppStoreType): any =>
  state?.engagement?.activeBuddyMessage?.buddy;

export const selectActiveBuddyMessages = (state: AppStoreType): any[] | [] =>
  state?.engagement?.activeBuddyMessage?.messages;
