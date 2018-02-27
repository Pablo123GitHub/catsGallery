import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
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
        <Main />
    <Users users= {this.state.users} />
      </div>
    );
  }
}

export default App;
