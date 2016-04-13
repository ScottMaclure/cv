jest.dontMock('../../components/Languages.js');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var languagesComponent = React.createFactory(require('../../components/Languages'));

describe('Languages component test suite', function () {

	var component;

	describe('for an empty languages props', function () {

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				languagesComponent()
			);
		});

		it('renders the heading', function () {
			var h2 = TestUtils.findRenderedDOMComponentWithTag(component, 'h2');
			expect(ReactDOM.findDOMNode(h2).textContent).toEqual('Languages');
		});

		it('renders NO DL element', function () {
			var dl = TestUtils.scryRenderedDOMComponentsWithTag(component, 'dl');
			expect(dl.length).toBe(0);
		});

	});

	describe('for a list of languages props', function () {

		var languages = [
			{
				language: "English",
				fluency: "Native speaker"
			},
			{
				language: "Indonesian",
				fluency: "Ignorant tourist"
			}
		];

		var h2, dl, dts;

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				languagesComponent({ languages: languages })
			);
			h2 = TestUtils.findRenderedDOMComponentWithTag(component, 'h2');
			dl = TestUtils.scryRenderedDOMComponentsWithTag(component, 'dl');
			dts = TestUtils.scryRenderedDOMComponentsWithTag(component, 'dt');
			dds = TestUtils.scryRenderedDOMComponentsWithTag(component, 'dd');
		});

		it('renders the heading', function () {
			expect(ReactDOM.findDOMNode(h2).textContent).toEqual('Languages');
		});

		it('renders 1 DL element', function () {
			expect(dl.length).toBe(1);
		});

		it('renders 2 dt elements', function () {
			expect(dts.length).toBe(2);
		});

		it('renders 2 dd elements', function () {
			expect(dds.length).toBe(2);
		});

		it('renders "English" into the first dt', function () {
			expect(ReactDOM.findDOMNode(dts[0]).textContent).toEqual('English');
		});

		it('renders "Ignorant tourist" into the second dd', function () {
			expect(ReactDOM.findDOMNode(dds[1]).textContent).toEqual('Ignorant tourist');
		});

	});

});