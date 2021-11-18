import React, {useState} from 'react';
import { newAccount } from '../../../utils/requests';

const Register = ({setRegister}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState(false);

    async function checkInfoForRegister(){

        if(validateEmail(email)){
            if (password === confPassword){
                var strength = document.getElementById('strength').innerText;
                console.log(strength)

                if (strength === 'Parola puternica!' || strength === 'Parola buna!'){

                    let response = await newAccount(email,password);

                    if (response === "Error"){
                        alert('Acest email este deja inregistrat !');
                        document.getElementById('emailRegister').value = '';
                        document.getElementById('passwor').value = '';
                        document.getElementById('confPassword').value ='';
                    }
                    else{
                        setRegister(false)
                        alert('Te-ai inregistrat cu succes');
                    }
                }
                else{
                    alert('Parola trebuie sa contina minim 8 caractere si minim un numar !')
                    document.getElementById('passwor').value = '';
                    document.getElementById('confPassword').value ='';
                }
            }
            else{
                alert('Cele doua parole nu sunt identice');
                setPassword('');
                setConfPassword('');
                document.getElementById('passwor').value = '';
                document.getElementById('confPassword').value ='';
            }
        }
        else{
            alert('Adresa de email nu este valida !');
            setEmail('');
            document.getElementById('emailRegister').value = '';
            document.getElementById('passwor').value = '';
            document.getElementById('confPassword').value ='';
        }
    }

    function onChange(input){
        setPassword(input);
        passwordChanged(input);
    }

    return(
        <div className = 'maineRegister'>
          <div>
            <label id = 'label'>Email</label>
            <input id = 'emailRegister' type='text' onChange = {e => setEmail(e.target.value)} ></input>
          </div>
          <div>
            <label id = 'label'>Password</label>
            <input id = 'passwor' type='password' onChange = {e => onChange(e.target.value)} ></input>
          </div>
          <div>
            <label id = 'label'>Confirm password</label>
            <input id = 'confPassword' type='password' onChange = {e => setConfPassword(e.target.value)} ></input>
          </div>
          <div>
            <span id="strength">Verificare parola</span>
          </div>
          <button className = 'btnRegister' onClick = {checkInfoForRegister}>Submit</button>
        </div>
    )
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function passwordChanged(password) {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = password;
    if (pwd.length === 0) {
        strength.innerHTML = 'Verificare parola';
    } else if (false === enoughRegex.test(pwd)) {
        strength.innerHTML = '<span style="color:red">Prea putine caractere!</span>';
    } else if (strongRegex.test(pwd)) {
        strength.innerHTML = '<span style="color:green">Parola puternica!</span>';
    } else if (mediumRegex.test(pwd)) {
        strength.innerHTML = '<span style="color:orange">Parola buna!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Parola slaba!</span>';
    }
}

export default Register;
