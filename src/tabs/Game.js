/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Timer from "../components/Timer";
import { useNavigate, useParams } from "react-router-dom";
import easy from '../media/easy-waldo.png';
import medium from '../media/medium-waldo.jpg';
import hard from '../media/hard-waldo.jpg';
import '../style/game.css';
import waldo from '../media/waldo-wave.jpg';
import odlaw from '../media/odlaw.png';
import wizard from '../media/wizard.png';

import { db } from "../utils/firebase"
import { ref, get, child, set } from "firebase/database";

const Game = () => {
    const { id } = useParams();
    const [array, setArray] = useState([waldo]);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [imgWidth, setImgWidth]= useState(0);
    const [foundArray, setFoundArray] = useState([]);
    const [bool, setBool] = useState(false);
    const navigate = useNavigate();

    let img = easy;
    if (id === "2") { 
        img = medium;

    }
    else if (id === "3") {
        img = hard;
    }

    useEffect(() => {
        if (id === "1" && array.includes(wizard)) {
            setArray([waldo]);
        }
        else if ((id === "2" || id === "3") && array[1] !== wizard) {
            setArray([waldo, wizard, odlaw]);
        }

        if (id === "1" && foundArray.includes("waldo")) {
            setBool(true);
            const element = document.getElementsByClassName("popup")[0];
            element.className = "popup flex-container-center";
        } else if (id === "2" || id === "3") {
            if (foundArray.includes("waldo") && foundArray.includes("odlaw") && foundArray.includes("wizard")) {
                setBool(true);
                const element = document.getElementsByClassName("popup")[0];
                element.className = "popup flex-container-center";
            }
        }
    },[id, array, foundArray, bool])

    const showMenu = (x, y) => {
        const div = document.getElementsByClassName("dropdown")[0];
        div.className = "dropdown";
        div.style.position = "absolute";
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    };

    const handleClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        setImgHeight(event.target.offsetHeight);
        setImgWidth(event.target.offsetWidth);
        const x = event.clientX - rect.left; //x position within the element.
        const y = event.clientY - rect.top;  //y position within the element.
        setXPos(x);
        setYPos(y);
        showMenu(event.clientX, event.clientY);
    };

    const checkCharacter = (event, index) => {

        const div = document.getElementsByClassName("dropdown")[0];
        div.className = "dropdown hidden";
        let char = "";
        let clickWidth = xPos / imgWidth;
        let clickHeight = yPos / imgHeight;

        if (index === 0) { char = "waldo"; }
        else if (index === 1) { char = "wizard"; }
        else { char = "odlaw"; }

        const dbRef = ref(db);
        get(child(dbRef, `game/${char+id}`)).then((snapshot) => {
            if (snapshot.exists()) {
              const obj = snapshot.val();
              if (clickWidth > obj.x1 && clickWidth < obj.x2 && clickHeight > obj.y1 && clickHeight < obj.y2) {
                const fnd = document.getElementById(index.toString());
                fnd.style.backgroundColor = "rgb(103, 217, 103)";
                setFoundArray([...foundArray, char]);
              }
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        
    }

    
    return (
        <div className="game">
            <Header/>
            <div className="game-display">
                {/* <Timer bool = { bool }/> */}
                <div className="find-characters">
                    <h1>FIND</h1>
                    { array.map((val) => {
                        return (
                            <div className="character" id={ array.indexOf(val) } key={val}>
                                <img src={val} alt="img" className="find-images"></img>
                            </div>
                        )
                    })}
                </div>
                <img id="game-image" src= {img} alt="Game" onClick={ handleClick }></img>
            </div>
            <div className="dropdown hidden">
                { array.map((val) => {
                    return (
                        <a href="#" key={val} className="choose" onClick={ (event) => checkCharacter(event, array.indexOf(val)) }>
                            <img src={val} alt="img" className="dropdown-images"></img>
                        </a>
                    )
                })}
            </div>
            <div className="popup flex-container-center hidden">
                <h1> YOU WON!</h1>
                <button id="home-btn" onClick={ () => navigate('/') }>Home Screen</button>
            </div>
        </div>
    );
}

export default Game;