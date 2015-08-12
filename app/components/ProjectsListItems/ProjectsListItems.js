var React = require('react');
var _ = require('lodash');

var Projects = React.createClass({
	PropTypes:{
		models: React.PropTypes.array.isRequired,
		onClick: React.PropTypes.func.isRequired
	},

	onClick: function(model){
		this.props.onClick(model);
	},

	render: function() {
		var models = this.props.models;
		var list = _.map(models, function(model){
			return (
				<li key={model.id} onClick={this.onClick.bind(this, model)}>
					{model.name}
					<span className='badge'>{model.budget}</span>
				</li>
			);
		}.bind(this));
		return (
			<ul className='nav nav-pills nav-stacked'>
				{list}
			</ul>
		);
	}
});

module.exports = Projects;