import "../css/Accueil.css";

import { Carousel } from "../components";

export function Accueil() {
    return (
        <>
            <Carousel />
            <div className="new-product"></div>
            <div className="howto-command"></div>
            <div className="all-collabs"></div>
        </>
    );
}
