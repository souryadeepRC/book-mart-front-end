import React, { memo, useRef, useEffect, useState } from "react";
// library
import { Input } from "@mui/material";
// common components
import { Button } from "src/components/common/CommonComponents";
// utils
import { isNumeric } from "src/utils/string-utils";
// styles
import "./OtpValidation.scss";

type OtpValidationProps = {
  length?: number;
  label?: string;
  onSubmit: (enteredOtp: string) => void;
  onOtpResend?: () => void;
};
const OtpValidation = memo(
  ({
    length = 4,
    label = "Verify OTP",
    onSubmit,
    onOtpResend,
  }: OtpValidationProps): JSX.Element => {
    const otpRefs = useRef<any>([]);
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

    useEffect(() => {
      if (otpRefs.current[0]) {
        otpRefs.current[0].focus();
      }
    }, []);
    // action fns
    const handleVerify = (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      if (otp.length !== length) return;
      onSubmit(otp.join(""));
    };
    const handleResend = (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      onOtpResend && onOtpResend();
    };
    const handleChange =
      (activeIndex: number) =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        const enteredValue: string = event.target.value;
        if (!isNumeric(enteredValue)) return;
        // update OTP
        setOtp((otp) => {
          const newOtp = [...otp];
          newOtp[activeIndex] = enteredValue.substring(enteredValue.length - 1);
          return newOtp;
        });
        // Move focus to next empty box
        if (!enteredValue) return;
        const nextIndex: number = otp.findIndex(
          (value, index) => value === "" && index !== activeIndex
        );
        if (nextIndex < length && otpRefs.current[nextIndex]) {
          otpRefs.current[nextIndex].focus();
        }
      };
    const handleKeydown =
      (activeIndex: number) => (event: React.KeyboardEvent) => {
        if (!(event.code === "Backspace" && !otp[activeIndex])) return;
        const prevIndex: number = activeIndex - 1;
        // Move focus to previous empty box
        if (prevIndex >= 0 && otpRefs.current[prevIndex]) {
          otpRefs.current[prevIndex].focus();
          event.preventDefault();
        }
      };
    const handleClick = (index: number) => (): void => {
      otpRefs.current[index].setSelectionRange(1, 1);
    };
    return (
      <section className="otp__container">
        <h4 style={{ margin: 0 }}>
          Dear User, please verify the OTP received on your registered email
          address
        </h4>
        <form className="otp__form">
          <section className="otp__input-container">
            {otp?.map((value: string, index: number) => {
              return (
                <Input
                  disableUnderline={true}
                  key={index}
                  type="text"
                  value={value}
                  inputRef={(element: HTMLInputElement) =>
                    (otpRefs.current[index] = element)
                  }
                  onKeyDown={handleKeydown(index)}
                  onChange={handleChange(index)}
                  onClick={handleClick(index)}
                />
              );
            })}
          </section>
          <Button variant="contained" onClick={handleVerify}>
            Verify
          </Button>
          {onOtpResend && (
            <Button variant="contained" onClick={handleResend}>
              Resend
            </Button>
          )}
        </form>
      </section>
    );
  }
);
OtpValidation.displayName = "OtpValidation";
export { OtpValidation };
