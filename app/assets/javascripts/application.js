//= require jquery
//= require jquery_ujs
//= require react_ujs

// Required to make react_ujs work
window.React = global.React = require('react');
window.ReactDOM = global.ReactDOM = require('react-dom');

// Manually import components and add them to window and global
import Import from "./components/import.es6.jsx"
window.Import = global.Import = Import;