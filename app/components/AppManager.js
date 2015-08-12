var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var State = Router.State;
var RouteHandler = Router.RouteHandler;
var Actions = require('../actions/Actions');

var AppManager = React.createClass({
  mixins: [
  	Navigation,
  	State
  ],
  componentDidMount: function () {
    Actions.appLoaded();
  },
  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = AppManager;