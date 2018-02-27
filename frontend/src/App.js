import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Users from './components/Users';
import Pictures from './components/Pictures';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <div className="App">

      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">

          <Home/>
          <Pictures/>

        </ul>
       </nav>


      </div>
    );
  }
}

export default App;
