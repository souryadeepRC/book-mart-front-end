import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
// reducers 
import { AppReducer } from "./app-reducer/app-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  app: AppReducer,
};

const rootStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.ENVIRONMENT !== "production",
});
sagaMiddleware.run(rootSaga);

export { rootStore };
 