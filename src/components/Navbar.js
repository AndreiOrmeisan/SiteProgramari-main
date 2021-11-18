import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../reserved.png'


function Navbar(){

    return (
        <div className = 'navbar'>
            <div className = 'rightSide'>
                <img src = {logo} id = 'imgLogo'></img>
                <Link to = '/'>Acasa</Link>
                <Link to = '/preturi'>Preturi</Link>
                <Link to = '/programari'>Programari</Link>
                <Link to = '/about'>Despre noi</Link>
                <Link to = '/contact'>Contact</Link>
                <Link to = '/login' id = 'btnLogin'>Log in</Link>
            </div>
        </div>
    )
}

export default Navbar;