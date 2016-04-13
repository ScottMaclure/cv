jest.dontMock('../../components/EducationItem.js');

var React = require('react');
var TestUtils = require('react-addons-test-utils');

var educationItemComponent = React.createFactory(require('../../components/EducationItem'));

describe('EducationItem component test suite', function () {

	var component;

	describe('for valid data', function () {

		var itemData = {
			institution: 'University of Technology, Sydney',
			area: 'Science in Computing Science',
			studyType: 'Bachelor',
			startDate: '1998',
			endDate: '2002',
			gpa: 'Honors',
			courses: []
		};

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				educationItemComponent(itemData)
			);
		});

		it('renders institution', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'educationItem__institution');
			expect(domCom).toBeDefined();
		});

		it('renders area', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'educationItem__area');
			expect(domCom).toBeDefined();
		});

		it('renders studyType', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'educationItem__studyType');
			expect(domCom).toBeDefined();
		});

		it('renders startDate', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'educationItem__startDate');
			expect(domCom).toBeDefined();
		});

		it('renders endDate', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'educationItem__endDate');
			expect(domCom).toBeDefined();
		});

	});

});