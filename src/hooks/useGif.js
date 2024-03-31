import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(tag);
    
    const API_Key = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&tag=${tag}`;
    
    async function fetchData() {
        setLoading(true);
        
        try {
            const { data } = await axios.get(url);
            const image = data.data.images.downsized_large.url;
            setGif(image);
        } catch (error) {
            setError("Failed to fetch data");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);
     
     return {loading,gif,fetchData};

}

export default useGif