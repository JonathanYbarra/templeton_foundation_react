import { NavItem } from "./NavItem";
import { navbarItems } from "../../../core/services/navbarItems";
import uuid from 'react-uuid';
import { Link } from "react-router-dom";
import logoCompany from "../../../assets/logos/logo-templeton.svg";
import '.././../../styles/_components/navbar.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/project">
                    <img
                        src={logoCompany}
                        alt="Templeton logo"
                        className="img-fluid img-logo"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        {
                            navbarItems.map(item =>
                                <NavItem
                                    key={uuid()}
                                    nameItem={item.name}
                                    pathToLink={item.pathToLink}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
