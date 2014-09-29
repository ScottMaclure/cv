var React = require('react'),
	DOM = React.DOM;

var languagesComponent = require(__dirname + '/Languages');
var plainTextComponent = require(__dirname + '/PlainText');
var skillsComponent = require(__dirname + '/Skills');
var workComponent = require(__dirname + '/Work');
var educationItemComponent = require(__dirname + '/EducationItem');
var footerComponent = require(__dirname + '/Footer');

module.exports = React.createClass({

	propTypes: {
		jsonResume: React.PropTypes.object
	},

	render: function () {

		var components = [];

		components.push(
			DOM.div({ className: 'page-header' }, [
				DOM.div({ className: 'row' }, [
					DOM.div({ className: 'col-xs-12 col-sm-10' },
						DOM.h1(null, [
							DOM.div(null, this.props.jsonResume.basics.name),
							DOM.small(null, ' ' + this.props.jsonResume.basics.label)
						])
					),
					DOM.div({ className: 'col-xs-12 col-sm-2 hidden-xs text-right' },
						DOM.img({ className: 'gravatar', src: this.props.jsonResume.basics.picture })
					)
				])
			])
		);

		components.push(
			plainTextComponent({ title: 'About', body: this.props.jsonResume.basics.summary })
		);

		components.push(skillsComponent({ title: 'Skills', items: this.props.jsonResume.skills }));

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
			footerComponent({
				author: this.props.jsonResume.basics.name,
				email: this.props.jsonResume.basics.email,
				githubUrl: 'https://github.com/ScottMaclure/scott-cv/'
			})
		);

		return DOM.div(
			{ className: 'container-fluid' },
			components
		);

	}

});