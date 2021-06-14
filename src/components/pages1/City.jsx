import React from "react";
import "./Cities.css";

const City = ({ name, image, desc}) => {
    return (
        <div id="cities">
        <img className="cities-image" src={image} alt="city"/>
         <div id="cities-text">
           <div id="cities-text-inner">
             <h2>{name}</h2>
             <p>{desc}</p>
           </div>
         </div>
       </div>
    )
}

export default City;
