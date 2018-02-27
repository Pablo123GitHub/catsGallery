import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">

        <Home />

      </div>
    );
  }
}

export default App;
