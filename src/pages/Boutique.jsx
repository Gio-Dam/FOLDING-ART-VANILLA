import "../css/Boutique.css";

import { Link, NavLink } from "react-router-dom";

import { ProductCard } from "../components";
import useFetch from "../hook/api";

export function Boutique() {
    const { data, error } = useFetch("GET", "fetch", "product");

    return (
        <>
            <div className="banner-container">
                <div>
                    <Link to="boutique">NOUVELLE COLLECTION</Link>
                    <Link to="boutique">MARVEL</Link>
                </div>
            </div>
            {error ? (
                <p>Erreur lors du chargement du contenu de la boutique</p>
            ) : (
                data?.map((item, index) => (
                    <NavLink to={item} key={index}>
                        <ProductCard product={item} key={index} />
                    </NavLink>
                ))
            )}
        </>
    );
}
