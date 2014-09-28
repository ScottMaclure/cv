jest.dontMock('../../components/PlainText.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var plainTextComponent = require('../../components/PlainText');

describe('PlainText component test suite', function () {

	var component;

	describe('for standard usage', function () {

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				plainTextComponent({ title: 'TEST_TITLE', body: 'TEST_BODY' })
			);
		});

		it('renders the title', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'plainText__title');
			expect(domCom.getDOMNode().textContent).toEqual('TEST_TITLE');
		});

		it('renders the body', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'plainText__body');
			expect(domCom.getDOMNode().textContent).toEqual('TEST_BODY');
		});

	});

});