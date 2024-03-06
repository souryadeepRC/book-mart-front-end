// library
import { useSelector } from "react-redux";
// icon library
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// common components
import { NavLink } from "src/components/common/CommonComponents";
// selectors
import { selectIsUserAuthenticated } from "src/store/auth/auth-selectors";
import { selectUserName } from "src/store/user/user-selectors";
// styles
import styles from "./Navigation.module.scss";

const Navigation = (): JSX.Element => {
  // store
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);
  const username: string = useSelector(selectUserName);

  return (
    <nav className={styles["navigation__list"]}>
      <ul>
        <li>
          <NavLink tabIndex={0} to="/books" aria-label="book mart books">
            Books
          </NavLink>
        </li>

        {isUserAuthenticated ? (
          <>
            <li>
              <NavLink tabIndex={0} to="cart" aria-label="book mart cart">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                tabIndex={0}
                to="account"
                aria-label="book mart app logout"
              >
                <AccountCircleIcon />
                <span>{username}</span>
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              tabIndex={0}
              to="/auth/login"
              aria-label="book mart app login"
            >
              <AccountCircleIcon />
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export { Navigation };

