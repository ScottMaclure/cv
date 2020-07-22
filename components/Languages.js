var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

module.exports = createReactClass({

	propTypes: {
		languages: PropTypes.arrayOf(PropTypes.object)
	},

	getDefaultProps: function () {
		return {
			languages: []
		};
	},

	render: function () {

		return DOM.div({ className: 'languagesContainer' }, [
			DOM.div({ key: 'title', className: 'row' },
				DOM.div({ className: 'col' },
					DOM.h2(null, 'Languages')
				)
			),
			DOM.div({ key: 'body', className: 'row' },
				DOM.div({ className: 'col' },
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