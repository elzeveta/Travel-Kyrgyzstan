import React from "react";
import "./Attractions.css";

const Attraction = ({ name, image, desc}) => {
    return (
        <div id="attractions">
        <img className="attractions-image" src={image} alt="lake"/>
         <div id="attractions-text">
           <div id="attractions-text-inner">
             <h3>{name}</h3>
             <p>{desc}</p>
           </div>
         </div>
       </div>
    )
}

export default Attraction;