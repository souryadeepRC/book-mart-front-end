import { SignUpStepsType } from "src/types/authentication-types";

export const LOGIN_STATE: Record<string, string> = {
  ACCOUNT: "ACCOUNT",
  OTP: "OTP",
  DONE: "DONE",
};
export const SIGN_UP_STATE: Record<string, string> = {
  ACCOUNT: "ACCOUNT",
  PASSWORD: "PASSWORD",
  PERSONAL: "PERSONAL_DETAILS",
  ADDRESS: "ADDRESS",
  CONTACT: "CONTACT",
  DONE: "DONE",
};
export const SIGN_UP_STEP: Record<string, number> = {
  ACCOUNT: 0,
  PASSWORD: 1,
  PERSONAL: 2,
  ADDRESS: 3,
  CONTACT: 4,
  DONE: 5,
};
export const SIGN_UP_ACTION_TYPES: Record<string, string> = {
  FORWARD: "FORWARD",
  BACKWARD: "BACKWARD",
};
export const SIGN_UP_STEPS: SignUpStepsType[] = [
  {
    step: SIGN_UP_STATE.ACCOUNT,
    label: "Email & username",
    isRequired: true,
  },
  {
    step: SIGN_UP_STATE.PASSWORD,
    label: "Password",
    isRequired: true,
  },
  {
    step: SIGN_UP_STATE.PERSONAL,
    label: "Personal information",
    isRequired: false,
  },
  {
    step: SIGN_UP_STATE.ADDRESS,
    label: "Address",
    isRequired: false,
  },
  {
    step: SIGN_UP_STATE.CONTACT,
    label: "Contact",
    isRequired: false,
  },
];
export const SIGN_UP_STATE_STATUS: Record<string, string> = {
  SAVED: "saved",
  SKIPPED: "skipped",
};
export const EMAIL_REGEX: RegExp = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_VALIDATION_CONDITIONS = [
  {
    type: "uppercase",
    label: "At least one uppercase letter.",
  },
  {
    type: "lowercase",
    label: "At least one lowercase letter.",
  },
  {
    type: "digit",
    label: "At least one digit letter.",
  },
  {
    type: "specialChar",
    label: "At least one special character.",
  },
  {
    type: "length",
    label: "Length between 8 and 16 characters.",
  },
];
