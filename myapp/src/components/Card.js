import React from "react";
import "../styles/Card.css";

const Card = props =>
{
    return(
        <div className="card col-md-2 text-center">
            <div className="image text-center">
                <img alt={props.name} src={props.imageURL} data-status ={props.status} id={props.id} onClick={() => props.clickedImage(props.id)}/>
            </div>
        </div>
    )
}

export default Card;