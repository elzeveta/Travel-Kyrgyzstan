import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutKR from './components/pages/AboutKR';
import Trailers from './components/pages/Trailers';
import SignUp from './components/pages/SignUp';
import GenInfo from './components/pages1/GenInfo';
import Visa from './components/pages1/Visa';
import Slides from "./components/pages1/Slides";
import Water from "./components/pages1/Water";
import Parks from "./components/pages1/Parks";
import Cities from "./components/pages1/Cities";
import Attractions from "./components/pages1/Attractions";
import Traditions from "./components/pages1/Traditions";
import KgOnSilk from "./components/pages1/KgOnSilk";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutkr' component={AboutKR} />
          <Route path='/trailers' component={Trailers} />
          <Route path='/sign_up' component={SignUp} />
          <Route path='/geninfo' component={GenInfo} />
          <Route path='/visa' component={Visa} />
          <Route path='/slides' component={Slides} />
          <Route path='/water' component={Water} />
          <Route path='/parks' component={Parks} />
          <Route path='/cities' component={Cities} />
          <Route path='/attractions' component={Attractions} />
          <Route path='/traditions' component={Traditions} />
          <Route path='/kgonsilk' component={KgOnSilk} />
        </Switch>
      </Router>
    </>
  );
}

export default App;