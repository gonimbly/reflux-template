//Tools
var React = require('react');
var Router = require('react-router');

// CSS
require('normalize.css');

var routes = require('./routes');
var content = document.getElementById('content');
Router.run(routes, function (Handler) {
  React.render(<Handler/>, content);
});