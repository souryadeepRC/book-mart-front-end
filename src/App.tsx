import { useEffect } from "react";
// library
import { useDispatch, useSelector } from "react-redux";
// components
import { Header } from "src/components/header/Header";
import { StackedNotification } from "src/components/stacked-notification/StackedNotification";
// routes
import { AppRoutes } from "src/app-route/routes";
// hooks
import { useLocalStorage } from "src/hooks/useLocalStorage";
import { useMediaQuery } from "src/hooks/useMediaQuery";
// actions
import { setScreenType } from "src/store/screen/screen-actions";
// selectors
import { selectScreenType } from "./store/screen/screen-selectors";
// types
import { AppDispatch } from "./store/reducer-types";
// utils
// constants
// styles
import "./App.scss";
const App = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const screenType: string = useSelector(selectScreenType);
  // hooks
  useLocalStorage();
  const mediaType: string = useMediaQuery();
  // effects
  useEffect(() => {
    if (!mediaType) return;
    dispatch(setScreenType(mediaType));
  }, [dispatch, mediaType]);

  if (!screenType) {
    return <span>Loading...</span>;
  }
  // render fns
  return (
    <StackedNotification>
      <>
        <Header />
        <AppRoutes />
      </>
    </StackedNotification>
  );
};

export default App;
