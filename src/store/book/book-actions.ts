// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import { FETCH_BOOKS } from "./book-constants";

export const fetchBooks = (): ReducerActionPayloadType => {
  return {
    type: FETCH_BOOKS,
  };
};
