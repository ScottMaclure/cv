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

		return DOM.div({ className: 'card' }, [

			DOM.div({ key: 'headerContainer', className: 'card-header' }, [this.props.institution, '(' + this.props.startDate, '-', this.props.endDate + ')'].join(' ')),

			DOM.div({ key: 'bodyContainer', className: 'card-body' }, [
				DOM.div({ key: 'area', className: 'educationItem__area' }, this.props.area),
				DOM.div({ key: 'studyType', className: 'educationItem__studyType' }, this.props.studyType),
				this.props.courses.map(function (course, index) {
					return DOM.div({ key: 'course'+index, className: 'educationItem__course', dangerouslySetInnerHTML: { __html: course}})
				})
			])

		]);

	}

});