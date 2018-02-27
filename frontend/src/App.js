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


          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/pictures">Pictures</Link></li>
          <li><Link to="/upload">Uploader</Link></li>


        </ul>
       </nav>

         <Route path="/" component={Home}/>
         <Route path="/users" component={Users} {...this.props}/>
       <Route path="/pictures" component={Pictures} {...this.props}/>
         <Route path="/upload" component={Main} {...this.props}/>
      </div>
    );
  }
}

export default App;
