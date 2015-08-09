//Tools
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//Components
var AppManager = require('./components/AppManager');
var Projects = require('./components/Projects/Projects');

module.exports = (
	<Route>
		<Route name='AppManager' path='/' handler={AppManager}>
			<Route name='projects' handler={Projects}/>
		</Route>
	</Route>
);