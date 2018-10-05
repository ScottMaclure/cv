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

			DOM.div({ key: 'title', className: 'row plainText__title' },
				DOM.div({ className: 'col' },
					DOM.h2(null, this.props.title)
				)
			),

			DOM.div({ key: 'body', className: 'row plainText__body' },
				DOM.div({ className: 'col', dangerouslySetInnerHTML: { __html: this.props.body }})
			)

		]);

	}

});