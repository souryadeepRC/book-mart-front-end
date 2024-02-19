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
import { verifyOtp } from "src/store/app-reducer/app-action";
// selectors
import {
  selectAppError,
  selectAppAction,
  selectIsUserVerified,
  selectUserName,
} from "src/store/app-reducer/app-selector";
// types
import { AppDispatch } from "src/store/reducer-type";
// styles
import styles from "./Login.module.scss";
import { useEffect } from "react";
const Login = (): JSX.Element => {
  // store
  const navigate: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const error: string = useSelector(selectAppError);
  const appAction: string = useSelector(selectAppAction);
  const isUserVerified: boolean = useSelector(selectIsUserVerified);
  const username: string = useSelector(selectUserName);

  useEffect(() => {
    if (isUserVerified) {
      navigate("/cart");
    }
  }, [navigate, isUserVerified]);
  const onOtpSubmit = (enteredOtp: string): void => {
    dispatch(verifyOtp(enteredOtp));
  };
  return (
    <div className={styles["login__container"]}>
      {error && (
        <section className={styles["login-error__container"]}>
          <WarningAmberIcon sx={{ color: "#b12704" }} />
          <span className={styles["login-error__message"]}>{error}</span>
        </section>
      )}
      {appAction !== "USER_LOGIN_SUCCESS" && !username && (
        <section className={styles["login-form__container"]}>
          <h1 style={{ margin: 0 }}>Log in</h1>
          <LoginForm />
        </section>
      )}
      {username && (
        <section className={styles["login-form__container"]}>
          <OtpValidation onSubmit={onOtpSubmit} />
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
