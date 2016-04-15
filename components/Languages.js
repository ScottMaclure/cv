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

		return DOM.div({ className: 'languagesContainer' }, [
			DOM.div({ key: 'title', className: 'row' },
				DOM.div({ className: 'col-xs-12' },
					DOM.h2(null, 'Languages')
				)
			),
			DOM.div({ key: 'body', className: 'row' },
				DOM.div({ className: 'col-xs-12' },
					this.props.languages.length > 0 ? DOM.dl(null,
						this.props.languages.map(function (language, index) {
							return [
								DOM.dt({key: 'lang'+index}, language.language),
								DOM.dd({key: 'fluency'+index}, language.fluency)
							];
						})
					) : null
				)
			)
		]);

	}



});