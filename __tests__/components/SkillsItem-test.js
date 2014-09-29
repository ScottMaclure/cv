jest.dontMock('../../components/SkillsItem.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var itemComponent = require('../../components/SkillsItem');

describe('SkillsItem component test suite', function () {

	var component;

	describe('for valid item data', function () {

		var data = {
			name: 'Web Development',
			level: 'Expert',
			keywords: [
				'JavaScript / ECMAScript 5 (jQuery)',
				'HTML(5), CSS(3)',
				'SCSS, Compass'
			]
		};

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				itemComponent(data)
			);
		});

		it('renders a heading matching name', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-heading');
			expect(domCom).toBeDefined();
			expect(domCom.getDOMNode().textContent).toEqual(data.name);
		});

		it('has a list-group element', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'list-group');
			expect(domCom).toBeDefined();
		});

		it('has 3 list-group-item elements', function () {
			var domCom = TestUtils.scryRenderedDOMComponentsWithClass(component, 'list-group-item');
			expect(domCom.length).toBe(3);
		});

	});


});