import { NavLink } from "src/components/common/nav-link/NavLink";
// styles
import styles from "./Header.module.scss";
import { Navigation } from "../navigation/Navigation";
const Header = (): JSX.Element => {
  return (
    <header className={styles["header__container"]}>
      <h1 className={styles["header__text"]}>
        <NavLink to="">Book Mart</NavLink>
      </h1> 
      <Navigation />
    </header>
  );
};
export { Header };
