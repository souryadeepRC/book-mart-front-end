// library
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
// icons
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// common components
import { Button } from "src/components/common/CommonComponents";
// components
import { LoginForm } from "./LoginForm";
// styles
import styles from "./Login.module.scss";
const Login = (): JSX.Element => {
  return (
    <div className={styles["login__container"]}>
      <section className={styles["login-error__container"]}>
        <WarningAmberIcon sx={{ color: "#b12704" }} />
        <span className={styles["login-error__message"]}>
          We cannot find an account with that email and password
        </span>
      </section>
      <section className={styles["login-form__container"]}>
        <h1 style={{ margin: 0 }}>Log in</h1>
        <LoginForm />
      </section>
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
