import React from "react";
import "../styles/Header.css";

//This function is used to put the header on the screen which contains the score and the high score.
const Header = props =>
{
    return(
        <div>
        <header className = "jumbotron">
            <h1>Community Clicky Game</h1>
            <h3>Score: {props.score} High Score: {props.highScore}</h3>
            <h3 className="test"></h3>
        </header>
        {props.children}
        </div>
    )
}

export default Header;