import React from 'react';

import './Header.css'




function Header(props){
    return(<div className="header">This is our game {props.score}</div>)
}



export default Header;