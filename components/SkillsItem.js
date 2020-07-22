var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

module.exports = createReactClass({

	propTypes: {
		name: PropTypes.string,
		level: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			name: '',
			level: '',
			keywords: []
		};
	},

	render: function () {

		return DOM.div({ className: 'card' }, [

			DOM.div({ key: 'panelHeading', className: 'card-header'}, this.props.name),

			DOM.div({ key: 'panelBody', className: 'card-body' },
				DOM.ul({ className: 'list-group' },
					this.props.keywords.map(function (keyword, index) {
						return DOM.li({ key: 'item' + index, className: 'list-group-item' }, keyword);
					})
				)
			)

		]);

	}

});