var React = require('react'),
	DOM = React.DOM;

var languagesComponent = require(__dirname + '/Languages');
var plainTextComponent = require(__dirname + '/PlainText');
var workComponent = require(__dirname + '/Work');
var educationItemComponent = require(__dirname + '/EducationItem');

module.exports = React.createClass({

	propTypes: {
		jsonResume: React.PropTypes.object
	},

	render: function () {

		var components = [];

		components.push(DOM.div({ className: 'page-header' },
			DOM.h1(null, [
				DOM.div(null, this.props.jsonResume.basics.name),
				DOM.small(null, ' ' + this.props.jsonResume.basics.label)
			])
		));

		components.push(
			plainTextComponent({ title: 'About', body: this.props.jsonResume.basics.summary })
		);

		components.push(workComponent({ title: 'Work', work: this.props.jsonResume.work }));

		// Education
		// TODO Create an Education component and move this in there. Or be generic?
		components.push(
			DOM.div({ className: 'educationContainer' }, [
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						DOM.h2(null, 'Education')
					)
				),
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						this.props.jsonResume.education.map(function (education) {
							return educationItemComponent(education);
						})
					)
				)
			])
		);

		// Optional, human languages component.
		if (this.props.jsonResume.languages && this.props.jsonResume.languages.length > 0) {
			components.push(languagesComponent({
				languages: this.props.jsonResume.languages
			}));
		}

		// Footer
		components.push(
			DOM.footer(null, [
				DOM.hr(null, null),
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12 text-center' },
						DOM.small({ dangerouslySetInnerHTML: { __html: '&copy;2014 <a href="mailto:' +
							this.props.jsonResume.basics.email + '">Scott Maclure</a>'
						}})
					)
				),
				DOM.div({ className: 'row' },
					DOM.div({ className: 'col-xs-12 text-center' },
						DOM.small({ dangerouslySetInnerHTML: { __html: '<a href="' +
							'https://github.com/ScottMaclure/scott-cv/">View sourceode on github</a>.'
						}})
					)
				)
			])
		);

		return DOM.div(
			{ className: 'container-fluid' },
			components
		);

	}

});