import React from 'react';
import ReactDOM from 'react-dom';

class Import extends React.Component {
  render() {
    return (
      <div>Stuff goes here!</div>
    );
  }
}

export default Import;

$(document).ready(function() {
  ReactDOM.render(<Import/>, document.getElementById('main'))
})
