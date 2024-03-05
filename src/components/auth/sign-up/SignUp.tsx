import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// library
// components
import { SignUpForm } from "./SignUpForm";
// common components
// icons
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// selectors
import {
  selectAuthError,
  selectIsUserAuthenticated,
} from "src/store/auth/auth-selectors";
// styles
import styles from "./SignUp.module.scss";

const SignUp = (): JSX.Element => {
  // store
  const error: string = useSelector(selectAuthError);
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);
  // hooks
  const navigate: NavigateFunction = useNavigate();
  // effects
  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/books");
    }
  }, [navigate, isUserAuthenticated]);
  return (
    <div className={styles["sign-up__container"]}>
      {error && (
        <section className={styles["sign-up-error__container"]}>
          <WarningAmberIcon sx={{ color: "#b12704" }} />
          <span className={styles["sign-up-error__message"]}>{error}</span>
        </section>
      )}
      <SignUpForm />
      <section className={styles["login-option"]}>
        <span>Already have an account ?</span>
        <Link className={styles["login__link"]} to="/auth/login">
          Login
        </Link>
      </section>
    </div>
  );
};

export { SignUp };

