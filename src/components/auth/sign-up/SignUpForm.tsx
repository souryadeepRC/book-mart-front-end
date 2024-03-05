import { useSelector } from "react-redux";
// components
import {
  SignUpAccount,
  SignUpAddress,
  SignUpContact,
  SignUpDone,
  SignUpPassword,
  SignUpPersonal,
} from "./sign-up-steps/SignUpSteps";
// selectors
import { selectSignUpActiveStepIndex } from "src/store/auth/auth-selectors";
// constants
import { SIGN_UP_STEP } from "src/constants/authentication-constants";
// styles
import styles from "./SignUp.module.scss";
import { StepperProgress } from "./stepper-progress/StepperProgress";
import { StepperTabs } from "./stepper-tabs/StepperTabs";
const SignUpForm = (): JSX.Element => {
  // store
  const activeStepIndex: number = useSelector(selectSignUpActiveStepIndex);

  // render fns
  const renderSignUpForm = (signUpStep: number) => {
    switch (signUpStep) {
      case SIGN_UP_STEP.ACCOUNT:
        return <SignUpAccount />;
      case SIGN_UP_STEP.PASSWORD:
        return <SignUpPassword />;
      case SIGN_UP_STEP.PERSONAL:
        return <SignUpPersonal />;
      case SIGN_UP_STEP.ADDRESS:
        return <SignUpAddress />;
      case SIGN_UP_STEP.CONTACT:
        return <SignUpContact />;
      case SIGN_UP_STEP.DONE:
        return <SignUpDone />;
    }
  };
  return (
    <div className={styles["sign-up-form__container"]}>
      <StepperProgress />
      <section className={styles["sign-up-step__container"]}>
        <StepperTabs />
        {renderSignUpForm(activeStepIndex)}
      </section>
    </div>
  );
};

export { SignUpForm };

