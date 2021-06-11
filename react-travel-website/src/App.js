import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutKR from './components/pages/About-KR';
import Tours from './components/pages/Tours';
import Transport from './components/pages/Transport'
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-kr' component={AboutKR} />
          <Route path='/tours' component={Tours} />
          <Route path='/transport' component={Transport} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;