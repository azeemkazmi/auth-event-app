import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

const UnSignedRoutes = ()  => {
    return (
        <Router>
        <div>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
        </div>
      </Router>
    );
  }
  
  export default UnSignedRoutes;