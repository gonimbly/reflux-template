describe('Projects', function() {
  it('Projects rendered', function() {
  	
  	var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;

    var Projects = require('./Projects');
    var rendered = (<Projects />);
	var renderedView = TestUtils.renderIntoDocument(rendered);

	var textContent = renderedView.getDOMNode().textContent;

	expect(textContent).toContain('Projects');
  });
});