// library
import { Button as MuiButton, ButtonProps } from "@mui/material";
// styles
import "./Button.scss";

const Button = (props: ButtonProps): JSX.Element => {
  const { className: propsClass = "", ...restProps } = props;
  const appliedClass:string = `book-mart__button ${propsClass}`;
  return <MuiButton className={appliedClass} {...restProps} />;
};

export { Button };
