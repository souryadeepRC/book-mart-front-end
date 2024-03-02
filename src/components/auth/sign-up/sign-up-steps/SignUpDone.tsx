import { useDispatch, useSelector } from "react-redux";
// common components
import { Button } from "src/components/common/CommonComponents";
// actions
import { setSignUpStep, signUpUser } from "src/store/auth/auth-actions";
// selectors
import { selectSignUpDetails } from "src/store/auth/auth-selectors";
//types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";

const SignUpDone = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const signUpDetails= useSelector(selectSignUpDetails);
  // callbacks
  const onBack = () => {
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.BACKWARD));
  };
  const onRegister = () => {
    dispatch(signUpUser(signUpDetails));
  }
  return (
    <div>
      <span>All set! Ready to Go!</span>
      <Button variant="contained" onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" onClick={onRegister}>
        Register
      </Button>
    </div>
  );
};
export { SignUpDone };

