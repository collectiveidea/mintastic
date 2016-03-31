React = require('react/addons');
import component from './component.js'
import Dropzone from 'react-dropzone';

const FileDropArea = React.createClass({
    Dropzone: require('react-dropzone'),

    onDrop: function (files) {
      console.log('Received files: ', files);
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
});

module.exports = FileDropArea;

