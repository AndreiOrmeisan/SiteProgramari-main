import React , {useState} from 'react';
import { checkAccount } from '../../../utils/requests';
import { Navigate} from "react-router-dom";

const Main = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [succesLogin, setSuccesLogin] = useState('false');

    async function logIn(){
        if (email === '' || password === ''){
            alert('Va rog sa introduceti numele si parola');
        }
        else{
            let response = await checkAccount(email,password)

            if (response.data.successful){
                localStorage.setItem('token', response.data.token)
                setSuccesLogin(true);
            }
            else if (response.data.userDoesntExist){
                alert ('Userul nu a fost gasit');
                document.getElementById('email').value = '';
                document.getElementById('password').value ='';
            }
            else if (response.data.wrongPassword){
                alert ('Parola este gresita');
                document.getElementById('email').value = '';
                document.getElementById('password').value ='';
            }
        }
    }

    if (succesLogin === true){
        return (
           <Navigate to = '/'/>
        )
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
            </div>         
        </div>
    )
}

export default Main;
