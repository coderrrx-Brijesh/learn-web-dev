import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setGif]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    async function fetchData(){
        setLoading(true)
        try{
            const {data}=await axios.get(tag ? `${url}&tag=${tag}`: url)
            setGif(data.data.images.downsized_large.url)
        }
        catch(error){
            setError("Error While Fetching the Data");
        }finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(!tag)fetchData()
    },[])
    return {gif,loading,fetchData,error}
};

export default useGif;
