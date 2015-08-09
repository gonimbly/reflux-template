var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var State = Router.State;
var RouteHandler = Router.RouteHandler;
var GlobalActions = require('../actions/GlobalActions');

var AppManager = React.createClass({
  mixins: [
  	Navigation,
  	State
  ],
  componentDidMount: function () {
    GlobalActions.appReady();
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