import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.ENVIRONMENT !== "production",
});

sagaMiddleware.run(rootSaga);

export { rootStore };
