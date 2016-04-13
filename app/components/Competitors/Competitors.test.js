describe('Competitors', function() {
	it('rendered', function() {

		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;

		var Competitors = require('./Competitors');
		var rendered = (<Competitors models={[{name:'Competitors'}]} onClick={function(){}} />);
		var renderedView = TestUtils.renderIntoDocument(rendered);

		var textContent = renderedView.getDOMNode().textContent;

		expect(textContent).toContain('Competitors');
	});
});