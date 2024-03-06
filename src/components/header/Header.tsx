// components
import { NavLink } from "src/components/common/nav-link/NavLink";
// styles
import styles from "./Header.module.scss";
const Header = (): JSX.Element => {
  return (
    <h1 className={styles["header__text"]}>
      <NavLink to="">Book Mart</NavLink>
    </h1>
  );
};
export { Header };

