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

		var components = [];

		if (this.props.languages.length > 0) {

			var languagesComponents = [];
			this.props.languages.forEach(function (language) {
				languagesComponents.push(DOM.dt(null, language.language));
				languagesComponents.push(DOM.dd(null, language.fluency));
			});

			components.push(
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						DOM.dl(null,
							languagesComponents
						)
					)
				)
			);

		}

		return DOM.div({ className: 'languagesContainer' },
			[
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						DOM.h2(null, 'Languages')
					)
				),
				components
			]
		);

	}



});