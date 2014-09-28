var React = require('react'),
	DOM = React.DOM;

module.exports = React.createClass({

	propTypes: {
		company: React.PropTypes.string,
		position: React.PropTypes.string,
		website: React.PropTypes.string,
		startDate: React.PropTypes.string,
		endDate: React.PropTypes.string,
		summary: React.PropTypes.string,
		highlights: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			company: '',
			position: '',
			website: '',
			startDate: '',
			endDate: '',
			summary: '',
			highlights: []
		};
	},

	render: function () {

		var highlightsComponent;
		if (this.props.highlights.length > 0) {
			highlightsComponent = DOM.div({ className: 'workItem__highlights'}, [
				DOM.div({ className: 'highlights__title' }, 'Highlights'),
				DOM.ul({ className: 'list-group' }, this.props.highlights.map(function (highlight) {
					return DOM.li({ className: 'list-group-item', dangerouslySetInnerHTML: { __html: highlight }});
				}))
			]);
		}

		return DOM.div({ className: 'panel panel-default' }, [
			DOM.div({ className: 'panel-heading' }, [
				DOM.div({ className: 'row' }, [
					DOM.div({ className: 'col-xs-6' },
						DOM.div({ className: 'workItem__company'},
							this.props.company
						)
					),
					DOM.div({ className: 'col-xs-3' },
						DOM.div({ className: 'workItem__startDate'},
							this.props.startDate
						)
					),
					DOM.div({ className: 'col-xs-3' },
						DOM.div({ className: 'workItem__endDate'},
							this.props.endDate
						)
					)
				]),
			]),
			DOM.div({ className: 'panel-body' }, [
				DOM.div({ className: 'workItem__position'},
					this.props.position
				),
				DOM.div({ className: 'workItem__website'},
					this.props.website
				),
				DOM.div({ className: 'workItem__summary'},
					this.props.summary
				),
				highlightsComponent
			])
		]);

	}

});