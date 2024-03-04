import { PasswordValidityType } from "src/types/authentication-types";
import { removeAllItemFromLS } from "./storage-utils";

export const removeUserInfo = (): void => {
  removeAllItemFromLS();
  window.location.href = "/";
};
export const validatePassword = (password: string): PasswordValidityType => {
  let conditions = {
    uppercase: true,
    lowercase: true,
    digit: true,
    specialChar: true,
    length: true,
  };
  let isValid: boolean = true;
  // Check if the password has at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    conditions.uppercase = false;
    isValid = false;
  }

  // Check if the password has at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    conditions.lowercase = false;
    isValid = false;
  }

  // Check if the password has at least one digit
  if (!/\d/.test(password)) {
    conditions.digit = false;
    isValid = false;
  }

  // Check if the password has at least one special character
  if (!/[@$!%#*?&]/.test(password)) {
    conditions.specialChar = false;
    isValid = false;
  }

  // Check if the password length is between 8 and 16 characters
  if (password.length < 8 || password.length > 16) {
    conditions.length = false;
    isValid = false;
  }

  // If all conditions pass, return true
  return {
    isValid,
    conditions,
  };
};

// Example usage
console.log(validatePassword("ValidPassword123!")); // Output: true
console.log(validatePassword("weak")); // Output: false
