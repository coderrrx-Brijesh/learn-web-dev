import React, {useState} from "react";
import Tours from "./Components/Tours";
import data from "./data"
const App = () => {
  const [tours, set_tours]=useState(data);
  function removeTour(id){
    const new_tours=tours.filter((tour)=>tour.id!==id);
    set_tours(new_tours);
  }
  if(tours.length===0){
    return <div>
      <h2>No tours left</h2>
      <button className="refresh" onClick={()=>set_tours(data)}>Refresh</button>
    </div>
  }
  return <div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>;
};

export default App;
