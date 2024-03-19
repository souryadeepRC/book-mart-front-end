export type EngagementNavigationType = {
  label: string;
  path: string;
};
export type EngagementActiveMemberType = {
  _id: string;
  username: string;
  stageName: string;
};
export type CommunityType = {
  _id: string;
  title: string;
  author: string;
  description: string;
  followersCount: string;
  postsCount: string;
  isMoreFollowers: boolean;
  topActiveMembers: EngagementActiveMemberType[] | [];
};

export type ChatRoomType = {
  _id: string;
  latestMessage: string;
  updated_ts: Date;
};
export type ChatBuddyType = {
  _id: string;
  buddy: BuddyType;
  chatRoom: ChatRoomType;
};
export type BuddyType = {
  _id: string;
  username: string;
  imageUrl: string;
};
export type ActiveChatType = {
  buddy: BuddyType | undefined;
  roomId: string;
};

export type ChatMessageType = {
  _id?: string;
  roomId?: string;
  sender: string;
  receiver: string;
  message: string;
  timestamp?: string;
};
export type ActiveChatMessageType = {
  isLastPage: boolean;
  page: number;
  pageSize: number;
  messages: ChatMessageType[] | [];
};
export type ChatMessageFilterType = {
  roomId: string;
  page: number;
  pageSize: number;
};
