import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// common components
import { TextField } from "src/components/common/CommonComponents";
// components
import { SignUpActions } from "../sign-up-actions/SignUpActions";
// actions
import { setSignUpDetails } from "src/store/auth/auth-actions";
// selectors
import { selectSignUpPersonalDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { SIGN_UP_STATE } from "src/constants/authentication-constants";
// styles
import formStyles from "./SignUpSteps.module.scss";

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
    const personalDetails = {
      name: {
        firstName: firstNameRef.current.value,
        middleName: middleNameRef.current.value,
        lastName: lastNameRef.current.value,
      },
    };
    dispatch(
      setSignUpDetails({
        type: SIGN_UP_STATE.PERSONAL,
        details: personalDetails,
      })
    );
  };

  const { firstName, middleName, lastName } = storedPersonalDetails.name;
  return (
    <section className={formStyles["sign-up-form"]}>
      <label className={formStyles["form__label"]}>
        <AccountCircleIcon /> Personal Details
      </label>
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
    </section>
  );
};
export { SignUpPersonal };

