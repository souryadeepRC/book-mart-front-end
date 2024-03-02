import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// library
import Divider from "@mui/material/Divider";
// components
import { SignUpForm } from "./SignUpForm";
// common components
import { Button } from "src/components/common/CommonComponents";
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

      <Divider className={styles["sign-up__divider"]}>
        Already have an account ?
      </Divider>
      <Link to="/auth/login">
        <Button className={styles["sign-up__btn"]} variant="outlined">
          Login
        </Button>
      </Link>
    </div>
  );
};

export { SignUp };

