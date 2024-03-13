import { useState } from "react";
import { useDispatch } from "react-redux";
// library
import { Switch } from "@mui/material";
// actions
import { toggleAppTheme } from "src/store/screen/screen-actions";
// types
import { AppDispatch } from "src/store/reducer-types";
// styles
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = (): JSX.Element => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // state
  const [checked, setChecked] = useState<boolean>(false);
  // callbacks
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    dispatch(toggleAppTheme());
  };
  return (
    <Switch
      className={styles["theme-switch"]}
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
export { ThemeSwitch };

