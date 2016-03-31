//= require_self
//= require components
//= require react-server
//= require react_ujs


import "babel-polyfill";

// Setup React in global scope
var React = window.React = global.React = require('react');
var ReactDOM= window.ReactDOM = global.ReactDOM = require('react-dom');
window.$ = window.jQuery = require('jquery')
require('jquery-ujs')
