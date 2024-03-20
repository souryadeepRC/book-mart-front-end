// types
import { AppStoreType } from "src/store/reducer-types";
import {
  ActiveChatRoomType,
  ChatBuddiesType,
  CommunityType
} from "src/types/engagement-types";

export const selectEngagementIsLoading = (state: AppStoreType): boolean =>
  state?.engagement?.isLoading;
export const selectEngagementAction = (state: AppStoreType): string =>
  state?.engagement?.action;
export const selectEngagementError = (state: AppStoreType): string =>
  state?.engagement?.error;

export const selectCommunities = (state: AppStoreType): CommunityType[] | [] =>
  state?.engagement?.communities;
export const selectChatBuddies = (state: AppStoreType): ChatBuddiesType =>
  state?.engagement?.chatBuddies;
export const selectIsChatBuddyPresent = (state: AppStoreType): boolean =>
  state?.engagement?.chatBuddies.buddies.length > 0;
export const selectActiveChatroom = (state: AppStoreType): ActiveChatRoomType =>
  state?.engagement?.activeChatRoom;

export const selectActiveChatRoom = (
  state: AppStoreType
): ActiveChatRoomType => state?.engagement?.activeChatRoom;
