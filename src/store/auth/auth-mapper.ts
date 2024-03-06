// types
import {
  SignUpDetailsPayloadType,
  SignUpType,
} from "src/types/authentication-types";
// constants
import {
  SIGN_UP_ACTION_TYPES,
  SIGN_UP_STATE,
  SIGN_UP_STATE_STATUS,
} from "src/constants/authentication-constants";

export const mapSignUpDetails = (
  signUp: SignUpType,
  { type, details }: SignUpDetailsPayloadType
): SignUpType => {
  const existingDetails = signUp.details;
  let modifiedDetails = {};
  if (type === SIGN_UP_STATE.ACCOUNT) {
    modifiedDetails = { account: details };
  } else if (type === SIGN_UP_STATE.PASSWORD) {
    modifiedDetails = { password: details };
  } else if (type === SIGN_UP_STATE.PERSONAL) {
    modifiedDetails = { personal: details };
  } else if (type === SIGN_UP_STATE.ADDRESS) {
    modifiedDetails = { address: details };
  } else if (type === SIGN_UP_STATE.CONTACT) {
    modifiedDetails = { contact: details };
  }
  const activeIndex = signUp.activeStepIndex;
  let stepStatus = [...signUp.stepStatus];
  stepStatus.splice(activeIndex, 1, SIGN_UP_STATE_STATUS.SAVED);
  return {
    ...signUp,
    details: {
      ...existingDetails,
      ...modifiedDetails,
    },
    activeStepIndex: activeIndex + 1,
    stepStatus,
  };
};

export const mapSignUpStepInfo = (
  signUp: SignUpType,
  payload: string
): SignUpType => {
  let activeIndex = signUp.activeStepIndex;
  let stepStatus = [...signUp.stepStatus];

  if (payload === SIGN_UP_ACTION_TYPES.FORWARD) {
    if (stepStatus[activeIndex] !== SIGN_UP_STATE_STATUS.SAVED) {
      stepStatus.splice(activeIndex, 1, SIGN_UP_STATE_STATUS.SKIPPED);
    }
    activeIndex = activeIndex + 1;
  } else {
    activeIndex = activeIndex - 1;
  }
  return {
    ...signUp,
    activeStepIndex: activeIndex,
    stepStatus,
  };
};

export const mapMovedSignUpStep = (
  signUp: SignUpType,
  payload: number
): SignUpType => {
  const activeStepIndex = payload;
  let stepStatus = [...signUp.stepStatus];
  stepStatus.forEach((status: string, index: number) => {
    if (index < activeStepIndex && !status) {
      stepStatus.splice(index, 1, SIGN_UP_STATE_STATUS.SKIPPED);
    }
  });
  return {
    ...signUp,
    activeStepIndex,
    stepStatus,
  };
};
