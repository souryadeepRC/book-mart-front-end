import { memo } from "react";
// images
import AppLogo from "src/assets/images/logo192.png";
// styles
import styles from "./Loader.module.scss";
// type
type LoaderProps = {
  loading?: boolean;
};
const Loader = memo(({ loading = true }: LoaderProps): JSX.Element => {
  // render fns
  if (!loading) return <></>;

  return (
    <>
      <div className={styles["loader-container"]}>
        <img className={styles["app-logo"]} src={AppLogo} alt="App Logo" />
        <div className={styles["spinner"]}></div>
      </div>
    </>
  );
});
Loader.displayName = "Loader";
export { Loader };

