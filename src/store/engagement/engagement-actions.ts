// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import { FETCH_COMMUNITY_POSTS } from "./engagement-constants";

export const fetchCommunityPosts = (): ReducerActionPayloadType => {
  return {
    type: FETCH_COMMUNITY_POSTS,
  };
};
