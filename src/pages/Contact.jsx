import "../css/Contact.css";

import { Link } from "react-router-dom";

export function Contact() {
    return (
        <>
            <div className="banner-container">
                <div>
                    <Link to="boutique">NOUVELLE COLLECTION</Link>
                    <Link to="boutique">MARVEL</Link>
                </div>
            </div>
            <div className="livraisons"></div>
            <div className="message"></div>
        </>
    );
}
