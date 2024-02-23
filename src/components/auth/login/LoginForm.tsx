import { useEffect, useRef, useState } from "react";
// library
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField, Button } from "src/components/common/CommonComponents";
// components
import { PasswordField } from "../PasswordField";
// actions
import { loginUser } from "src/store/auth/auth-action";
// selectors
import { selectAuthIsLoading } from "src/store/auth/auth-selector";
// types
import { AppDispatch } from "src/store/reducer-type";
// styles
import styles from "./Login.module.scss";

const LoginForm = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // state
  const isLoading: boolean = useSelector(selectAuthIsLoading);
  const [isActionTaken, setIsActionTaken] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "deep.sourya@mail.com", password: "Test@1234" });
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIsActionTaken(true);
    const { email, password } = userDetails;
    if (!email) {
      emailRef.current.focus();
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      return;
    }
    dispatch(loginUser({ email, password }));
  };
  const onDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        [event.target.name]: event.target.value,
      };
    });
  };
  const { email, password } = userDetails;
  return (
    <form className={styles["login-form"]}>
      <TextField
        label="Email address"
        name="email"
        value={email}
        onChange={onDetailsChange}
        inputRef={emailRef}
        helperText={isActionTaken && !email && "Enter your email address"}
        error={isActionTaken && !email}
      />
      <PasswordField
        label="Password"
        name="password"
        value={password}
        onChange={onDetailsChange}
        inputRef={passwordRef}
        helperText={isActionTaken && !password && "Enter your password"}
        error={isActionTaken && !password}
      />
      <Button variant="contained" onClick={onLogin} disabled={isLoading}>
        {isLoading ? "Almost there..." : "Login"}
      </Button>
    </form>
  );
};

export { LoginForm };
