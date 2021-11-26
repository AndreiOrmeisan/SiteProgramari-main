import Main from "./components/main";
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Navigate} from "react-router-dom";
import "./login.css";

const LogIn = () => {
  /*const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }*/

  const [status, setStatus] = useState('');

  function inregistrare(){
    setStatus('Inregistrare');
  }

  function autentificare(){
    setStatus('Autentificare');
  }

  let token = localStorage.getItem('token');

  if(token !== null){
    return(
      <Navigate to = '/contulmeu'/>
    )
  }

  if(status === 'Autentificare'){
    return(
      <div className="register_menu">
        <div className>
            <Main/>
        </div>
      </div>
    )  
  }
  else if(status === 'Inregistrare'){
    return (
      <Navigate to ='/inregistrare'/>
    );
  }

  return(
    <div className="register_menu">
        <div className = "chooseOption">
          <button onClick = {autentificare}>Autentificare</button>
          <br />
          <br />

          <FacebookLogin
              appId="" //APP ID NOT CREATED YET
              fields="name,email,picture"
              //callback={responseFacebook}
          />
          <br />
          <br />

          <GoogleLogin
              clientId="" //CLIENTID NOT CREATED YET
              buttonText="LOGIN WITH GOOGLE"
              //onSuccess={responseGoogle}
              //onFailure={responseGoogle}
          />
          
          <br />
          <br />
      
          <button onClick = {inregistrare}>Inregistrare in sistem</button>
        </div>
    </div>
  )
}

export default LogIn;
