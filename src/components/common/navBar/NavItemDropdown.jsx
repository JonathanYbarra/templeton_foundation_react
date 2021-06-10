import { NavLink } from "react-router-dom";

export const NavItemDropdown = ({ nameItem, pathsDropdown }) => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#" 
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {nameItem}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {
                            pathsDropdown.map(path =>
                                <li key={path.id}>
                                    <NavLink className="dropdown-item" to={path.to}>{path.name}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}
