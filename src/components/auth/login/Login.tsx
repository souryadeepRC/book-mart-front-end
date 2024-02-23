import { useEffect } from "react";
// library
import { useSelector, useDispatch } from "react-redux";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
// icons
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// common components
import { Button, OtpValidation } from "src/components/common/CommonComponents";
// components
import { LoginForm } from "./LoginForm";
// actions
import { resendOtp, verifyOtp } from "src/store/auth/auth-action";
// selectors
import {
  selectLoginState,
  selectAuthError,
  selectIsUserAuthenticated,
} from "src/store/auth/auth-selector";
// types
import { AppDispatch } from "src/store/reducer-type";
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
  console.log('Login');
  
  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/products");
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
          <h1 style={{ margin: 0 }}>Log in</h1>
          <LoginForm />
        </section>
      )}
      {loginState === LOGIN_STATE.OTP && (
        <section className={styles["login-form__container"]}>
          <OtpValidation onSubmit={onOtpSubmit}  onOtpResend={onOtpResend}/>
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
