import { useState } from "react";
import { newRegister } from "../../utils/requests";
import {Link} from 'react-router-dom';


const Dashboard = ({setLoggedIn}) => {

    const [openLinks,setOpenLinks] = useState(false);
    async function inregistrare(){
        let inregistrare = await newRegister(localStorage.getItem('token'));

        console.log(inregistrare);
    }

    function toggleNavbar () {
        setOpenLinks(!openLinks);
    }
    return(
        <div></div>
        /*<div className = 'navbar'>
            <div className = 'leftSide' id = {openLinks ? "open" : "close "}>
                <img></img>
                <div className = 'hiddenLinks'>
                    <Link to = '/'>Acasa</Link>
                    <Link to = '/programare'>Programare</Link>
                    <Link to = '/info'>Despre noi</Link>
                </div>
            </div>
            <div className = 'rightSide'>
                <Link to = '/'>Acasa</Link>
                <Link to = '/programare'>Programare</Link>
                <Link to = '/info'>Despre noi</Link>
            </div>
            <button onClick = {toggleNavbar}></button>
        </div>*/
    )
}

export default Dashboard;
