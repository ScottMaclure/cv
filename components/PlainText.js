var React = require('react'),
	DOM = React.DOM;

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		body: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			title: 'Title here',
			body: 'body here'
		};
	},

	render: function () {

		return DOM.div({ className: 'plainText'}, [

			DOM.div({ className: 'row plainText__title' },
				DOM.div({ className: 'col-xs-12' },
					DOM.h2(null, this.props.title)
				)
			),

			DOM.div({ className: 'row plainText__body' },
				DOM.div({ className: 'col-xs-12',
					dangerouslySetInnerHTML: { __html: this.props.body }
				})
			)

		]);

	}

});