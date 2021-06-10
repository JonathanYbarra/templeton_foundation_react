import { NavLink } from "react-router-dom";
import { NavItemDropdown } from "./NavItemDropdown";

export const NavItem = ({ nameItem, pathToLink, item }) => {
    return (
        !item.items ?
            <li className="nav-item">
                <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to={pathToLink}
                >
                    {nameItem}
                </NavLink>
            </li >
            :
            <NavItemDropdown
                nameItem={nameItem}
                pathsDropdown={item.items}
            />
    )
}
