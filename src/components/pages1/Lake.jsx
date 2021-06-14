import React from "react";
import "./Water.css";

const Lake = ({ name, image, desc}) => {
    return (
        <div id="lakes">
        <img className="lakes-image" src={image} alt="lake"/>
         <div id="lakes-text">
           <div id="lakes-text-inner">
             <h2>{name}</h2>
             <p>{desc}</p>
           </div>
         </div>
       </div>
    )
}

export default Lake;