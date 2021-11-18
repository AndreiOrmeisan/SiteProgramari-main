import {useState} from 'react';
import Navbar from "./components/Navbar";
import LogIn from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Contact from "./components/Contact";
import Register from './pages/login/components/register';
import { BrowserRouter as BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import './pages/login/login.css'
import './register.css';
import Logout from './components/logout';

function App () {

  const [isLoggedIn, setLoggedIn] = useState('');
  const [register, setRegister] = useState(false);

  console.log('aici')
  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<LogIn setRegister = {setRegister} setLoggedIn = {setLoggedIn}/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/preturi" element={<Contact />}></Route>
          <Route path="/about" element={<Contact />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/inregistrare" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;