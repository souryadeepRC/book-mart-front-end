import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import {
  checkSignUpEmail,
  setAuthError,
  setSignUpDetails,
} from "src/store/auth/auth-actions";
// selectors
import {
  selectAuthAction,
  selectAuthError,
  selectSignUpAccountDetails,
} from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import {
  EMAIL_REGEX,
  SIGN_UP_STATE,
} from "src/constants/authentication-constants";
import { CHECK_SIGN_UP_EMAIL_SUCCESS } from "src/store/auth/auth-constants";

const SignUpAccount = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const authAction: string = useSelector(selectAuthAction);
  const authError: string = useSelector(selectAuthError);
  const storedAccountDetails = useSelector(selectSignUpAccountDetails);
  // state
  const [isActionTaken, setIsActionTaken] = useState<boolean>(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
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
    dispatch(
      setSignUpDetails({
        type: SIGN_UP_STATE.ACCOUNT,
        details: accountDetails,
      })
    );
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
    !isActionTaken && setIsActionTaken(true);
    if (!EMAIL_REGEX.test(email)) {
      dispatch(setAuthError("Invalid Email address"));
      setIsInvalidEmail(true);
      return;
    }
    setIsInvalidEmail(false);

    if (email === storedAccountDetails.email) {
      saveAccountDetailsToStore();
    } else {
      dispatch(checkSignUpEmail({ email }));
    }
  };

  const { email, username } = accountDetails;
  const isStepDisabled: boolean = !(email && username);
  const isEmailError: boolean =
    (isActionTaken && !email) || authError !== "" || isInvalidEmail;
  const emailErrorText: string = isInvalidEmail
    ? "Enter valid email address (e.g. abc@mail.com)"
    : authError ?? "Enter your email address";
  return (
    <>
      <TextField
        label="Email address"
        name="email"
        value={email}
        onChange={onDetailsChange}
        inputRef={emailRef}
        helperText={isEmailError && emailErrorText}
        error={isEmailError}
      />
      <TextField
        label="Username"
        name="username"
        value={username}
        onChange={onDetailsChange}
        helperText={isActionTaken && !username && "Enter your username"}
        error={isActionTaken && !username}
      />
      <SignUpActions isDisabled={isStepDisabled} onSave={onSave} />
    </>
  );
};
export { SignUpAccount };

