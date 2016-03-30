import React from 'react';
import ReactDOM from 'react-dom';
import FileImporter from './components/importer.jsx';

$(document).ready(function () {
  ReactDOM.render(
    <FileImporter />,
    document.getElementById('app')
  );
});
