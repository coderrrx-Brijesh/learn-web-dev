import React, {useState} from "react";
import {useEffect} from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify";
import "./App.css";
const App = () => {
  const [courses,setCourses]=useState([]);
  const [category,set_category]=useState([filterData[0].title])
  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const res= await fetch(apiUrl);
        const output=await res.json();
        // save data into a variable courses
        setCourses(output.data);
        console.log(output)
      }
      catch(err){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[])
  return(
    <div className="wrapper">
      <Navbar/>
      <div className="content-container">
        <Filter filterData={filterData} category={category} set_category={set_category}/>

        <Cards courses={courses} category={category}/>
      </div>
    </div>
  )
};

export default App;
