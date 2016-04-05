import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import axiosDefaults from 'axios/lib/defaults'

class FileUploadArea extends React.Component {
  onDrop(files) {
    var authenticityToken = $('#new_import').closest('form').find('input[name=authenticity_token]').val();
    var instance = axios.create({
      timeout: 1000,
      headers: {'X-CSRF-Token': authenticityToken}
    });

    instance.post('/imports')
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="form-control">
        <Dropzone onDrop={this.onDrop}>
          <div>Drop files here</div>
        </Dropzone>
      </div>
    )
  }
}

export default FileUploadArea