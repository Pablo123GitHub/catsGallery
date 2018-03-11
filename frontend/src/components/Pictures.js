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
        <div className ="row" key={picture.id}>

            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={picture.iconUrl}/>
                            <span className="card-title">{picture.description}</span>
                    </div>
                    <div className="card-content">
                        <p> Liked {picture.likes} times</p>
                    </div>

                </div>
            </div>
        </div>




      )}
        </div>
    );
  }
}

export default Pictures;
