import { Suspense, lazy } from "react";
// library
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
// routes
import { AuthRoutes } from "./auth-routes";
// selectors
import { selectIsAccessTokenExist } from "src/store/auth/auth-selectors";
// layout
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
const BooksPage = lazy(() =>
  import("src/pages/BooksPage").then(({ BooksPage }) => ({
    default: BooksPage,
  }))
);

const AppRoutes = (): JSX.Element => {
  // store
  const isAccessTokenExist: boolean = useSelector(selectIsAccessTokenExist);
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="" element={<Navigate to="books" />} />
        {!isAccessTokenExist && <Route path="auth">{AuthRoutes()}</Route>}
        <Route path="books" element={<BooksPage />} />
        {/* Private routes ---for  AUTHENTICATED */}
        <Route path="cart" element={<PrivateLayout component={CartPage} />} />
        <Route
          path="account"
          element={<PrivateLayout component={AccountPage} />}
        />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Suspense>
  );
};
export { AppRoutes };

