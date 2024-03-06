import { useDispatch, useSelector } from "react-redux";
// icons
import BeenhereIcon from "@mui/icons-material/Beenhere";
import FastForwardIcon from "@mui/icons-material/FastForward";
// actions
import { moveSignUpStep } from "src/store/auth/auth-actions";
import { addNotifications } from "src/store/screen/screen-actions";
// selectors
import {
  selectSignUpActiveStepIndex,
  selectSignUpStepStatus,
} from "src/store/auth/auth-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
// constants
import {
  SIGN_UP_STATE_STATUS,
  SIGN_UP_STEPS,
} from "src/constants/authentication-constants";
// styles
import styles from "./StepperTabs.module.scss";

type StepperTabProps = {
  label: String;
  isRequired: boolean;
  index: number;
};
const StepperTab = ({
  label,
  isRequired,
  index,
}: StepperTabProps): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const activeStepIndex: number = useSelector(selectSignUpActiveStepIndex);
  const stepStatus: string[] = useSelector(selectSignUpStepStatus);

  // check is there any unsaved required step present earlier
  const checkUnsavedRequiredStep = (latestStepIndex: number) => {
    const unsavedPreviousIndexes: string[] = stepStatus.filter(
      (stepStatus: string, savedStepIndex: number) =>
        savedStepIndex < latestStepIndex && // check for previous steps
        stepStatus !== SIGN_UP_STATE_STATUS.SAVED && // check for saved status
        SIGN_UP_STEPS[savedStepIndex].isRequired // check for required field
    );
    return unsavedPreviousIndexes?.length > 0;
  };
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
  const TabStatus = ({ status }: { status: String }): JSX.Element => {
    return (
      <section className={styles["item__message"]}>
        {isRequired && <span className={styles["required"]}>Required*</span>}
        {status && (
          <section className={`${styles["status"]} ${styles[`${status}`]}`}>
            <span>{status}</span>
            {status === SIGN_UP_STATE_STATUS.SAVED && <BeenhereIcon />}
            {status === SIGN_UP_STATE_STATUS.SKIPPED && <FastForwardIcon />}
          </section>
        )}
      </section>
    );
  };

  const status: string = stepStatus[index];
  const stepStatusClass: string = index < activeStepIndex ? styles[status] : "";
  return (
    <li key={index} className={`${styles["tab__item"]} ${stepStatusClass}`}>
      <section className={`${styles["tab__item__container"]} `}>
        <span
          className={`${styles["item__position"]} ${stepStatusClass}`}
          onClick={onStepperClick(index)}
        >
          {index + 1}
        </span>
        <section className={styles["item-info"]}>
          <span className={styles["item__label"]}>{label}</span>
          <TabStatus status={status} />
        </section>
      </section>
    </li>
  );
};
export { StepperTab };

