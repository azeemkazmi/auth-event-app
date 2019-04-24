import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuBar from './components/MenuBar'
import CreateEvent from './components/CreateEvent';
import AllEvents from './components/AllEvents';
import MyEvents from './components/MyEvents';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';


const Routes = ()  => {
    return (
        <Router>
        <div>
        <MenuBar/>
          <Route path="/" component={Dashboard} exact />
          <Route exact path="/create" component={CreateEvent} />
          <Route exact path="/myevents" component={MyEvents} />
          <Route exact path="/allevents" component={AllEvents} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
  
  export default Routes;