jest.dontMock('../../components/Skills.js');

var React = require('react');
var TestUtils = require('react-addons-test-utils');

var skillsComponent = React.createFactory(require('../../components/Skills'));

describe('Skills component test suite', function () {

	var component;

	describe('When created with skills data', function () {

		var title = 'Skillz';

		// Enough to get 2 "rows" of skills.
		var skills = [
			{
				name: 'Web Development',
				level: 'Expert',
				keywords: [
					'JavaScript / ECMAScript 5 (jQuery)',
					'HTML(5), CSS(3)',
					'SCSS, Compass'
				]
			},
			{
				name: 'JavaScript Frameworks',
				level: 'Expert',
				keywords: [
					'BackboneJS, MarionetteJS',
					'AngularJS',
					'ReactJS',
					'BlazeJS',
					'RactiveJS',
					'BatmanJS'
				]
			},
			{
				name: 'Web Development',
				level: 'Expert',
				keywords: [
					'JavaScript / ECMAScript 5 (jQuery)',
					'HTML(5), CSS(3)',
					'SCSS, Compass'
				]
			},
			{
				name: 'JavaScript Frameworks',
				level: 'Expert',
				keywords: [
					'BackboneJS, MarionetteJS',
					'AngularJS',
					'ReactJS',
					'BlazeJS',
					'RactiveJS',
					'BatmanJS'
				]
			}
		];

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				skillsComponent({ title: title, items: skills })
			);
		});

		it('renders the heading', function () {
			var h2 = TestUtils.findRenderedDOMComponentWithTag(component, 'h2');
			expect(h2.getDOMNode().textContent).toEqual(title);
		});

		it('renders 2 "rows" of skills', function () {
			var domCom = TestUtils.scryRenderedDOMComponentsWithClass(component, 'skills__itemsRow');
			expect(domCom.length).toBe(2);
		});

	});

});