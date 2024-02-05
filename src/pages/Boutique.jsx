import "../css/Boutique.css";

import { NavLink } from "react-router-dom";

import { Carousel, ProductCard } from "../components";
import useFetch from "../hook/api";

export function Boutique() {
    const { data, error } = useFetch("GET", "fetch", "all");

    return (
        <>
            <Carousel />
            {error ? (
                <p>Erreur lors du chargement du contenu de la boutique</p>
            ) : (
                data?.map((item, index) => (
                    <NavLink to={`${item.folder}/${item.file}`} key={index}>
                        <ProductCard product={item.file} folder={item.folder} key={index} />
                    </NavLink>
                ))
            )}
        </>
    );
}
