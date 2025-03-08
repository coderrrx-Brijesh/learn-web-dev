import { set } from "mongoose";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import  useGif  from "../hooks/useGif";
export default function Random() {
  const{gif,loading,fetchData,error}=useGif()
  return (
    <div className="random-container">
      <div className="random-gif-box">
        <h1 className="font-bold text-2xl">A Random Gif</h1>
        {
          loading ? (<Spinner></Spinner>):(error ? (<p className="error-msg">{error}</p>):
          (<img className="image-box" src={gif}></img>))
        }
        <button className="random-btn" onClick={()=>(fetchData())}>Genrate Random Gif</button>
      </div>
    </div>
  );
}
