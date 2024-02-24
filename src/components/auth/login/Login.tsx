import { useEffect } from "react";
// library
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// icons
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// common components
import { Button, OtpValidation } from "src/components/common/CommonComponents";
// components
import { LoginForm } from "./LoginForm";
// actions
import { resendOtp, verifyOtp } from "src/store/auth/auth-actions";
// selectors
import {
  selectAuthError,
  selectIsUserAuthenticated,
  selectLoginState,
} from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { LOGIN_STATE } from "src/constants/authentication-constants";
// styles
import styles from "./Login.module.scss";
const Login = (): JSX.Element => {
  // store
  const navigate: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const error: string = useSelector(selectAuthError);
  const loginState: string = useSelector(selectLoginState);
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);
  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/books");
    }
  }, [navigate, isUserAuthenticated]);

  const onOtpSubmit = (enteredOtp: string): void => {
    dispatch(verifyOtp(enteredOtp));
  };
  const onOtpResend = (): void => {
    dispatch(resendOtp());
  };
  return (
    <div className={styles["login__container"]}>
      {error && (
        <section className={styles["login-error__container"]}>
          <WarningAmberIcon sx={{ color: "#b12704" }} />
          <span className={styles["login-error__message"]}>{error}</span>
        </section>
      )}
      {loginState === LOGIN_STATE.ACCOUNT && (
        <section className={styles["login-form__container"]}>
          <LoginForm />
        </section>
      )}
      {loginState === LOGIN_STATE.OTP && (
        <section className={styles["login-form__container"]}>
          <OtpValidation onSubmit={onOtpSubmit} onOtpResend={onOtpResend} />
        </section>
      )}
      <Divider className={styles["sign-up__divider"]}>
        New to BookMart ?
      </Divider>
      <Link to="/auth/register">
        <Button className={styles["sign-up__btn"]} variant="outlined">
          Create your account
        </Button>
      </Link>
    </div>
  );
};

export { Login };

