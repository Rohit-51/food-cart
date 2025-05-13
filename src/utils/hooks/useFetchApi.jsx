import { useEffect, useState} from "react";

const useFetchApi = ({apiUrl}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFun = async() => {
            try {
                const response = await fetch(apiUrl);
                console.log("responseSuccess", response)
                if(response?.ok) {
                    const result = await response.json();
                    console.log("result", result)
                    setData(result);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Fetch Api error - ", error);
                setError(error)
                setLoading(false)
            }
    
        }

        fetchFun()
    }, []);


    return {data, loading, error};
}

export default useFetchApi;