import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(method, endpoint, arg) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: method,
        url: `https://d27phpsk-3000.euw.devtunnels.ms/${endpoint}/${arg}`,
    };

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setData(response.data);
        } catch (error) {
            setError(error);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    };

    return { data, error, refetch };
}
