import logo from './logo.svg';
import './App.css';
import { set } from 'mongoose';
import {useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [text,setText] = useState('');
  const [name,setName] = useState('');

  // // variation 1-->runs on all renders
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // })

  // // Varitions 2-->runs only on first render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // },[])

  // // variation 3-->runs only on sepcific changes
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // },[name])

  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // },[text])

  // variatons 4-->to handle unmounting of component
  useEffect(()=>{
    // add event listner
    console.log("listner added");

    // listener removed
    return()=>{
      console.log("listner removed");
    }
  })
  function change_handler(event){
    setText(event.target.value); 
    console.log(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={change_handler}></input>
    </div>
  );
}

export default App;
