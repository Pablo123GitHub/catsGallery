import React from 'react';

class Pictures extends React.Component {
  state = {pictures: []}

  componentDidMount() {
    fetch('/pics')
      .then(res => res.json())
      .then(pictures => this.setState({ pictures }));
  }

  render() {
    return (
      <div>
      <h1>Pictures</h1>
      {this.state.pictures.map(picture =>
        <div key={picture.id}>{picture.description} was liked {picture.likes} times
            <img src={picture.iconUrl} />
        </div>


      )}
        </div>
    );
  }
}

export default Pictures;
