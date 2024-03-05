// icons
// actions
// selectors
// types
import { SignUpStepsType } from "src/types/authentication-types";
// constants
import { SIGN_UP_STEPS } from "src/constants/authentication-constants";
// styles
import { StepperTab } from "./StepperTab";
import styles from "./StepperTabs.module.scss";

const StepperTabs = (): JSX.Element => {
  return (
    <ul className={styles["stepper-tabs-list"]}>
      {SIGN_UP_STEPS?.map(
        ({ label, isRequired }: SignUpStepsType, index: number) => {
          return (
            <StepperTab key={index} label={label} isRequired={isRequired} index={index} />
          );
        }
      )}
    </ul>
  );
};
export { StepperTabs };

