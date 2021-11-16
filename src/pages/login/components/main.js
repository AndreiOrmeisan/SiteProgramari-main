import React , {useState} from 'react';
import { checkAccount } from '../../../utils/requests';

const Main = ({setLoggedIn, setRegister}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logIn(){
        if (email === '' || password === ''){
            alert('Va rog sa introduceti numele si parola');
        }
        else{
            console.log(email,password)
            checkAccount(email,password);
            setLoggedIn(true);
        }
    }

    function register(){
        console.log('aici')
        setRegister(true);
    }


    return (
        <div className = 'main'>
            <div className ='subMain'>
                <h1 className = 'title'>Log in</h1>
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