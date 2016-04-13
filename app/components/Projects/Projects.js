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

	render: function() {
		return (
			<div className='projects'>
				<h1>Projects</h1>
				<ProjectsListItems models={this.state.projectData}/>
				<button type="cancel" className="btn btn-default">Cancel</button>
				<button type="submit" className="btn btn-default">Submit</button>
			</div>
		);
	}
});



module.exports = Projects;