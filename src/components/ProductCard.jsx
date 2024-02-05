import "../css/ProductCard.css";

import useFetch from "../hook/api";

export function ProductCard(item) {
    const { data, error } = useFetch("GET", `data/${item.folder}`, item.product);
    return (
        <>
            {error ? (
                <p>Erreur</p>
            ) : (
                <div>
                    <p>
                        {data.title} - {data.price} $
                    </p>
                </div>
            )}
        </>
    );
}
