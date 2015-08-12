var React = require('react');

var Projects = React.createClass({
	PropTypes:{
		model: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func.isRequired
	},

	render: function() {
		var model = this.props.model;
		return (
			<li key={model.id} onClick={this.props.onClick.bind(this, model)}>
				{model.name}
				<span className='badge'>{model.budget}</span>
			</li>
		);
	}
});

module.exports = Projects;