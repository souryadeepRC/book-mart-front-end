// types
import {
  EngagementReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// constants
import {
  FETCH_COMMUNITIES_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_MESSAGE_BUDDIES_FAILURE,
  FETCH_MESSAGE_BUDDIES_REQUEST,
  FETCH_MESSAGE_BUDDIES_SUCCESS,
  SET_ACTIVE_BUDDY,
  SET_ACTIVE_BUDDY_MESSAGE,
} from "src/store/engagement/engagement-constants";

const initialState: EngagementReducerType = {
  action: "",
  isLoading: false,
  error: "",
  communities: [],
  messageBuddies: [],
  activeBuddyMessage: {
    buddy: { _id: "", name: "" },
    messages: [],
  },
};
const EngagementReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case FETCH_COMMUNITIES_REQUEST:
    case FETCH_MESSAGE_BUDDIES_REQUEST:
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
    case FETCH_MESSAGE_BUDDIES_SUCCESS: {
      return {
        ...state,
        messageBuddies: [
          {
            _id: 101,
            imageUrl:
              "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
            name: "Sumita",
            lastMessage: "Welcome",
          },
          {
            _id: 102,
            imageUrl:
              "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
            name: "Dipak",
            lastMessage: "Welcome",
          },
          {
            _id: 103,
            imageUrl:
              "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
            name: "Sona",
            lastMessage: "Welcome",
          },
          {
            _id: 104,
            imageUrl:
              "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
            name: "Riju",
            lastMessage: "Welcome",
          },
        ],
        activeBuddyMessage: {
          buddy: {
            _id: 101,
            imageUrl:
              "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
            name: "Sumita",
          },
          messages: [],
        },
      };
    }
    case SET_ACTIVE_BUDDY: {
      return {
        ...state,
        activeBuddyMessage: {
          buddy: payload,
          messages: [],
        },
      };
    }
    case SET_ACTIVE_BUDDY_MESSAGE: {
      return {
        ...state,
        activeBuddyMessage: {
          ...state.activeBuddyMessage,
          messages: [...state.activeBuddyMessage.messages, payload],
        },
      };
    }
    case FETCH_COMMUNITIES_FAILURE:
    case FETCH_MESSAGE_BUDDIES_FAILURE:
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

