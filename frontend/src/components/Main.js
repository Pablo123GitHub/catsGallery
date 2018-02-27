import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: 'https://content.screencast.com/users/Pablo_Zendesk/folders/Jing/media/6af6cdee-3cca-4d9a-a44e-307fc6c09ad8/00000024.png',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:3001/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL}  alt="img" />
      </form>
    );
  }
}

export default Main;
