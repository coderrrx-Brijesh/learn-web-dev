import { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  var [i,set_counter]=useState(0);
  function increment(){
    set_counter(++i);
  }
  function decrement(){
    set_counter(--i);
  }
  function reset(){
    set_counter(0);
  }
  return (
    <div className="App">
      <div className="Container">
        <div className="Heading">React-Counter</div>
        <div className="Counter_box">
          <button className="decrement" onClick={decrement}><i className="fa-solid fa-minus"></i></button>           
          <div className="counter" id="counter">{i}</div>
          <button className="increment" onClick={increment}><i className="fa-solid fa-plus"></i></button> 
        </div>
        <div className="Reset_btn" onClick={reset}>Reset</div>
      </div>
    </div>
  );
}

export default App;
