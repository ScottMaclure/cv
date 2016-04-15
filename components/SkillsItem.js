var React = require('react'),
	DOM = React.DOM;

module.exports = React.createClass({

	propTypes: {
		name: React.PropTypes.string,
		level: React.PropTypes.string,
		keywords: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			name: '',
			level: '',
			keywords: []
		};
	},

	render: function () {

		return DOM.div({ className: 'panel panel-default' }, [

			DOM.div({ key: 'panelHeading', className: 'panel-heading' },
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' }, this.props.name)
				)
			),

			DOM.div({ key: 'panelBody', className: 'panel-body' },
				DOM.ul({ className: 'list-group' },
					this.props.keywords.map(function (keyword, index) {
						return DOM.li({ key: 'item' + index, className: 'list-group-item' }, keyword);
					})
				)
			)

		]);

	}

});