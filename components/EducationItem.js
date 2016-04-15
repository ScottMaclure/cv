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

			DOM.div({ key: 'headerContainer', className: 'panel-heading' }, DOM.div({ className: 'row' }, [
				DOM.div({ key: 'institution', className: 'col-xs-8 educationItem__institution' },
					this.props.institution
				),
				DOM.div({ key: 'startDate', className: 'col-xs-2 educationItem__startDate' },
					this.props.startDate
				),
				DOM.div({ key: 'endDate', className: 'col-xs-2 educationItem__endDate' },
					this.props.endDate
				)
			])),

			DOM.div({ key: 'bodyContainer', className: 'panel-body' }, [
				DOM.div({ key: 'area', className: 'educationItem__area' }, this.props.area),
				DOM.div({ key: 'studyType', className: 'educationItem__studyType' }, this.props.studyType),
				this.props.courses.map(function (course, index) {
					return DOM.div({ key: 'course'+index, className: 'educationItem__course', dangerouslySetInnerHTML: { __html: course}})
				})
			])

		]);

	}

});