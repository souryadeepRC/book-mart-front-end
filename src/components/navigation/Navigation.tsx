// library
import { useSelector } from "react-redux";
// icon library
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// common components
import { NavLink } from "src/components/common/nav-link/NavLink";
// selectors
import { selectIsUserAuthenticated } from "src/store/auth/auth-selector";
import { selectUserName } from "src/store/user/user-selector";
// styles
import styles from "./Navigation.module.scss";

const Navigation = (): JSX.Element => {
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);
  const username: string = useSelector(selectUserName);
  return (
    <nav>
      <ul className={styles["navigation__list"]}>
        <li className={styles["navigation__item"]}>
          <NavLink tabIndex={0} to="/products" aria-label="book mart products">
            Products
          </NavLink>
        </li>
        {isUserAuthenticated && (
          <li className={styles["navigation__item"]}>
            <NavLink tabIndex={0} to="/cart" aria-label="book mart products">
              Cart
            </NavLink>
          </li>
        )}
        <li className={styles["navigation__item"]}>
          {isUserAuthenticated ? (
            <>
              <span>{username}</span>
              <NavLink
                tabIndex={0}
                to="/auth/logout"
                aria-label="book mart app logout"
              >
                <AccountCircleIcon />
                Logout
              </NavLink>
            </>
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
