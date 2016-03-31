// Setup app into global name space for server rendering
var app = window.app = global.app = {};

// Component::Manifest
var FileDropArea = require('./components/file_drop_area.es6.js');
// Include into app namespace
app.NoContent = NoContent;
