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

	onSubmitClick : function(e) {
		console.log('this.state.projectData',this.state.projectData);
	},

	onChange: function(model) {
		Actions.changeProject(model);
	},

	render: function() {
		return (
			<div className='projects'>
				<h1>Projects</h1>
				<ProjectsListItems models={this.state.projectData} onChange={this.onChange}/>
				<button type="cancel" className="btn btn-default">Cancel</button>
				<button type="submit" onClick={this.onSubmitClick} className="btn btn-default">Submit</button>
			</div>
		);
	}
});



module.exports = Projects;