import React, { Component } from 'react';
import './App.css';

import fire from './Firebase';
import Routes from './Routes';
import UnSignedRoutes from './UnSignedRoutes';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener = () => {

    fire.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({user})
      } else {
        this.setState({user: null})
      }
    });

  }
  render() {
    return (
      this.state.user ? <Routes/> : <UnSignedRoutes/>
    );
  }
}

export default App;
