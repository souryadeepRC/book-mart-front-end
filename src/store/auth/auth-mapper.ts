// types
import {
  SignUpDetailsPayloadType,
  SignUpType,
} from "src/types/authentication-types";
// constants
import {
  SIGN_UP_ACTION_TYPES,
  SIGN_UP_STATE,
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
  let savedStepIndexes = [...signUp.savedStepIndexes];
  const modifiedSavedIndex = savedStepIndexes.splice(activeIndex, 1, true);
  return {
    ...signUp,
    details: {
      ...existingDetails,
      ...modifiedDetails,
    },
    activeStepIndex: activeIndex + 1,
    savedStepIndexes: modifiedSavedIndex,
  };
};

export const mapSignUpStepInfo = (
  signUp: SignUpType,
  payload: string
): SignUpType => {
  let activeIndex = signUp.activeStepIndex;
  let savedStepIndexes = [...signUp.savedStepIndexes];

  if (payload === SIGN_UP_ACTION_TYPES.FORWARD) {
    savedStepIndexes.splice(activeIndex, 1, true);
    activeIndex = activeIndex + 1;
  } else {
    activeIndex = activeIndex - 1;
  }
  return {
    ...signUp,
    activeStepIndex: activeIndex,
    savedStepIndexes,
  };
};
