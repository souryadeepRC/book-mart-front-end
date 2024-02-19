import { all } from "redux-saga/effects";
// application 
import { appSaga } from "./app-reducer/app-saga";

export function* rootSaga() {
  yield all([appSaga()]);
}
