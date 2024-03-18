// types
import {
  EngagementReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// constants
import {
  ADD_ACTIVE_CHAT_MESSAGE,
  FETCH_CHAT_BUDDIES_FAILURE,
  FETCH_CHAT_BUDDIES_REQUEST,
  FETCH_CHAT_BUDDIES_SUCCESS,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SET_ACTIVE_BUDDY_MESSAGE,
  SET_ACTIVE_CHAT
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
  activeChatMessages: [],
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
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        activeChatMessages: [...state.activeChatMessages, payload],
      };
    }
    case ADD_ACTIVE_CHAT_MESSAGE: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        activeChatMessages: [...state.activeChatMessages, payload],
      };
    }
    case FETCH_COMMUNITIES_FAILURE:
    case FETCH_CHAT_BUDDIES_FAILURE:
    case SEND_MESSAGE_FAILURE:
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

