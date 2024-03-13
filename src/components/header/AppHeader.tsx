// Common Components
import { NavLink } from "src/components/common/CommonComponents";
// components
import { ThemeSwitch } from "src/components/header/theme-switch/ThemeSwitch";
import { Navigation } from "src/components/navigation/Navigation";
// styles
import styles from "./AppHeader.module.scss";

const AppHeader = (): JSX.Element => {
  return (
    <header className={styles["app-header"]}>
      <section className={styles["header__content"]}>
        <h1 className={styles["header__text"]}>
          <NavLink to="">Book Mart</NavLink>
        </h1>
        <ThemeSwitch />
      </section>
      <Navigation />
    </header>
  );
};
export { AppHeader };

