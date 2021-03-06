var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

var itemComponent = React.createFactory(require(__dirname + '/SkillsItem'));

module.exports = createReactClass({

	propTypes: {
		title: PropTypes.string,
		items: PropTypes.arrayOf(PropTypes.object)
	},

	getDefaultProps: function () {
		return {
			title: 'Section Title Here',
			items: []
		};
	},

	/**
	 * Split into groups of 3, then add inside a row.
	 */
	processRowItems: function (items, rowSize) {

		// Change items by reference with each splice.
		var rowItems = items.splice(0, rowSize);

		return DOM.div(
			{ key: 'itemsRow' + items.length, className: 'row' },
			rowItems.map(function (item, index) {
				// Thirds, but xs gets 1 column.
				return DOM.div({ key: 'item'+index, className: 'col-sm-4' }, itemComponent(item))
			})
		)

	},

	render: function () {

		var components = [];

		// Lets get tricky, and put our skills into rows of 3 columns, for nicest layout.
		var items = this.props.items.slice(); // duplicate array of objects
		var rowSize = 3;

		while (items.length > 0) {
			// Join array onto existing.
			// items changed by reference.
			components.push(this.processRowItems(items, rowSize));
		}

		return DOM.div({ className: 'skills' },
			[
				// TODO Consider making this a component of itself. SectionTitle?
				DOM.div({ key: 'title', className: 'row' },
					DOM.div({ className: 'col' },
						DOM.h2(null, this.props.title)
					)
				),
				components
			]
		);

	}

});