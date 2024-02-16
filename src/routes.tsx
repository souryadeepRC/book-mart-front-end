import { Suspense, lazy } from "react";
// library
import { Routes, Route, Navigate } from "react-router-dom";

const ProductsPage = lazy(() =>
  import("src/pages/ProductsPage").then(({ ProductsPage }) => ({
    default: ProductsPage,
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

const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="" element={<Navigate to="products" />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="auth">
          <Route path="" element={<Navigate to="login" />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Suspense>
  );
};
export { AppRoutes };
