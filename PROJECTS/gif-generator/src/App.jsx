import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="gif-container w-full h-screen flex flex-col background relative">
      <h1 className="bg-white w-11/12 text-black text-center 
      mr-[25px] ml-[25px] mt-[40px] font-bold rounded-lg items-center text-4xl px-10 py-2 mx-auto">GIF Generator</h1>
      <div className="flex-col justify-center items-center">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  )
}
