import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
// library
import { Routes, Route, Navigate } from "react-router-dom";
// selectors
import { selectIsUserAuthenticated } from "src/store/auth/auth-selector";

const ProductsPage = lazy(() =>
  import("src/pages/ProductsPage").then(({ ProductsPage }) => ({
    default: ProductsPage,
  }))
);
const CartPage = lazy(() =>
  import("src/pages/CartPage").then(({ CartPage }) => ({
    default: CartPage,
  }))
);
const SignUp = lazy(() =>
  import("src/components/auth/sign-up/SignUp").then(({ SignUp }) => ({
    default: SignUp,
  }))
);
const Login = lazy(() =>
  import("src/components/auth/login/Login").then(({ Login }) => ({
    default: Login,
  }))
);
const Logout = lazy(() =>
  import("src/components/auth/logout/Logout").then(({ Logout }) => ({
    default: Logout,
  }))
);

const AppRoutes = (): JSX.Element => {
  // store
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="" element={<Navigate to="products" />} />
        <Route path="products" element={<ProductsPage />} />
        {isUserAuthenticated && <Route path="cart" element={<CartPage />} />}

        {!isUserAuthenticated && (
          <Route path="auth">
            <Route path="" element={<Navigate to="login" />} />
            <Route path="register" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
        )}
        {isUserAuthenticated && (
          <Route path="auth/logout" element={<Logout />} />
        )}

        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Suspense>
  );
};
export { AppRoutes };
