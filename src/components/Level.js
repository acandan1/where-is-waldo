import React from "react";

const Level = (props) => {
    return (
        <div className="level" onClick={ props.onClick }>
            <img className="home-images" src = { props.src } alt = { props.alt }/>
            <h2 className="home-titles" >{ props.diffLevel }</h2>
        </div>
    )
}

export default Level;