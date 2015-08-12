var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var ProjectStore = require('../../stores/ProjectStore');
var Actions = require('../../actions/Actions');
var ProjectsListItems = require('../ProjectsListItems/ProjectsListItems');

require('./Projects.scss');

var Projects = React.createClass({
	mixins: [Router.Navigation,
			Router.State,
			Reflux.connect(ProjectStore, 'projectData')],

	incrementProject: function(model){
		Actions.incrementProject(model);
	},

	render: function() {
		return (
			<div className='projects'>
				<h1>Projects</h1>
				<ProjectsListItems onClick={this.incrementProject} models={this.state.projectData}/>
			</div>
		);
	}
});



module.exports = Projects;