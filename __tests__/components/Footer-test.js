jest.dontMock('../../components/Footer.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var footerComponent = require('../../components/Footer.js');

describe('Footer component test suite', function () {

	var component;

	describe('for valid data', function () {

		var data = {
			author: 'TestAuthor',
			email: 'test@email.com',
			githubUrl: 'https://github.com/ScottMaclure/scott-cv/'
		};

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				footerComponent(data)
			);
		});

		it('renders two anchors', function () {
			var domCom = TestUtils.scryRenderedDOMComponentsWithTag(component, 'a');
			expect(domCom.length).toBe(2);
		});

		it('renders author name', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'footer__author');
			expect(domCom.getDOMNode().textContent).toEqual('TestAuthor');
		});

		it('renders email', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'footer__author');
			expect(domCom.getDOMNode().href).toEqual('mailto:test@email.com');
		});

		it('renders github link', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'footer_url');
			expect(domCom.getDOMNode().href).toEqual('https://github.com/ScottMaclure/scott-cv/');
		});

		it('renders the CV version', function () {
			var domCom = TestUtils.scryRenderedDOMComponentsWithClass(component, 'footer_version');
			expect(domCom.length).toBe(1);
		});

	});

});