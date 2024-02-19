import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { rootStore } from "src/store/root-store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (process.env.ENVIRONMENT === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}
root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
