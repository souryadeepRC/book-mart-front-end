import { useEffect } from "react";
// library
import { useDispatch, useSelector } from "react-redux";
// common components
import { Loader } from "src/components/common/CommonComponents";
// components
import { Header } from "src/components/header/Header";
import { StackedNotification } from "src/components/stacked-notification/StackedNotification";
import { Navigation } from "./components/navigation/Navigation";
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
// constants
import { MEDIA_TYPES } from "./constants/screen-constants";
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
    return <Loader />;
  }
  // render fns
  return (
    <StackedNotification>
      <section className="app__container">
        <header className="app-header">
          <Header />
          {screenType !== MEDIA_TYPES.MOBILE && <Navigation />}
        </header>
        <section className="app-content">
          <AppRoutes />
        </section>
        {screenType === MEDIA_TYPES.MOBILE && <Navigation />}
      </section>
    </StackedNotification>
  );
};

export default App;
