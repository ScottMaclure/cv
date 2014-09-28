jest.dontMock('../../components/Languages.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var languagesComponent = require('../../components/Languages');

describe('Languages component test suite', function () {

	describe('for an empty languages props', function () {

		var lang,
			h2,
			children;

		beforeEach(function () {

			lang = TestUtils.renderIntoDocument(
				languagesComponent()
			);

			h2 = TestUtils.findRenderedDOMComponentWithTag(lang, 'h2');

			children = TestUtils.scryRenderedDOMComponentsWithTag(lang, 'div');

		});

		it('renders the heading', function () {
			expect(h2.getDOMNode().textContent).toEqual('Languages');
		});

		it('renders nothing else', function () {
			// 3 divs - container, row, column.
			expect(children.length).toBe(3);
		});

	});

});