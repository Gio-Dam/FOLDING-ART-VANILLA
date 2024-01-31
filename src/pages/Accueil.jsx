import "../css/Accueil.css";

import { Link } from "react-router-dom";

export function Accueil() {
    return (
        <>
            <div className="banner-container">
                <div>
                    <Link to="boutique">BOUTIQUE</Link>
                    <Link to="boutique">ALLEZ-Y POUR VOIR TOUTES LES OEUVRES</Link>
                </div>
            </div>
            <div className="new-product"></div>
            <div className="howto-command"></div>
            <div className="all-collabs"></div>
        </>
    );
}
