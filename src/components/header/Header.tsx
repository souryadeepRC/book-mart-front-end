// Common Components
import { NavLink } from "src/components/common/CommonComponents";
// components
import { ThemeSwitch } from "./theme-switch/ThemeSwitch";
// styles
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <section className={styles['header__container']}>
      <h1 className={styles["header__text"]}>
        <NavLink to="">Book Mart</NavLink>
      </h1>
      <ThemeSwitch />
    </section>
  );
};
export { Header };

