import React, { useState } from 'react';
import { Navigate} from "react-router-dom";

const ContulMeu = () =>{
    const [logout, setLogout] = useState(false);

    function logOut(){
        localStorage.removeItem('token');
        setLogout(true);
    }

    if(logout){
        return(
            <Navigate to = '/'/>
        )
    }

    return(
        <div>
            <h1>Info despre mine</h1>
            <button onClick = {logOut}>Log out</button>
        </div>
    )
}

export default ContulMeu;