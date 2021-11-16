import './App.css';
import './pages/login/login.css'
import './register.css';
import LogIn from './pages/login/login.js'
import {useState} from 'react';

function App() {

  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confPassword, setConfPassword] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState('');

  function registerfnt(){
    
    fetch({
      method: 'post',
      url: 'https://trackout.herokuapp.com/api/user/create',
      data: {
        email : email,
        password : password
      }
    })
    .then(function (response) {
      alert('Te ai inregistrat cu succes !')
      setRegister(false)
    })
    .catch(function (error) {
      alert(error);
    });
  }

  console.log(isLoggedIn)
  if(isLoggedIn){
    return(
      <div>
        <h1>Te ai logat cu succes. Aici o sa vezi programarile etc etc</h1>
        <button onClick = {() => {setLoggedIn(false)}}>Logout</button>
      </div>
      
    )
  }
  if(register){
    return(
      <div className = 'maineRegister'>
        <div>
          <label id = 'label'>Email</label>
          <input id = 'emailRegister' type='text' onChange = {e => setEmail(e.target.value)}></input>
        </div>
        <div>
          <label id = 'label'>Password</label>
          <input id = 'passwor' type='password' onChange = {e => setPassword(e.target.value)}></input>
        </div>
        <div>
          <label id = 'label'>Confirm password</label>
          <input id = 'confPassword' type='password' onChange = {e => setConfPassword(e.target.value)}></input>
        </div>
        <button className = 'btnRegister' onClick = {registerfnt}>Submit</button>
      </div>
    )
  }

  return (
    <LogIn setRegister = {setRegister} setLoggedIn = {setLoggedIn}></LogIn>
  );
}

export default App;
