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
		this.listenTo(Actions.changeProject, this.onChange);
	},
	getInitialState: function(){
		return this.projectData;
	},
    onChange: function(model){
        var i = _.indexOf(this.projectData, model);
        this.projectData[i].name = model.name;
        this.trigger(this.projectData);
    }
});

module.exports = ProjectStore;