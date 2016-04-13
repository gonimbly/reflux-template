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
				<li key={model.id}>
					Competitor
					<input className="name" value={model.name} />
					
					<select className="form-control" id="points">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
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