import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { PasswordField } from "src/components/auth/PasswordField";
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import { setSignUpPasswordDetails, setSignUpStep } from "src/store/auth/auth-actions";
// selectors
import { selectSignUpPasswordDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";

const SignUpPassword = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const storedPasswordDetails = useSelector(selectSignUpPasswordDetails);
  // state
  const [passwordDetails, setPasswordDetails] = useState({
    password: "",
  });
  // refs
  const passwordRef = useRef<any>();
  // effects
  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  // UPDATE stored account details in local state
  useEffect(() => {
    const { password } = storedPasswordDetails;
    setPasswordDetails((passwordDetails) => {
      return {
        ...passwordDetails,
        ...(password && { password }),
      };
    });
  }, [storedPasswordDetails]);

  // callbacks
  const onDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordDetails((passwordDetails) => {
      return {
        ...passwordDetails,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSave = () => {
    dispatch(setSignUpPasswordDetails(passwordDetails));
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.FORWARD));
  };
  const { password } = passwordDetails;
  const isStepDisabled: boolean = !password;
  return (
    <>
      <PasswordField
        label="Password"
        name="password"
        value={password}
        onChange={onDetailsChange}
        inputRef={passwordRef}
        /*  helperText={isActionTaken && !password && "Enter your password"}
        error={isActionTaken && !password} */
      />

      <SignUpActions isDisabled={isStepDisabled} onSave={onSave} />
    </>
  );
};
export { SignUpPassword };

