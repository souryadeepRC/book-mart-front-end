export type SignUpStepsType = {
  step: string;
  label: string;
  isRequired: boolean;
};

export type SignUpDetailsAccountType = { email: string; username: string };

export type SignUpDetailsPasswordType = { password: string };

export type SignUpDetailsPersonalType = {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
};

export type SignUpDetailsAddressType = {
  pinCode: string;
};
export type SignUpDetailsContactType = {
  primary: {
    code: string;
    value: string;
  };
  secondary?: {
    code: string;
    value: string;
  };
};
export type SignUpDetailsType = {
  account: SignUpDetailsAccountType;
  password: SignUpDetailsPasswordType;
  personal: SignUpDetailsPersonalType;
  address: SignUpDetailsAddressType;
  contact: SignUpDetailsContactType;
};
export type SignUpType = {
  details: SignUpDetailsType;
  activeStepIndex: number;
  savedStepIndexes: boolean[];
  maxStep: number;
};
