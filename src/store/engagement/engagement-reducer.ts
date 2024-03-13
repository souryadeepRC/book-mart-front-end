// types
import {
  EngagementReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// constants
import {
  FETCH_CHAT_BUDDIES_FAILURE,
  FETCH_CHAT_BUDDIES_REQUEST,
  FETCH_CHAT_BUDDIES_SUCCESS,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  SET_ACTIVE_BUDDY_MESSAGE,
  SET_ACTIVE_CHAT,
} from "src/store/engagement/engagement-constants";

const initialState: EngagementReducerType = {
  action: "",
  isLoading: false,
  error: "",
  communities: [],
  messageBuddies: [],
  chatBuddies: [],
  activeChat: {
    buddy: undefined,
    roomId: "",
  },
};
const EngagementReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case FETCH_COMMUNITIES_REQUEST:
    case FETCH_CHAT_BUDDIES_REQUEST:
      return { ...state, isLoading: true, action: type };

    case FETCH_COMMUNITIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        communities: payload,
      };
    }
    case FETCH_CHAT_BUDDIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        chatBuddies: payload,
        activeChat: {
          buddy: payload?.[0]?.buddy || undefined,
          roomId: payload?.[0]?.chatRoom?._id || "",
        },
      };
    }
    case SET_ACTIVE_CHAT: {
      const { buddy, roomId } = payload;
      return {
        ...state,
        activeChat: {
          buddy,
          roomId,
        },
      };
    }
    case SET_ACTIVE_BUDDY_MESSAGE: {
      return {
        ...state,
      };
    }
    case FETCH_COMMUNITIES_FAILURE:
    case FETCH_CHAT_BUDDIES_FAILURE:
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

