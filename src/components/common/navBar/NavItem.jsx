import { NavLink } from "react-router-dom";

export const NavItem = ({ nameItem, pathToLink }) => {
    return (
        <li className="nav-item">
            <NavLink
                activeClassName="active"
                className="nav-link"
                to={pathToLink}
            >
                {nameItem}
            </NavLink>
        </li >
    )
}
