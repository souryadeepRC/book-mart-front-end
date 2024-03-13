// types
import {
  ReducerActionPayloadType,
  UserReducerType,
} from "src/store/reducer-types";
// constants
import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
  SET_USER_DETAILS,
} from "./user-constants";

const initialState: UserReducerType = {
  isLoading: false,
  action: "",
  error: "",
  userId: "",
  username: "",
  email: "",
  personal: {
    name: { firstName: "", middleName: "", lastName: "" },
  },
  contact: {
    primary: {
      code: "",
      value: "",
    },
    secondary: {
      code: "",
      value: "",
    },
  },
  messages: [],
};
const UserReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
): UserReducerType => {
  switch (type) {
    case FETCH_USER_DETAILS_REQUEST:
      return { ...state, isLoading: true, action: type };
    case FETCH_USER_DETAILS_SUCCESS: {
      const { _id: userId, username, email, personal, contact } = payload;
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        userId,
        username,
        email,
        personal,
        contact,
      };
    }
    case SET_USER_DETAILS: {
      const { username, email, personal, contact } = payload;
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        username,
        email,
        personal,
        contact,
      };
    }
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        action: type,
        error: payload,
      };
    case "STORE_MESSAGE":
      return {
        ...state,
        messages: [payload, ...state.messages],
      };
    default:
      return state;
  }
};
export { UserReducer };

