var Reflux = require('reflux');
var _ = require('lodash');
var Actions = require('../actions/Actions');

var ProjectStore = Reflux.createStore({
	projectData: [
		{
			'id': 1,
			'name':''
		},
		{
			'id': 2,
			'name':''
		},
		{
			'id': 3,
			'name':''
		},
		{
			'id': 4,
			'name':''
		}
	],
	init: function() {
		this.listenTo(Actions.incrementProject, this.onIncrementProject);
	},
	getInitialState: function(){
		return this.projectData;
	}
});

module.exports = ProjectStore;