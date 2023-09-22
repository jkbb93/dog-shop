import { useState, useCallback } from "react";
import sendFetchRequest from "../utils/fetch-request";

function useFetch() {
    const [inProgress, setInProgress] = useState(false);
    const [error, setError] = useState(null);

    const send = useCallback(async (url, options) => {
        setError(null);
        setInProgress(true);
        const fetchData = await sendFetchRequest(url, options);
        setInProgress(false);

        if (!fetchData.ok) {
            setError(fetchData);
            return null;
        }

        return fetchData;
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return { send, inProgress, error, clearError };
}

export default useFetch;