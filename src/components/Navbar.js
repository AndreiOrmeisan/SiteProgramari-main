import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../reserved.png'

function Navbar(){

    return (
        <div className = 'navbar'>
            <div className = 'rightSide'>
                <img src = {logo} id = 'imgLogo' alt = ""></img>
                <Link to = '/'>ADC Rezervari</Link>
                <Link to = '/programari'>Programarile mele</Link>
                <Link to = '/login' id = 'btnLogin'>Contul meu</Link>
            </div>
        </div>
    )
}

export default Navbar;
