import { put, takeEvery } from "redux-saga/effects";
import { getLoggedInUserDetails } from "src/api/user-api";
import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
} from "./user-constants";

function* fetchUserDetails(): any {
  yield put({ type: FETCH_USER_DETAILS_REQUEST });

  try {
    const response = yield getLoggedInUserDetails();
    yield put({ type: FETCH_USER_DETAILS_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({
      type: FETCH_USER_DETAILS_FAILURE,
      error: error.response.error_description,
    });
  }
}
export function* userSaga() {
  yield takeEvery(FETCH_USER_DETAILS, fetchUserDetails);
}
