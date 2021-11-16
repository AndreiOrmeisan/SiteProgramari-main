import './App.css';
import './pages/login/login.css'
import './register.css';
import LogIn from './pages/login/login.js'
import Register from './pages/login/components/register.js';
import Dashboard from './pages/dashboard/dashboard';
import {useState} from 'react';

function App() {

  const [isLoggedIn, setLoggedIn] = useState('');
  const [register, setRegister] = useState(false);

  if(isLoggedIn){
    return(
      <Dashboard setLoggedIn = {setLoggedIn}/>
    )
  }
  if(register){
    return(
      <Register setRegister = {setRegister}/>
    )
  }

  return (
    <LogIn setRegister = {setRegister} setLoggedIn = {setLoggedIn}></LogIn>
  );
}

export default App;
