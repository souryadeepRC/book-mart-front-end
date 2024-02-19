// library
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
// styles
import "./TextField.scss";

const TextField = (props: TextFieldProps): JSX.Element => {
  return <MuiTextField 
  variant="outlined" className="book-mart__text-field" {...props} />;
};

export { TextField };
