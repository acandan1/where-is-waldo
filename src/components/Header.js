import React from "react";
import waldo from '../media/waldo-wave.jpg';
import odlaw from '../media/odlaw.png';
import wizard from '../media/wizard.png';
import '../style/header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header" onClick={ () => { navigate('/') } }>
            <img className="waldo-wave" src= { wizard } alt="Wizard"/>
            <img className="waldo-wave" src= { odlaw } alt="Odlaw"/>
            <h1>Where's Waldo?</h1>
            <img className="waldo-wave" src= { waldo } alt="Waldo"/>
        </div>
    );
}

export default Header;
