var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var _map = require('lodash.map');

require('./Projects.scss');

var Projects = React.createClass({
  mixins: [Router.Navigation,
			Router.State],
  handleClick: function(id){
  	console.log('id',id);
  },
  render: function() {
	var list = _map(this.staticData, function(model){
		return (
			<li key={model.id} onClick={this.handleClick.bind(this, model.id)}>
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
  },
  staticData:[
	{
		"id": 1,
		"name": "Project 1",
		"key": "gb-p1",
		"budget": 160,
		"start_date": 1438441116000,
		"end_date": 1441033116000
	},
	{
		"id": 2,
		"name": "Project 2",
		"key": "gb-p2",
		"budget": 160,
		"start_date": 1438441116000,
		"end_date": 1441033116000
	},
	{
		"id": 3,
		"name": "Project 3",
		"key": "gb-p3",
		"budget": 160,
		"start_date": 1438441116000,
		"end_date": 1441033116000
	}
  ]
});



module.exports = Projects;