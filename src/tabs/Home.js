import React from "react";
import Header from "../components/Header";
import Level from "../components/Level";
import '../style/home.css'
import easy from '../media/easy-waldo.png';
import medium from '../media/medium-waldo.jpg';
import hard from '../media/hard-waldo.jpg';
import logo from '../media/leaderboard.svg';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <Header/>
            <div className="goto-leaderboard" onClick={ () => { navigate('/leaderboard') } }>
                <img id="logo" src={logo} alt="Leaderboard"></img>
                <h1>Leaderboard</h1>
            </div>
            <div className="levels">
                <Level src={ easy } alt="easy" diffLevel="EASY" id="1" onClick = { () => { navigate(`/game/1`) } } />
                <Level src={ medium } alt="medium" diffLevel="MEDIUM" id="2" onClick = { () => { navigate(`/game/2`) } }/>
                <Level src={ hard } alt="hard" diffLevel="HARD" id="3" onClick = { () => { navigate(`/game/3`) } }/>
            </div>
        </div>
    );
}

export default Home;