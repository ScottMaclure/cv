jest.dontMock('../../components/PlainText.js');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var plainTextComponent = React.createFactory(require('../../components/PlainText'));

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
			expect(ReactDOM.findDOMNode(domCom).textContent).toEqual('TEST_TITLE');
		});

		it('renders the body', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'plainText__body');
			expect(ReactDOM.findDOMNode(domCom).textContent).toEqual('TEST_BODY');
		});

	});

});