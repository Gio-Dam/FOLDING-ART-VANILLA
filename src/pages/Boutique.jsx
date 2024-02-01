import "../css/Boutique.css";

import { NavLink } from "react-router-dom";

import { Carousel } from "../components";
import { ProductCard } from "../components";
import useFetch from "../hook/api";

export function Boutique() {
    const { data, error } = useFetch("GET", "fetch", "product");

    return (
        <>
            <Carousel />
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
