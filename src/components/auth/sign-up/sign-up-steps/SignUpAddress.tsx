import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import { setSignUpDetails } from "src/store/auth/auth-actions";
// selectors
import { selectSignUpAddressDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_STATE } from "src/constants/authentication-constants";

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
    const addressDetails = {
      pinCode: pinCodeRef.current.value,
    };
    dispatch(
      setSignUpDetails({
        type: SIGN_UP_STATE.ADDRESS,
        details: addressDetails,
      })
    );
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

