import { Navigate } from 'react-router-dom';
import {useState} from 'react';

const Card = ({img, name, rating, id,setInfo}) => {

    const [test, setTest] = useState(false);

    if (test){
        setInfo(id)
        return(
            <Navigate to = '/programari'></Navigate>
        )
    }

    return(
        
        <div className = 'card_body' onClick = {()=>{setTest(true)}}>
            <img className = 'card_img' src ={img} alt = ''></img>
            <h2 className ='card_title'>{name} </h2>
            <p className = 'card_description'>Rating {rating}</p>
        </div>

    )
}

export default Card;