import { useDispatch, useSelector } from "react-redux";
// icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreateIcon from "@mui/icons-material/Create";
// Common Components
import { Button } from "src/components/common/CommonComponents";
// actions
import { moveSignUpStep } from "src/store/auth/auth-actions";
// selectors
import {
  selectSignUpActiveStepIndex,
  selectSignUpMaxStep,
  selectSignUpSavedStepIndexes,
} from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { SignUpStepsType } from "src/types/authentication-types";
// constants
import { SIGN_UP_STEPS } from "src/constants/authentication-constants";
// styles
import { addNotifications } from "src/store/screen/screen-actions";
import styles from "./SignUpStepper.module.scss";

const SignUpStepper = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const activeStepIndex: number = useSelector(selectSignUpActiveStepIndex);
  const savedStepIndexes: boolean[] = useSelector(selectSignUpSavedStepIndexes);
  const maxStepCount: number = useSelector(selectSignUpMaxStep);
  const stepperProgress: number = ((activeStepIndex + 1) / maxStepCount) * 100;

  // check is there any unsaved required step present earlier
  const checkUnsavedRequiredStep = (latestStepIndex: number) => {
    const unsavedPreviousIndexes: boolean[] = savedStepIndexes.filter(
      (savedStatus: boolean, savedStepIndex: number) =>
        savedStepIndex < latestStepIndex && // check for previous steps
        !savedStatus && // check for saved status
        SIGN_UP_STEPS[savedStepIndex].isRequired // check for required field
    );
    return unsavedPreviousIndexes?.length > 0;
  };
  // callbacks
  const onStepperClick = (index: number) => (): void => {
    if (checkUnsavedRequiredStep(index)) {
      dispatch(
        addNotifications({
          message: "Please complete the mandatory steps",
          type: "warning",
        })
      );
      return;
    }
    dispatch(moveSignUpStep(index));
  };
  const getStepActionClass = (
    index: number,
    isStepRequired: boolean
  ): string => {
    const savedClass: string = savedStepIndexes[index] ? styles["saved"] : "";
    const activeClass: string =
      index === activeStepIndex ? styles["active"] : "";
    const requiredClass: string = isStepRequired ? styles["required"] : "";

    if (!savedClass && !activeClass && !requiredClass) return "";
    return `${savedClass} ${activeClass} ${requiredClass}`;
  };

  return (
    <section className={styles["sign-up-stepper__container"]}>
      <div className={styles["stepper__container"]}>
        <div className={styles['stepper-tabs']}>
        {SIGN_UP_STEPS?.map(
          ({ label, isRequired }: SignUpStepsType, index: number) => {
            const actionClass: string = getStepActionClass(index, isRequired);
            return (
              <Button
                key={index}
                className={`${styles["stepper__label"]} ${actionClass}`}
                onClick={onStepperClick(index)}
              >
                {savedStepIndexes[index] && <CheckCircleIcon />}
                {activeStepIndex === index && <CreateIcon />}
                {label} {isRequired && "*"}
              </Button>
            );
          }
        )}</div>
      </div>
      <div className={styles["stepper__progress-bar"]}>
        <span
          style={{
            width: `${stepperProgress}%`,
          }}
          className={styles["stepper__progress-value"]}
        ></span>
      </div>
    </section>
  );
};
export { SignUpStepper };

