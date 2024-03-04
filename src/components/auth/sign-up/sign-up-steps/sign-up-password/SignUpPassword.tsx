import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircle from "@mui/icons-material/CheckCircle";
// components
import { PasswordField } from "src/components/auth/PasswordField";
import { SignUpActions } from "../../sign-up-actions/SignUpActions";
// actions
// selectors
import { selectSignUpPasswordDetails } from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import { setSignUpDetails } from "src/store/auth/auth-actions";
import { validatePassword } from "src/utils/auth-utils";
// constants
import {
  PASSWORD_VALIDATION_CONDITIONS,
  SIGN_UP_STATE,
} from "src/constants/authentication-constants";
// types
import { PasswordValidityType } from "src/types/authentication-types";
// styles
import styles from "./SignUpPassword.module.scss";

const SignUpPassword = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const storedPasswordDetails = useSelector(selectSignUpPasswordDetails);
  // state
  const [passwordValidity, setPasswordValidity] =
    useState<PasswordValidityType>({
      isValid: false,
      conditions: {
        uppercase: false,
        lowerCase: false,
        digit: false,
        specialChar: false,
        length: false,
      },
    });
  const [password, setPassword] = useState<string>("");
  // refs
  const passwordRef = useRef<any>();
  // effects
  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  // UPDATE stored account details in local state
  useEffect(() => {
    const { password: storedPassword } = storedPasswordDetails;
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, [storedPasswordDetails]);

  // callbacks
  const onDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const password: string = event.target.value;
    setPassword(password);
    setPasswordValidity(validatePassword(password));
  };

  const onSave = () => {
    dispatch(
      setSignUpDetails({
        type: SIGN_UP_STATE.PASSWORD,
        details: { password },
      })
    );
    return;
  };
  const isStepDisabled: boolean = !passwordValidity.isValid;
  return (
    <>
      <PasswordField
        label="Password"
        name="password"
        value={password}
        onChange={onDetailsChange}
        inputRef={passwordRef} 
      />
      <ul className={styles["password-checker-list"]}>
        {PASSWORD_VALIDATION_CONDITIONS?.map((condition, index) => {
          const isValid: boolean = passwordValidity.conditions[condition.type];

          return (
            <li
              key={index}
              className={`${styles["password-checker-list-item"]} ${
                isValid ? styles["valid"] : styles["in-valid"]
              }`}
            >
              <span>{condition.label}</span>
              {isValid ? <CheckCircle /> : <CancelIcon />}
            </li>
          );
        })}
      </ul>
      <SignUpActions isDisabled={isStepDisabled} onSave={onSave} />
    </>
  );
};
export { SignUpPassword };

