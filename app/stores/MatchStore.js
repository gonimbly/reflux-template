var Reflux = require('reflux');
var _ = require('lodash');
var Actions = require('../actions/Actions');

var MatchStore = Reflux.createStore({
	matchData: [
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
		this.listenTo(Actions.updateName, this.onChange);
	},
	getInitialState: function(){
		return this.matchData;
	},
    onChange: function(model){
        var i = _.indexOf(this.matchData, model);
        this.matchData[i].name = model.name;
        this.trigger(this.matchData);
    }
});

module.exports = MatchStore;