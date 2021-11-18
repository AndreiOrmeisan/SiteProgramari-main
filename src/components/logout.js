import React from 'react';
import { Navigate} from "react-router-dom";

function Logout () {
    document.getElementById('btnLogin').innerHTML = 'Log in';
    localStorage.removeItem('token');
    return (
        <Navigate to = '/'>

        </Navigate>
    )
}

export default Logout;