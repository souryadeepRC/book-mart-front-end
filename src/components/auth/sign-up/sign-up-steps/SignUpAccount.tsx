import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import {
  checkSignUpEmail,
  setSignUpAccountDetails,
  setSignUpStep,
} from "src/store/auth/auth-actions";
// selectors
import {
  selectAuthAction,
  selectSignUpAccountDetails,
} from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";
import { CHECK_SIGN_UP_EMAIL_SUCCESS } from "src/store/auth/auth-constants";

const SignUpAccount = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const authAction: string = useSelector(selectAuthAction);
  const storedAccountDetails = useSelector(selectSignUpAccountDetails);
  // state
  const [accountDetails, setAccountDetails] = useState({
    email: "",
    username: "",
  });
  // refs
  const emailRef = useRef<any>();
  // effects
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // UPDATE stored account details in local state
  useEffect(() => {
    const { email, username } = storedAccountDetails;
    setAccountDetails((accountDetails) => {
      return {
        ...accountDetails,
        ...(email && { email }),
        ...(username && { username }),
      };
    });
  }, [storedAccountDetails]);

  const saveAccountDetailsToStore = useCallback(() => {
    dispatch(setSignUpAccountDetails(accountDetails));
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.FORWARD));
  }, [dispatch, accountDetails]);

  useEffect(() => {
    if (authAction === CHECK_SIGN_UP_EMAIL_SUCCESS) {
      saveAccountDetailsToStore();
    }
  }, [dispatch, saveAccountDetailsToStore, authAction]);
  // callbacks
  const onDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAccountDetails((accountDetails) => {
      return {
        ...accountDetails,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSave = (): void => {
    if (email === storedAccountDetails.email) {
      saveAccountDetailsToStore();
    } else {
      dispatch(checkSignUpEmail({ email }));
    }
  };

  const { email, username } = accountDetails;
  const isStepDisabled: boolean = !(email && username);
  const isActionTaken: boolean = false;
  return (
    <>
      <TextField
        label="Email address"
        name="email"
        value={email}
        onChange={onDetailsChange}
        inputRef={emailRef}
        helperText={isActionTaken && !email && "Enter your email address"}
        error={isActionTaken && !email}
      />
      <TextField
        label="Username"
        name="username"
        value={username}
        onChange={onDetailsChange}
        helperText={isActionTaken && !email && "Enter your email address"}
        error={isActionTaken && !email}
      />
      <SignUpActions isDisabled={isStepDisabled} onSave={onSave} />
    </>
  );
};
export { SignUpAccount };

