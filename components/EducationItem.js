var React = require('react'),
	DOM = React.DOM;

module.exports = React.createClass({

	propTypes: {
		institution: React.PropTypes.string,
		area: React.PropTypes.string,
		studyType: React.PropTypes.string,
		startDate: React.PropTypes.string,
		endDate: React.PropTypes.string,
		gpa: React.PropTypes.string,
		courses: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			institution: React.PropTypes.string,
			area: React.PropTypes.string,
			studyType: React.PropTypes.string,
			startDate: React.PropTypes.string,
			endDate: React.PropTypes.string,
			gpa: React.PropTypes.string,
			courses: []
		};
	},

	render: function () {

		return DOM.div({ className: 'panel panel-default' }, [

			DOM.div({ className: 'panel-heading' }, DOM.div({ className: 'row' }, [
				DOM.div({ className: 'col-xs-8 educationItem__institution' },
					this.props.institution
				),
				DOM.div({ className: 'col-xs-2 educationItem__startDate' },
					this.props.startDate
				),
				DOM.div({ className: 'col-xs-2 educationItem__endDate' },
					this.props.endDate
				)
			])),

			DOM.div({ className: 'panel-body' }, [
				DOM.div({ className: 'educationItem__area' }, this.props.area),
				DOM.div({ className: 'educationItem__studyType' }, this.props.studyType),
				this.props.courses.map(function (course) {
					return DOM.div({ className: 'educationItem__course', dangerouslySetInnerHTML: { __html: course}})
				})
			])

		]);

	}

});