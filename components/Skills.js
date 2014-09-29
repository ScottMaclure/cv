var React = require('react'),
	DOM = React.DOM;

var itemComponent = require(__dirname + '/SkillsItem');

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		items: React.PropTypes.arrayOf(React.PropTypes.object)
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

		var components = [];

		var rowItems = items.splice(0, rowSize);
		var rowComponents = [];

		rowItems.forEach(function (rowItem) {
			// Thirds, but xs gets 1 column.
			rowComponents.push(
				DOM.div({ className: 'col-xs-12 col-sm-4' }, itemComponent(rowItem))
			);
		});

		components.push(DOM.div({ className: 'row skills__itemsRow' },
			rowComponents
		));

		return components;

	},

	render: function () {

		var components = [];

		// Lets get tricky, and put our skills into rows of 3 columns, for nicest layout.
		var items = this.props.items.slice(); // duplicate array of objects
		var rowSize = 3;

		while (items.length > 0) {
			// Join array onto existing.
			// items changed by reference.
			components.push.apply(components, this.processRowItems(items, rowSize));
		}

		return DOM.div({ className: 'skills' },
			[
				// TODO Consider making this a component of itself. SectionTitle?
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						DOM.h2(null, this.props.title)
					)
				),
				components
			]
		);

	}

});