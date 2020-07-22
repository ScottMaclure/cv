var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

var workItemComponent = React.createFactory(require(__dirname + '/WorkItem'));

module.exports = createReactClass({

	propTypes: {
		title: PropTypes.string,
		work: PropTypes.arrayOf(PropTypes.object)
	},

	getDefaultProps: function () {
		return {
			title: 'Work',
			work: []
		};
	},

	render: function () {

		var components = this.props.work.map(function (work, index) {
			return DOM.div({ key: 'row' + index, className: 'row' },
				DOM.div({ className: 'col' },
					workItemComponent(work)
				)
			)
		});

		return DOM.div({ className: 'work' },
			[
				// TODO Consider making this a component of itself. SectionTitle?
				DOM.div({ key: 'titleContainer', className: 'row' },
					DOM.div({ className: 'col' },
						DOM.h2(null, this.props.title)
					)
				),
				components
			]
		);

	}


});