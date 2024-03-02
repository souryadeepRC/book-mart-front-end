import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import {
  setSignUpPersonalDetails,
  setSignUpStep,
} from "src/store/auth/auth-actions";
// selectors
import {
  selectSignUpPersonalDetails
} from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";

const SignUpPersonal = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch(); 
  const storedPersonalDetails = useSelector(selectSignUpPersonalDetails);
  
  // refs
  const firstNameRef = useRef<any>();
  const middleNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  // effects
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  
  // callbacks 
  const onSave = (): void => {
    dispatch(
      setSignUpPersonalDetails({
        name: {
          firstName: firstNameRef.current.value,
          middleName: middleNameRef.current.value,
          lastName: lastNameRef.current.value,
        },
      })
    );
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.FORWARD));
  };

  const { firstName, middleName, lastName } = storedPersonalDetails.name;
  return (
    <>
      <TextField
        label="First Name"
        name="firstName"
        defaultValue={firstName}
        inputRef={firstNameRef}
      />
      <TextField
        label="Middle Name"
        name="middleName"
        defaultValue={middleName}
        inputRef={middleNameRef}
      />
      <TextField
        label="Last Name"
        name="lastName"
        defaultValue={lastName}
        inputRef={lastNameRef}
      />
      <SignUpActions onSave={onSave} />
    </>
  );
};
export { SignUpPersonal };

