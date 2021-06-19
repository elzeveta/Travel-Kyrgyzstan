import React from "react";
import "./Parks.css";

function Parks() {
  return (
    <div className="parks__container">
      <h1>National parks and reserves</h1>
      <div className="park1">
      <img src="../../images/img-ala-archa.jpg" alt="ala-archa-img" />
      <div className="text">
        <h2>Ala-Archa National Park </h2>
        <p>
        Ala-Archa gorge is one of the most famous sights of Kyrgyzstan. The Ala-Archa gorge is located in the Chuy Region, and is a national park. Every year, this alpine gorge receives hundreds of thousands of tourists, both local and foreign. There are several reasons for this popularity. Firstly, the Ala-Archa gorge is located only 30 kilometers from Bishkek and therefore it is very easy to get here and there is all the necessary tourist infrastructure: a good asphalt road, shops, hotels, cafes, and places to relax among beautiful nature.
        </p>
        <a href="http://triptokyrgyzstan.com/en/about-kyrgyzstan/geographic-facts/national-parks-reserves">Read more
        </a>
      </div>
    </div>
    <div className="park2">
      <img src="../../images/img-arslanbob.jpg" alt="arslanbob-img" />
      <div className="text">
        <h2>Walnut and fruit forests of Arslanbob</h2>
        <p>
          With horse-drawn carriages clip-clopping along the cobblestone streets
          of old Quebec park, it's easy to feel as though you've jumped back in
          time in this historic park.
        </p>
        <a href="http://triptokyrgyzstan.com/en/about-kyrgyzstan/geographic-facts/national-parks-reserves">Read more</a>
      </div>
    </div>
    <div className="park2">
      <img src="../../images/img-sarychat.jpg" alt="sarychat-img" />
      <div className="text">
        <h2>Sarychat-Ertash Reserve</h2>
        <p>
          Vancouver is easily the most beautiful park in Canada. With mountains
          to the north, the Pacific Ocean to the west, and the enormous Stanley
          Park right downtown, the park's landscapes are jaw-droppingly
          gorgeous.
        </p>
        <a href="http://triptokyrgyzstan.com/en/about-kyrgyzstan/geographic-facts/national-parks-reserves">Read more
        </a>
      </div>
    </div>
    <div className="park2">
      <img src="../../images/img-sary-che-res.jpg" alt="sary-chelek-img" />
      <div className="text">
        <h2>Sary-Chelek Reserve </h2>
        <p>
          Welcome to Canada's wild west: Calgary, Alberta is home to the famous
          Calgary Stampede, a week-long festival featuring rodeo events,
          concerts, special activities, and exhibitions galore.
        </p>
        <a href="http://triptokyrgyzstan.com/en/about-kyrgyzstan/geographic-facts/national-parks-reserves">Read more</a>
      </div>
    </div>
    <div className="park2">
      <img src="../../images/img-chonkemin.jpg" alt="chon-kemin-img" />
      <div className="text">
        <h2>Chon-Kemin National Park </h2>
        <p>
          With a population of just over 25,000 people, Whitehorse is certainly
          one of the smaller cities on this list, but it's a charming place to
          visit, combining the old and the new, and it serves as a great
          launching point for a trip exploring Canada's vast and beautiful
          north.
        </p>
        <a href="http://triptokyrgyzstan.com/en/about-kyrgyzstan/geographic-facts/national-parks-reserves">Read more</a>
      </div>
    </div>
    </div>
  );
}

export default Parks;
