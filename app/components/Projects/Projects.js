var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var _map = require('lodash.map');
var ProjectStore = require('../../stores/ProjectStore');
var Actions = require('../../actions/Actions');
var ProjectsListItem = require('../ProjectsListItem/ProjectsListItem');

require('./Projects.scss');

var Projects = React.createClass({
	mixins: [Router.Navigation,
			Router.State,
			Reflux.connect(ProjectStore, 'projectData')],

	incrementProject: function(model){
		Actions.incrementProject(model);
	},

	render: function() {
		var list = _map(this.state.projectData, function(model){
			return <ProjectsListItem onClick={this.incrementProject} model={model} />;
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