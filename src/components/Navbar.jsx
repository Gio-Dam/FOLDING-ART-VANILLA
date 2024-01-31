import "../css/Navbar.css";

import { Link, NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navigation">
            <div>
                <Link className="nav-title" to="">
                    FOLDING <span>ART</span>
                </Link>
            </div>
            <div>
                <ul className="nav-link">
                    <li>
                        <NavLink to="">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="boutique">Boutique</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
