var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var ProjectStore = require('../../stores/ProjectStore');
var Actions = require('../../actions/Actions');
var Competitors = require('../ProjectsListItems/ProjectsListItems');

require('./Match.scss');

var Match = React.createClass({
	mixins: [Router.Navigation,
			Router.State,
			Reflux.connect(ProjectStore, 'matchData')],

	onSubmitClick : function(e) {
		console.log('this.state.matchData',this.state.matchData);
	},

	onChange: function(model) {
		Actions.updateName(model);
	},

	render: function() {
		return (
			<div className='match'>
				<h1>Match</h1>
				<Competitors models={this.state.matchData} onChange={this.onChange}/>
				<button type="cancel" className="btn btn-default">Cancel</button>
				<button type="submit" onClick={this.onSubmitClick} className="btn btn-default">Submit</button>
			</div>
		);
	}
});



module.exports = Match;