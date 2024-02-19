import { memo, useState } from "react";
// library
import { TextFieldProps } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
// icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
// common components
import { TextField } from "src/components/common/CommonComponents";

const PasswordField = memo((props: TextFieldProps): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <TextField
      {...props}
      type={isPasswordVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={() =>
              setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
            }
          >
            {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </InputAdornment>
        ),
      }}
      helperText={
        <>
          {props?.helperText && (
            <>
              {props?.helperText}
              <br />
            </>
          )} 
          {isPasswordVisible &&
            "Be cautious! Someone is watching your password."}
        </>
      }
    />
  );
});
PasswordField.displayName = "PasswordField";
export { PasswordField };
