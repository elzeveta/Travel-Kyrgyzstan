// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import GenInfo from "../pages1/GenInfo";
// import Visa from "../pages1/Visa";
// import Mountains from "../pages1/Mountains";
// import Water from "../pages1/Water";
// import Parks from "../pages1/Parks";
// import Cities from "../pages1/Cities";
// import Attractions from "../pages1/Attractions";
// import Customs from "../pages1/Customs";
// import KgOnSilk from "../pages1/KgOnSilk";
// import "./About.css"
// import '../../App.css';

// class AboutKR extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <Router>
//         <div>
//           <div className="aboutkr">
//             <div>
//               <Link to="/" className="about__links">All</Link>
//             </div>
//             <div>
//               <Link to="/genInfo" className="about__links">General Informations</Link>
//             </div>
//             <div>
//               <Link to="/visa" className="about__links">Passports & Visas</Link>
//             </div>
//             <div>
//               <Link to="/mountains" className="about__links">Mountains & valleys</Link>
//             </div>
//             <div>
//               <Link to="/water" className="about__links">Water points</Link>
//             </div>
//             <div>
//               <Link to="/parks" className="about__links">National parks & reserves</Link>
//             </div>
//             <div>
//               <Link to="/cities" className="about__links">Cities, towns & villages</Link>
//             </div>
//             <div>
//               <Link to="/attractions" className="about__links">Attractions</Link>
//             </div>
//             <div>
//               <Link to="/customs" className="about__links">Customs & Traditions</Link>
//             </div>
//             <div>
//               <Link to="/kgonsilk" className="about__links">Kyrgyzstan on the Great Silk Road</Link>
//             </div>
//           </div>
//           <Switch>
//           <Route path="/">
//           <h1>Welcome</h1>
//           </Route>
//           <Route path="/genInfo">
//             <GenInfo />
//           </Route>
//           <Route path="/visa">
//             <Visa />
//           </Route>
//           <Route path="/mountains">
//             <Mountains />
//           </Route>
//           <Route path="/water">
//             <Water />
//           </Route>
//           <Route path="/parks">
//             <Parks />
//           </Route>
//           <Route path="/cities">
//             <Cities />
//           </Route>
//           <Route path="/attractions">
//             <Attractions />
//           </Route>
//           <Route path="/customs">
//             <Customs />
//           </Route>
//           <Route path="/kgonsilk">
//             <KgOnSilk />
//           </Route>
//         </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default AboutKR;

import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function AboutKR() {
  return (
    <div className='cards aboutkr'>
      <h1>About Kyrgyzstan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='“The Most Beautiful Country in the World”: Kyrgyzstan’s natural splendour'
              label='My Kyrgyzstan'
              path='/geninfo'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Welcome:)'
              path='/Visa'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Mountains and valleys are the main components of the relief of Kyrgyzstan'
              label='Epic Mountains'
              path='/Mountains'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Lakes in Kyrgyzstan are unique and remarkably beautiful'
              label='Mystery Waters'
              path='/water'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Save wonderful natural landscapes, flora and fauna of the country'
              label='Wonderful Parks'
              path='/parks'
            />
            <CardItem
              src='images/img-6.jpg'
              text='How beautiful is our native land'
              label='Bloom city'
              path='/cities'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='The long history of Kyrgyzstan conceals many secrets'
              label='Unique'
              path='/attractions'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Hospitality, kindness and openness are the main qualities of the nation.'
              label='Nomad People'
              path='/customs'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Kyrgyzstan, due to its location in the heart of Central Asia, always had the utmost importance on the Silk Road'
              label='Great Silk Road'
              path='/kgonsilk'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutKR;