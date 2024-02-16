import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

const Login = (): JSX.Element => {
  return (
    <div>
      <h3>LOG IN</h3>
      <LoginForm />
      <span>
        New Customer ? <Link to="/auth/register">Register</Link>
      </span>
    </div>
  );
};

export { Login };
