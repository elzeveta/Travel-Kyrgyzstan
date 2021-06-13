import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutKR from './components/pages/AboutKR';
import Tours from './components/pages/Tours';
import SignUp from './components/pages/SignUp';
import GenInfo from './components/pages1/GenInfo';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutkr' component={AboutKR} />
          <Route path='/tours' component={Tours} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/geninfo' component={GenInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;