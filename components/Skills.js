var React = require('react'),
	DOM = React.DOM;

var itemComponent = React.createFactory(require(__dirname + '/SkillsItem'));

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

		// Change items by reference with each splice.
		var rowItems = items.splice(0, rowSize);

		return DOM.div(
			{ key: 'itemsRow' + items.length, className: 'row skills__itemsRow' },
			rowItems.map(function (item, index) {
				// Thirds, but xs gets 1 column.
				return DOM.div({ key: 'item'+index, className: 'col-xs-12 col-sm-4' }, itemComponent(item))
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
					DOM.div({ className: 'col-xs-12' },
						DOM.h2(null, this.props.title)
					)
				),
				components
			]
		);

	}

});