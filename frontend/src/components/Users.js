import React from 'react';

class Users extends React.Component {


  render() {
    return (
      <div>
      <h1>Users</h1>
      {this.props.users.map(user =>
        <div key={user.id}>{user.name} : {user.email}</div>
      )}
        </div>
    );
  }
}

export default Users;
