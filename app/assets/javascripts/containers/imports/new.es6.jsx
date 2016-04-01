import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

class Import extends React.Component {
  onDrop (files) {
    console.log('Received files: ', files);
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
    )
  }
}

$(document).ready(function() {
  ReactDOM.render(<Import/>, document.getElementById('main'))
})
