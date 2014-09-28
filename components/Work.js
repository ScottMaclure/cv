var React = require('react'),
	DOM = React.DOM;

var workItemComponent = require(__dirname + '/WorkItem');

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		work: React.PropTypes.arrayOf(React.PropTypes.object)
	},

	getDefaultProps: function () {
		return {
			title: 'Work',
			work: []
		};
	},

	render: function () {

		var components = [];

		this.props.work.forEach(function (work) {
			components.push(
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						workItemComponent(work)
					)
				)
			);
		});

		return DOM.div({ className: 'work' },
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