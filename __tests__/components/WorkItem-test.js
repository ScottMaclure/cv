jest.dontMock('../../components/WorkItem.js');

var React = require('react');
var TestUtils = require('react-addons-test-utils');

var workItemComponent = React.createFactory(require('../../components/WorkItem'));

describe('WorkItem component test suite', function () {

	var component;

	describe('for valid work item data', function () {

		var work = {
			company: 'Test Company 1',
			position: 'Test position 1',
			website: 'https://www.optus.com.au/',
			startDate: '2011',
			endDate: 'Present',
			summary: 'test summary 1',
			highlights: [
				'highlight 1',
				'highlight 2',
				'highlight 3'
			]
		};

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				workItemComponent(work)
			);
		});

		it('renders company', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'workItem__company');
			expect(domCom).toBeDefined();
		});

		it('renders position', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'workItem__position');
			expect(domCom).toBeDefined();
		});

		it('renders website', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'workItem__website');
			expect(domCom).toBeDefined();
		});

		it('renders startDate', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'workItem__startDate');
			expect(domCom).toBeDefined();
		});

		it('renders endDate', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'workItem__endDate');
			expect(domCom).toBeDefined();
		});

		it('renders summary', function () {
			var domCom = TestUtils.findRenderedDOMComponentWithClass(component, 'workItem__summary');
			expect(domCom).toBeDefined();
		});

		it('renders highlights', function () {
			var domCom = TestUtils.scryRenderedDOMComponentsWithClass(component, 'workItem__highlight');
			expect(domCom.length).toBe(3);
		});

	});

});