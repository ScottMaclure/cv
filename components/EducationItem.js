var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

module.exports = createReactClass({

	propTypes: {
		institution: PropTypes.string,
		area: PropTypes.string,
		studyType: PropTypes.string,
		startDate: PropTypes.string,
		endDate: PropTypes.string,
		gpa: PropTypes.string,
		courses: PropTypes.arrayOf(PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			institution: PropTypes.string,
			area: PropTypes.string,
			studyType: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
			gpa: PropTypes.string,
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