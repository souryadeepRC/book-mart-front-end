// library
import { LinkProps, NavLink as RouterLink } from "react-router-dom";
// styles
import "./NavLink.scss";

const NavLink = (props: LinkProps) => {
  return <RouterLink rel="noopener" className="link__text" {...props} />;
};
export { NavLink };
