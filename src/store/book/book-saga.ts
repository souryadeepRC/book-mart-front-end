import { put, takeEvery } from "redux-saga/effects";
// api
import { getBooks } from "src/api/book-api";
// constants
import {
  FETCH_BOOKS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "./book-constants";

function* fetchBookSaga(): any {
  yield put({ type: FETCH_BOOKS_REQUEST });
  try {
    const response = yield getBooks(); 
    yield put({
      type: FETCH_BOOKS_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: FETCH_BOOKS_FAILURE,
      payload:
        error.response.data.error_description ||
        "Sorry! network issue detected",
    });
  }
}

export function* bookSaga() {
  yield takeEvery(FETCH_BOOKS, fetchBookSaga);
}
