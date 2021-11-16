import React , {useState} from 'react';

const Main = ({setLoggedIn, setRegister}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logIn(){
        fetch({
            method: 'post',
            url: 'https://trackout.herokuapp.com/api/user/login',
            data: {
              email : email,
              password : password
            }
          })
          .then(function (response) {
            setLoggedIn(true);
            console.log('true')
          })
          .catch(function (error) {
            console.log(error)
            alert('Nume parola gresita');
          });
    }

    function register(){
        setRegister(true);
    }


    return (
        <div className = 'main'>
            <div className ='subMain'>
                <h1 className = 'title'>Andrei</h1>
                <div className = 'infoInput'>
                    <div className = 'email'>
                        <label className ='label'>Email</label>
                        <input type ='text' id='email' onChange = {e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label className ='label'>Password</label>
                        <input type ='password' id='password' onChange = {e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button className='btnLogin' onClick = {logIn}>Log in</button>
                </div>
                <div>
                    <button className = 'register' onClick = {register}>Register now</button>
                </div>   
            </div>         
        </div>
    )
}

export default Main;