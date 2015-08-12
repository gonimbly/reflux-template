var Reflux = require('reflux');
var _ = require('lodash');
var Actions = require('../actions/Actions');

var ProjectStore = Reflux.createStore({
	projectData: [
		{
			"id": 1,
			"name": "Project 1",
			"key": "gb-p1",
			"budget": 50,
			"start_date": 1438441116000,
			"end_date": 1441033116000
		},
		{
			"id": 2,
			"name": "Project 2",
			"key": "gb-p2",
			"budget": 100,
			"start_date": 1438441116000,
			"end_date": 1441033116000
		},
		{
			"id": 3,
			"name": "Project 3",
			"key": "gb-p3",
			"budget": 150,
			"start_date": 1438441116000,
			"end_date": 1441033116000
		}
	],
	init: function() {
		this.listenTo(Actions.incrementProject, this.onIncrementProject);
	},
	getInitialState: function(){
		return this.projectData;
	},
	onIncrementProject: function(model){
		var i = _.indexOf(this.projectData, model);
		this.projectData[i].budget += 5;
		this.trigger(this.projectData);
	}
});

module.exports = ProjectStore;