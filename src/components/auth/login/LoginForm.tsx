import { useEffect, useRef, useState } from "react";
// common components
import { TextField, Button } from "src/components/common/CommonComponents";

// styles
import styles from "./Login.module.scss";
import { PasswordField } from "../PasswordField";

const LoginForm = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActionTaken, setIsActionTaken] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    console.log(emailRef?.current.value);
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

    const dbUrl: string = `${process.env.REACT_APP_DATABASE_URL}/login` || "";
    setIsLoading(true);
    fetch(dbUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
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
      <Button variant="contained" onClick={onLogin}>
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};

export { LoginForm };
