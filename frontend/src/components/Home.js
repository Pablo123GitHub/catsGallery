import React from 'react';

class Home extends React.Component {


  render() {
    return (
      <div>
      <h1>Home</h1>
      <h3>Please register your name </h3>

        <form action="/">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

          <input type="submit" value="Submit"/>
    </form>
        </div>
    );
  }
}

export default Home;
