import React from 'react';

import './DogCard.css';



function DogCard(props){
    return(
         <div onClick={()=> props.selectDog(props.id)} className="card">
            <img  src={props.image}/>
        
        </div>
    )
}




export default DogCard;