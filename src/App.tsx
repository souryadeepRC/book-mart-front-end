import { useEffect } from "react";
// library
import { useDispatch } from "react-redux";
// components
import { Header } from "src/components/header/Header";
import { StackedNotification } from "src/components/stacked-notification/StackedNotification";
// routes
import { AppRoutes } from "src/routes";
// hooks
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { useLocalStorage } from "./hooks/useLocalStorage";
// actions
import { setScreenType } from "src/store/screen/screen-action";
// types
import { AppDispatch } from "./store/reducer-type";
// styles
import "./App.scss";
const App = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // hooks
  useLocalStorage();
  const mediaType: string = useMediaQuery();

  // effects
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
