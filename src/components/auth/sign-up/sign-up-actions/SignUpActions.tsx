import { Button } from "src/components/common/CommonComponents";
// icons
import SaveIcon from "@mui/icons-material/Save";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// styles
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_ACTION_TYPES } from "src/constants/authentication-constants";
import { setSignUpStep } from "src/store/auth/auth-actions";
import {
  selectSignUpActiveStepIndex,
  selectSignUpMaxStep,
} from "src/store/auth/auth-selectors";
import { AppDispatch } from "src/store/reducer-types";
import styles from "./SignUpActions.module.scss";

type SignUpActionsProps = {
  isDisabled?: boolean;
  isSkipDisabled?: boolean;
  onSave: () => void;
};
const SignUpActions = ({
  isDisabled = false,
  isSkipDisabled = false,
  onSave,
}: SignUpActionsProps): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const activeStepIndex: number = useSelector(selectSignUpActiveStepIndex);
  const maxStepCount: number = useSelector(selectSignUpMaxStep);
  const maxStepIndex: number = maxStepCount - 1;

  // callbacks
  const onBack = () => {
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.BACKWARD));
  };
  const onSkip = () => {
    dispatch(setSignUpStep(SIGN_UP_ACTION_TYPES.FORWARD));
  };

  return (
    <section className={styles["sign-up-actions__container"]}>
      <div>
        {activeStepIndex !== 0 && (
          <Button variant="contained" onClick={onBack}>
            <SkipPreviousIcon /> Back
          </Button>
        )}
      </div>
      <div className={styles["action-next__container"]}>
        <Button variant="contained" disabled={isDisabled || isSkipDisabled} onClick={onSkip}>
          {activeStepIndex === maxStepIndex ? "Skip & Finish" : "Skip"}{" "}
          <SkipNextIcon />
        </Button>
        <Button variant="contained" disabled={isDisabled} onClick={onSave}>
          {activeStepIndex === maxStepIndex ? "Save & Finish" : "Save & Next"}
          <SaveIcon />
        </Button>
      </div>
    </section>
  );
};
export { SignUpActions };

