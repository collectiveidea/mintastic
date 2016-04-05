require( 'babel-polyfill' );

// Manually add components to window and global
// so that react_ujs and react-server can find them and render them.
window.FileUploadArea = global.FileUploadArea = require("./components/file_upload_area.es6.jsx").default