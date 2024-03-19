import { memo, useState } from "react";
import { Location, useLocation } from "react-router-dom";
// icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// library
import { Button, Menu, MenuItem } from "@mui/material";
// common components
import { NavLink } from "src/components/common/CommonComponents";
// styles
import "./MenuBar.scss";

type MenuBarProps = {
  label: string;
  basePath: string;
  menuItems: { label: string; path: string }[];
};
const MenuBar = memo(
  ({ label, basePath, menuItems }: MenuBarProps): JSX.Element => {
    const location:Location = useLocation();

    const isMenuActive: boolean = location?.pathname?.indexOf(basePath) !== -1;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className={`menu-bar__container ${isMenuActive && "active"} `}>
        <Button 
          tabIndex={0}
          id="basic-button"
          variant="text"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {label}
          <ArrowDropDownIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {menuItems?.map(
            (item: { label: string; path: string }, index: number) => {
              return (
                <MenuItem key={index} onClick={handleClose}>
                  <NavLink
                    tabIndex={0}
                    to={`${basePath}/${item.path}`}
                    aria-label="book mart engagement"
                  >
                    {item.label}
                  </NavLink>
                </MenuItem>
              );
            }
          )}
        </Menu>
      </div>
    );
  }
);
MenuBar.displayName = "MenuBar";
export { MenuBar };

