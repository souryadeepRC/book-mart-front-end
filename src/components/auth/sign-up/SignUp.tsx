 
import { SignUpForm } from "./SignUpForm";
import { Link } from "react-router-dom";

const SignUp = (): JSX.Element => {
  return (
    <div>
      <h3>SIGN UP</h3>
      <SignUpForm />
      <span>
        Already have an account ? <Link to="/auth/login">Login</Link>
      </span>
    </div>
  );
};

export { SignUp };
