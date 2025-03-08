import logo from './logo.svg';
import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/Login';   
import Activity from './components/Activity'; 
import MainHandler from './components/MainHandler'; 
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">ContactUs</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp">SignUp</NavLink>

          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Activity">Activity</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHandler/>}>
        <Route index element={<Home/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Activity" element={<Activity/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
