import { useDispatch, useSelector } from "react-redux";
// icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
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
// styles
import styles from "./SignUpDone.module.scss";

const SignUpDone = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const signUpDetails = useSelector(selectSignUpDetails);
  // callbacks
  const onBack = () => {
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.BACKWARD));
  };
  const onRegister = () => {
    dispatch(signUpUser(signUpDetails));
  };
  const { username, email } = signUpDetails.account;
  return (
    <div className={styles["sign-up-done__container"]}>
      <Button
        className={styles["back-btn"]}
        variant="contained"
        onClick={onBack}
      >
        <SkipPreviousIcon /> Back
      </Button>
      <span className={styles["username"]}>Dear {username}</span>
      <span> All set! Ready to Go!</span>
      <span>
        The below email address will be used for all the communications in
        future. Please check before submit
      </span>
      <span className={styles["email"]}>{email}</span>
      <Button
        className={styles["sign-up"]}
        variant="contained"
        onClick={onRegister}
      >
        <ExitToAppIcon />
        Register
      </Button>
    </div>
  );
};
export { SignUpDone };

