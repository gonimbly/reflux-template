describe('Match', function() {
  it('Match rendered', function() {
  	
  	var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;

    var Match = require('./Match');
    var rendered = (<Match />);
	var renderedView = TestUtils.renderIntoDocument(rendered);

	var textContent = renderedView.getDOMNode().textContent;

	expect(textContent).toContain('Match');
  });
});