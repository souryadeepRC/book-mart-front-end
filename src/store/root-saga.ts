import { all } from "redux-saga/effects";
// application
import { authSaga } from "src/store/auth/auth-saga";
import { userSaga } from "src/store/user/user-saga";

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
