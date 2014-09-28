var React = require('react'),
	DOM = React.DOM

module.exports = React.createClass({

	propTypes: {
		jsonResume: React.PropTypes.object
	},

	render: function () {

		return DOM.div(
			{ className: 'container-fluid' },
			[
				DOM.div(
					{ className: 'page-header' },
					DOM.h1(
						null,
						'Resume of ' + this.props.jsonResume.basics.name
					)
				)
			]
		);

	}

});