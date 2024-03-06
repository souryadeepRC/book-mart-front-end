// types
import {
  BookReducerType,
  ReducerActionPayloadType,
} from "src/store/reducer-types";
// constants
import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "src/store/book/book-constants";

const initialState: BookReducerType = {
  action: "",
  isLoading: false,
  error: "",
  books: [],
};
const BookReducer = (
  state = initialState,
  { type, payload }: ReducerActionPayloadType
) => {
  switch (type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, isLoading: true, action: type };

    case FETCH_BOOKS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        action: type,
        books: payload,
      };
    }
    case FETCH_BOOKS_FAILURE:
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
export { BookReducer };

