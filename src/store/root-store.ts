import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import { UserReducer } from "./user/user-reducer";
import { ScreenReducer } from "src/store/screen/screen-reducer";
import { AuthReducer } from "src/store/auth/auth-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  screen: ScreenReducer,
  auth: AuthReducer,
  user: UserReducer,
};

const rootStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.ENVIRONMENT !== "production",
});

sagaMiddleware.run(rootSaga);

export { rootStore };
