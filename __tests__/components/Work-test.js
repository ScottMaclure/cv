jest.dontMock('../../components/Work.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var workComponent = require('../../components/Work');

describe('Work component test suite', function () {

	var component;

	describe('When created with valid work data', function () {

		var title = 'Workz';
		var work = [
			{
				"company": "Test Company 1",
				"position": "Test position 1",
				"website": "https://www.optus.com.au/",
				"startDate": "2011",
				"endDate": "Present",
				"summary": "test summary 1",
				"highlights": [
					"highlight 1",
					"highlight 2",
					"highlight 3"
				]
			},
			{
				"company": "Test company 2",
				"position": "Test position 2",
				"website": "http://scott.maclure.com.au/",
				"startDate": "2005",
				"endDate": "Present",
				"summary": "test summary 2",
				"highlights": []
			}
		];

		beforeEach(function () {
			component = TestUtils.renderIntoDocument(
				workComponent({ title: title, work: work })
			);
		});

		it('renders the heading', function () {
			var h2 = TestUtils.findRenderedDOMComponentWithTag(component, 'h2');
			expect(h2.getDOMNode().textContent).toEqual(title);
		});

		it('renders a row for each work item', function () {
			var items = TestUtils.scryRenderedDOMComponentsWithClass(component, 'row');
			expect(items.length).toBe(3);
		});

	});

});