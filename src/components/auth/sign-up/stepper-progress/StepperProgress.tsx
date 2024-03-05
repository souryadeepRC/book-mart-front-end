import { useSelector } from "react-redux";
// icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// selectors
import {
    selectSignUpActiveStepIndex,
    selectSignUpMaxStep,
} from "src/store/auth/auth-selectors";
// styles
import styles from "./StepperProgress.module.scss";

const StepperProgress = (): JSX.Element => {
  // store
  const activeStepIndex: number = useSelector(selectSignUpActiveStepIndex);
  const maxStepCount: number = useSelector(selectSignUpMaxStep);
  // calculate
  const stepperProgress: number = (activeStepIndex / maxStepCount) * 100;
  const progressWidth = { width: `${stepperProgress}%` };
  // render fns
  return (
    <section className={styles["stepper-progress__container"]}>
      <section className={styles["progress-status__container"]}>
        <strong className={styles["progress-status__value"]}>
          {stepperProgress}%
        </strong>
        <span>Completed</span>
        <CheckCircleIcon />
      </section>

      <div className={styles["progress-bar"]}>
        <span style={progressWidth} className={styles["progress-value"]}></span>
      </div>
    </section>
  );
};
export { StepperProgress };

