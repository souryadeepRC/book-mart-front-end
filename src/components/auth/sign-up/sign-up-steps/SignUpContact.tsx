import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import {
  setSignUpContactDetails,
  setSignUpStep,
} from "src/store/auth/auth-actions";
// selectors
import { selectSignUpContactDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";

const SignUpContact = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const storedContactDetails = useSelector(selectSignUpContactDetails);

  // refs
  const contactCodeRef = useRef<any>();
  const contactValueRef = useRef<any>();
  // effects
  useEffect(() => {
    contactCodeRef.current.focus();
  }, []);

  // callbacks
  const onSave = (): void => {
    dispatch(
      setSignUpContactDetails({
        primary: {
          code: contactCodeRef.current.value,
          value: contactValueRef.current.value,
        },
      })
    );
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.FORWARD));
  };

  const { code, value } = storedContactDetails.primary;
  return (
    <>
      <label>Primary Contact Number</label>
      <TextField
        label="Code"
        name="pinCode"
        defaultValue={code}
        inputRef={contactCodeRef}
      />
      <TextField
        label="Contact Number"
        name="pinCode"
        defaultValue={value}
        inputRef={contactValueRef}
      />

      <SignUpActions onSave={onSave} />
    </>
  );
};
export { SignUpContact };

