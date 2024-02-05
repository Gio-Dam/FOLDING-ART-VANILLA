import "../css/ProductPage.css";

import { useParams } from "react-router-dom";

import useFetch from "../hook/api";

export function ProductPage() {
    const { data, error } = useFetch("GET", `data/${useParams().folder}`, useParams().file);

    return (
        <>
            {error ? (
                <p>Erreur lors du chargement de la page</p>
            ) : (
                <div>
                    <p>{data.title}</p>
                    <p>{data.details}</p>
                    {data.images && ( // vérifions si les images ont bien chargées
                        <>
                            <img src={data.images[0]} alt="" style={{ width: 500, height: 500 }} />
                            <img src={data.images[1]} alt="" style={{ width: 500, height: 500 }} />
                        </>
                    )}
                </div>
            )}
        </>
    );
}
