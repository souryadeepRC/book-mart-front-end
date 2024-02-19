// library
import { useSelector } from "react-redux";
// icon library
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// common components
import { NavLink } from "src/components/common/nav-link/NavLink";
// selectors
import {
  selectUserName,
  selectIsUserVerified,
} from "src/store/app-reducer/app-selector";
// styles
import styles from "./Navigation.module.scss";

const Navigation = (): JSX.Element => {
  const isUserVerified: boolean = useSelector(selectIsUserVerified);
  const username: string = useSelector(selectUserName);
  return (
    <nav>
      <ul className={styles["navigation__list"]}>
        <li className={styles["navigation__item"]}>
          <NavLink tabIndex={0} to="/products" aria-label="book mart products">
            Products
          </NavLink>
        </li>
        {isUserVerified && (
          <li className={styles["navigation__item"]}>
            <NavLink tabIndex={0} to="/cart" aria-label="book mart products">
              Cart
            </NavLink>
          </li>
        )}
        <li className={styles["navigation__item"]}>
          {isUserVerified ? (
            <span>{username}</span>
          ) : (
            <NavLink tabIndex={0} to="/auth" aria-label="book mart app login">
              <AccountCircleIcon />
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
export { Navigation };
