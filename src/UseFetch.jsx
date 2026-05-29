import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                setIsLoading(true);

                const response = await axios.get(url);
                setPosts(response.data);

                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        getPosts();
    }, [url]);

    return { posts, isLoading, error };
};

export default useFetch;