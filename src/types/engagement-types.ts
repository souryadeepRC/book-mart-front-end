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
  members: BuddyType[];
};

export type BuddyType = {
  _id: string;
  username: string;
  imageUrl: string;
};
export type ActiveChatRoomType = {
  members: BuddyType[] | [];
  roomId: string;
  isLastPage: boolean;
  page: number;
  pageSize: number;
  messages: ChatMessageType[] | [];
};
export type PrevMessagePayloadType = {
  roomDetails: {
    members: BuddyType[] | [];
    roomId: string;
  };
  isLastPage: boolean;
  page: number;
  pageSize: number;
  messages: ChatMessageType[] | [];
};

export type ChatMessageType = {
  _id?: string;
  roomId?: string;
  sender: string;
  receiver: string;
  message: string;
  timestamp?: string;
};
export type ChatRoomStoreType = {
  isLastPage: boolean;
  page: number;
  pageSize: number;
  rooms: ChatRoomType[] | [];
};
export type ChatMessageFilterType = {
  roomId: string;
  page: number;
  pageSize: number;
};
