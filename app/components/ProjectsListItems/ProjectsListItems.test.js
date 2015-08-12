describe('ProjectsListItems', function() {
	it('rendered', function() {

		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;

		var ProjectsListItems = require('./ProjectsListItems');
		var rendered = (<ProjectsListItems models={[{name:'ProjectsListItems'}]} onClick={function(){}} />);
		var renderedView = TestUtils.renderIntoDocument(rendered);

		var textContent = renderedView.getDOMNode().textContent;

		expect(textContent).toContain('ProjectsListItems');
	});
});