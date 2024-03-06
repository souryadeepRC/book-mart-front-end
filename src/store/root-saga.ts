import { all } from "redux-saga/effects";
// application
import { authSaga } from "src/store/auth/auth-saga";
import { userSaga } from "src/store/user/user-saga";
import { bookSaga } from "./book/book-saga";
import { engagementSaga } from "./engagement/engagement-saga";

export function* rootSaga() {
  yield all([authSaga(), userSaga(), bookSaga(), engagementSaga()]);
}
