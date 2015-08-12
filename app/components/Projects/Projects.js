var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var _map = require('lodash.map');
var ProjectStore = require('../../stores/ProjectStore');
var Actions = require('../../actions/Actions');

require('./Projects.scss');

var Projects = React.createClass({
  mixins: [Router.Navigation,
			Router.State,
			Reflux.connect(ProjectStore, 'projectData')],

  render: function() {
	var list = _map(this.state.projectData, function(model){
		return (
			<li key={model.id} onClick={Actions.incrementProject.bind(this, model)}>
				{model.name}
				<span className='badge'>{model.budget}</span>
			</li>
		);
	}.bind(this));
	return (
	  <div className='projects'>
		<h1>Projects</h1>
		<ul className='nav nav-pills nav-stacked'>
			{list}
		</ul>
	  </div>
	);
  }
});



module.exports = Projects;