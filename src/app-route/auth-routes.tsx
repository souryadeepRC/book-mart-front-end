import { lazy } from "react";
// library
import {
  Navigate,
  Route,
} from "react-router-dom";
// components
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

const AuthRoutes = (): any => { 
 
    return (
      <>
        <Route path="" element={<Navigate to="login" />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </>
    );
   
};
export { AuthRoutes };

