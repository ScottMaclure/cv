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
			highlightsComponent = DOM.div({ key: 'workItem__highlights', className: 'workItem__highlights'}, [
				DOM.div({ key: 'highlights__title', className: 'highlights__title' }, 'Highlights'),
				DOM.ul({ key: 'list-group', className: 'list-group' }, this.props.highlights.map(function (highlight, index) {
					return DOM.li({
						key: 'workItem__highlight__' + index,
						className: 'list-group-item workItem__highlight',
						dangerouslySetInnerHTML: { __html: highlight }
					});
				}))
			]);
		}

		return DOM.div({ className: 'panel panel-default' }, [
			DOM.div({ key: 'panel-heading', className: 'panel-heading' },
				DOM.div({ className: 'row' }, [
					DOM.div({ key: 'workItem__company', className: 'col-xs-8' },
						DOM.div({ className: 'workItem__company'},
							this.props.company
						)
					),
					DOM.div({ key: 'workItem__startDate', className: 'col-xs-2' },
						DOM.div({ className: 'workItem__startDate'},
							this.props.startDate
						)
					),
					DOM.div({ key: 'workItem__endDate', className: 'col-xs-2' },
						DOM.div({ className: 'workItem__endDate'},
							this.props.endDate
						)
					)
				])
			),
			DOM.div({ key: 'panel-body', className: 'panel-body' }, [
				DOM.div({ key: 'workItem__position', className: 'workItem__position'},
					this.props.position
				),
				DOM.div({ key: 'workItem__website', className: 'workItem__website'},
					this.props.website
				),
				DOM.div({ key: 'workItem__summary', className: 'workItem__summary'},
					this.props.summary
				),
				highlightsComponent
			])
		]);

	}

});