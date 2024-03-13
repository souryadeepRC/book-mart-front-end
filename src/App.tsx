// library
import { useSelector } from "react-redux";
// common components
import { Loader } from "src/components/common/CommonComponents";
// components
import { AppHeader } from "src/components/header/AppHeader";
import { StackedNotification } from "src/components/stacked-notification/StackedNotification";
// routes
import { AppRoutes } from "src/app-route/routes";
// hooks
import { useLocalStorage } from "src/hooks/useLocalStorage";
import { useMediaQuery } from "src/hooks/useMediaQuery";
// selectors
import { selectAppTheme } from "./store/screen/screen-selectors";
// styles
import "./App.scss";

const App = (): JSX.Element => {
  // store
  const appTheme: string = useSelector(selectAppTheme);
  // hooks
  useLocalStorage();
  const mediaType: string = useMediaQuery();
  // effects

  if (!mediaType) {
    return <Loader />;
  }
  // render fns
  return (
    <StackedNotification>
      <section className="app__container" data-theme={appTheme}>
        <AppHeader />
        <section className="app-content">
          <AppRoutes />
        </section>
      </section>
    </StackedNotification>
  );
};

export default App;
