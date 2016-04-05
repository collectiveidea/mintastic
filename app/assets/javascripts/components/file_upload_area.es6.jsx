import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

class FileUploadArea extends React.Component {
  onDrop (files) {
    var req = request.post('/upload');

    req.on('progress', (e)=> {
      console.log('Percentage done:', e.percent)
    });

    files.forEach((file)=> {
      req.attach(file.name, file);
    });

    req.end(()=> {
      console.log('Finished!')
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