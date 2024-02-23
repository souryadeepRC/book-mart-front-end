import { useEffect } from "react";
// library
import { useDispatch } from "react-redux";
// components
import { StackedNotification } from "src/components/stacked-notification/StackedNotification";
import { Header } from "src/components/header/Header";
// routes
import { AppRoutes } from "src/routes";
// hooks
import { useMediaQuery } from "src/hooks/useMediaQuery";
// actions
import { setScreenType } from "src/store/screen/screen-action";
// types
import { AppDispatch } from "./store/reducer-type";
// styles
import "./App.scss";
import { getItemFromLS } from "./utils/storage-utils";
import { setUserAuthenticate } from "./store/auth/auth-action";

const App = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // hooks
  const mediaType: string = useMediaQuery();
  const accessToken = getItemFromLS("accessToken");
  // effects
  useEffect(() => {
    if (accessToken) {
      dispatch(setUserAuthenticate(true));
    }
  }, [dispatch, accessToken]);
  useEffect(() => {
    if (!mediaType) return;
    dispatch(setScreenType(mediaType));
  }, [dispatch, mediaType]);

  if (!mediaType) {
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
