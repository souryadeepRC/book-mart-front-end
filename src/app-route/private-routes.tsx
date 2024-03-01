import { lazy } from "react";
// library
import { Route, Routes } from "react-router-dom";
// selectors
import { PrivateLayout } from "./layout/PrivateLayout";
// components
const CartPage: any = lazy(() =>
  import("src/pages/CartPage").then(({ CartPage }) => ({
    default: CartPage,
  }))
);
const AccountPage: any = lazy(() =>
  import("src/pages/AccountPage").then(({ AccountPage }) => ({
    default: AccountPage,
  }))
);

const PrivateRoutes = (): any => {
  

  return (
    <Routes>
      <Route path="cart" element={<PrivateLayout component={CartPage} />} />
      <Route
        path="account"
        element={<PrivateLayout component={AccountPage} />}
      />
    </Routes>
  );
};
export { PrivateRoutes };

