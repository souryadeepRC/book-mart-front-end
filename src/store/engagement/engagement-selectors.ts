// types
import { AppStoreType } from "src/store/reducer-types";
import {
  ActiveChatRoomType,
  ChatRoomStoreType,
  CommunityType,
} from "src/types/engagement-types";

export const selectEngagementIsLoading = (state: AppStoreType): boolean =>
  state?.engagement?.isLoading;
export const selectEngagementAction = (state: AppStoreType): string =>
  state?.engagement?.action;
export const selectEngagementError = (state: AppStoreType): string =>
  state?.engagement?.error;

export const selectCommunities = (state: AppStoreType): CommunityType[] | [] =>
  state?.engagement?.communities;
export const selectChatRooms = (state: AppStoreType): ChatRoomStoreType =>
  state?.engagement?.chatRooms;
export const selectActiveChatroom = (state: AppStoreType): ActiveChatRoomType =>
  state?.engagement?.activeChatRoom;

export const selectActiveChatRoom = (state: AppStoreType): ActiveChatRoomType =>
  state?.engagement?.activeChatRoom;

export const selectActiveChatRoomId = (state: AppStoreType): string =>
  state?.engagement?.activeChatRoom?.roomId;
