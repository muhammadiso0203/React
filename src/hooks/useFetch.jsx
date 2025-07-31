import { useEffect, useState } from "react"
import { api } from "../api";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        api
            .get(endpoint)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, []);
    return {data, loading, error}
};
export default useFetch;