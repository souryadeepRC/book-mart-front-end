// library
import { LinkProps, NavLink as RouterNavLink } from "react-router-dom";
// styles
import "./NavLink.scss";

const NavLink = (props: LinkProps) => {
  return <RouterNavLink rel="noopener" className="link__text" {...props} />;
};
export { NavLink };

