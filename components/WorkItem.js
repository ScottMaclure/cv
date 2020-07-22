var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

module.exports = createReactClass({

	propTypes: {
		company: PropTypes.string,
		position: PropTypes.string,
		website: PropTypes.string,
		startDate: PropTypes.string,
		endDate: PropTypes.string,
		summary: PropTypes.string,
		highlights: PropTypes.arrayOf(PropTypes.string)
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

		return DOM.div({ className: 'card' }, [

			DOM.div({ key: 'panel-heading', className: 'card-header' }, [this.props.company, '(' + this.props.startDate, '-', this.props.endDate + ')'].join(' ')),

			DOM.div({ key: 'panel-body', className: 'card-body' }, [
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