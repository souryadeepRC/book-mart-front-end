// types
import {
  EngagementReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// constants
import {
  FETCH_COMMUNITY_POSTS_FAILURE,
  FETCH_COMMUNITY_POSTS_REQUEST,
  FETCH_COMMUNITY_POSTS_SUCCESS,
} from "src/store/engagement/engagement-constants";

const initialState: EngagementReducerType = {
  action: "",
  isLoading: false,
  error: "",
  communityPosts: [],
};
const EngagementReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case FETCH_COMMUNITY_POSTS_REQUEST:
      return { ...state, isLoading: true, action: type };

    case FETCH_COMMUNITY_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        communityPosts: payload,
      };
    }
    case FETCH_COMMUNITY_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        action: type,
        error: payload,
      };
    default:
      return state;
  }
};
export { EngagementReducer };

