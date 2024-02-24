// types
import { AppStoreType } from "src/store/reducer-types";
import { BookType } from "src/types/book-types";

export const selectBookIsLoading = (state: AppStoreType): boolean =>
  state?.book?.isLoading;
export const selectBookAction = (state: AppStoreType): string =>
  state?.book?.action;
export const selectBookError = (state: AppStoreType): string =>
  state?.book?.error;

export const selectBooks = (state: AppStoreType): BookType[] | [] =>
  state?.book?.books;
