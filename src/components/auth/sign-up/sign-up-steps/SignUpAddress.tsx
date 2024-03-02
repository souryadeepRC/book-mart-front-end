import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import {
  setSignUpAddressDetails,
  setSignUpStep,
} from "src/store/auth/auth-actions";
// selectors
import { selectSignUpAddressDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { TextField } from "src/components/common/CommonComponents";

const SignUpAddress = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const storedAddressDetails = useSelector(selectSignUpAddressDetails);

  // refs
  const pinCodeRef = useRef<any>();
  // effects
  useEffect(() => {
    pinCodeRef.current.focus();
  }, []);

  // callbacks
  const onSave = (): void => {
    dispatch(
      setSignUpAddressDetails({
        pinCode: pinCodeRef.current.value,
      })
    );
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.FORWARD));
  };

  const { pinCode } = storedAddressDetails;
  return (
    <>
      <TextField
        label="Pin Code"
        name="pinCode"
        defaultValue={pinCode}
        inputRef={pinCodeRef}
      />

      <SignUpActions onSave={onSave} />
    </>
  );
};
export { SignUpAddress };

