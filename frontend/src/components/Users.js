import React from 'react';

class Users extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
      <h1>Users</h1>
      {this.state.users.map(user =>
        <div key={user.id}>{user.name} : {user.email}</div>
      )}
        </div>
    );
  }
}

export default Users;
