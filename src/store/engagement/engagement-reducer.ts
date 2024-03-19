// types
import {
  EngagementReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// mappers
import { mapChatBuddies, mapNewChatMessage } from "./engagement-mappers";
// constants
import {
  ADD_ACTIVE_CHAT_MESSAGE,
  FETCH_CHAT_BUDDIES_FAILURE,
  FETCH_CHAT_BUDDIES_REQUEST,
  FETCH_CHAT_BUDDIES_SUCCESS,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  RESET_ACTIVE_CHAT,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
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
  activeChatMessage: {
    isLastPage: false,
    page: 0,
    pageSize: 10,
    messages: [],
  },
};
const EngagementReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case FETCH_COMMUNITIES_REQUEST:
    case FETCH_CHAT_BUDDIES_REQUEST:
    case FETCH_MESSAGE_REQUEST:
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
        ...mapChatBuddies(payload),
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
      const { activeChatMessage } = state;

      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        ...mapNewChatMessage(activeChatMessage, payload),
      };
    }
    case ADD_ACTIVE_CHAT_MESSAGE: {
      const { activeChatMessage } = state;
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        ...mapNewChatMessage(activeChatMessage, payload),
      };
    }
    case FETCH_MESSAGE_SUCCESS: {
      const { activeChatMessage } = state;
      const { messages: fetchedMessages, isLastPage, page, pageSize } = payload;
      const existingMessages = [...activeChatMessage.messages];
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        activeChatMessage: {
          isLastPage,
          page,
          pageSize,
          messages: [...existingMessages, ...fetchedMessages],
        },
      };
    }
    case RESET_ACTIVE_CHAT: {
      return {
        ...state,
        action: type,
        activeChatMessage: initialState.activeChatMessage,
      };
    }
    case FETCH_COMMUNITIES_FAILURE:
    case FETCH_CHAT_BUDDIES_FAILURE:
    case SEND_MESSAGE_FAILURE:
    case FETCH_MESSAGE_FAILURE:
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

