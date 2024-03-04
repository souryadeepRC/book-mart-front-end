import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import { setSignUpDetails } from "src/store/auth/auth-actions";
// selectors
import { selectSignUpContactDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_STATE } from "src/constants/authentication-constants";

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
    const contactDetails = {
      primary: {
        code: contactCodeRef.current.value,
        value: contactValueRef.current.value,
      },
    };
    dispatch(
      setSignUpDetails({
        type: SIGN_UP_STATE.CONTACT,
        details: contactDetails,
      })
    );
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

