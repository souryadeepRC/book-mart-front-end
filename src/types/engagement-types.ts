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
  postsCount:string;
  isMoreFollowers:boolean;
  topActiveMembers: EngagementActiveMemberType[] | [];
};
