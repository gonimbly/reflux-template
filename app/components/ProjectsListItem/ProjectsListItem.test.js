describe('ProjectsListItem', function() {
	it('rendered', function() {

		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;

		var ProjectsListItem = require('./ProjectsListItem');
		var rendered = (<ProjectsListItem model={{name:'ProjectsListItem'}} onClick={function(){}} />);
		var renderedView = TestUtils.renderIntoDocument(rendered);

		var textContent = renderedView.getDOMNode().textContent;

		expect(textContent).toContain('ProjectsListItem');
	});
});