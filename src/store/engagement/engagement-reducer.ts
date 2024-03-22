// types
import {
  EngagementReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// mappers
import {
  mapChatRooms,
  mapNewChatMessage,
  mapPrevChatMessage,
} from "./engagement-mappers";
// constants
import {
  ADD_ACTIVE_CHAT_MESSAGE,
  FETCH_CHAT_ROOMS_FAILURE,
  FETCH_CHAT_ROOMS_REQUEST,
  FETCH_CHAT_ROOMS_SUCCESS,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  RESET_ACTIVE_CHAT,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SET_ACTIVE_CHAT,
} from "src/store/engagement/engagement-constants";

const initialState: EngagementReducerType = {
  action: "",
  isLoading: false,
  error: "",
  communities: [],
  messageBuddies: [],
  activeChatRoom: {
    members: [],
    roomId: "",
    isLastPage: false,
    page: 0,
    pageSize: 10,
    messages: [],
  },
  chatRooms: {
    isLastPage: false,
    page: 0,
    pageSize: 10,
    rooms: [],
  },
};
const EngagementReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case FETCH_COMMUNITIES_REQUEST:
    case FETCH_CHAT_ROOMS_REQUEST:
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
    case FETCH_CHAT_ROOMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        ...mapChatRooms(state.chatRooms, state.activeChatRoom, payload),
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        ...mapNewChatMessage(state.activeChatRoom, payload),
      };
    }
    case ADD_ACTIVE_CHAT_MESSAGE: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        ...mapNewChatMessage(state.activeChatRoom, payload),
      };
    }
    case FETCH_MESSAGE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        ...mapPrevChatMessage(state.activeChatRoom, payload),
      };
    }
    case SET_ACTIVE_CHAT: {
      return {
        ...state,
        activeChatRoom: {
          ...initialState.activeChatRoom,
          roomId: payload,
        },
      };
    }
    case RESET_ACTIVE_CHAT: {
      return {
        ...state,
        action: type,
        activeChatRoom: initialState.activeChatRoom,
      };
    }
    case FETCH_COMMUNITIES_FAILURE:
    case FETCH_CHAT_ROOMS_FAILURE:
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

