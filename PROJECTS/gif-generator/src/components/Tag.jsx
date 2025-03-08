import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import  useGif  from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag, setTag] = useState('');
  const {gif,loading,fetchData,error}=useGif(tag)
  return (
    <div className="tag-container">
      <div className="tag-gif-box">
        <h1 className="font-bold text-2xl">Random {tag} Gif</h1>
        {loading ? <Spinner></Spinner>:
          error ? (
            <p className="error-msg">{error}</p>
          ) : (
            gif && <img className="image-box" src={gif} alt="Tagged GIF" />
          )
        }
        <input
          type="text"
          name="tag-field"
          className="tag-input rounded-lg p-1 m-2"
          placeholder="Enter Meme Name"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />
        <button className="tag-btn" onClick={()=>(fetchData())}>Find Gif</button>
      </div>
    </div>
  );
}
