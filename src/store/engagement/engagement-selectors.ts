// types
import { AppStoreType } from "src/store/reducer-types";
import {
  ActiveChatMessageType,
  ActiveChatType,
  ChatBuddyType,
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
export const selectChatBuddies = (state: AppStoreType): ChatBuddyType[] | [] =>
  state?.engagement?.chatBuddies;
export const selectIsChatBuddyPresent = (state: AppStoreType): boolean =>
  state?.engagement?.chatBuddies.length > 0;
export const selectActiveChat = (state: AppStoreType): ActiveChatType =>
  state?.engagement?.activeChat;

export const selectActiveChatMessage = (
  state: AppStoreType
): ActiveChatMessageType => state?.engagement?.activeChatMessage;
