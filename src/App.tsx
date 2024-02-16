// components
import { Header } from "src/components/header/Header";
import { AppRoutes } from "src/routes";
// styles
import "./App.scss";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
