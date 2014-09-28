var React = require('react'),
	DOM = React.DOM;

module.exports = React.createClass({

	propTypes: {
		languages: React.PropTypes.arrayOf(React.PropTypes.object)
	},

	getDefaultProps: function () {
		return {
			languages: []
		};
	},

	render: function () {

		return DOM.div({ className: 'languagesContainer' },
			[
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						DOM.h2(null, 'Languages')
					)
				)
			]
		);

	}



});