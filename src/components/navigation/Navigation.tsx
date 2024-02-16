// icon library
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// common components
import { NavLink } from "src/components/common/nav-link/NavLink";
// styles
import styles from "./Navigation.module.scss";
const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul className={styles["navigation__list"]}>
        <li className={styles["navigation__item"]}>
          <NavLink tabIndex={0} to="/products" aria-label="book mart products">
            Products
          </NavLink>
        </li>
        <li className={styles["navigation__item"]}>
          <NavLink
            tabIndex={0}
            to="/auth"
            aria-label="book mart app login"
          >
            <AccountCircleIcon />
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export { Navigation };
