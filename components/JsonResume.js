var React = require('react'),
	DOM = React.DOM;

var languagesComponent = React.createFactory(require(__dirname + '/Languages'));
var plainTextComponent = React.createFactory(require(__dirname + '/PlainText'));
var skillsComponent = React.createFactory(require(__dirname + '/Skills'));
var workComponent = React.createFactory(require(__dirname + '/Work'));
var educationItemComponent = React.createFactory(require(__dirname + '/EducationItem'));
var footerComponent = React.createFactory(require(__dirname + '/Footer'));

module.exports = React.createClass({

	propTypes: {
		pkg: React.PropTypes.object,
		jsonResume: React.PropTypes.object
	},

	render: function () {

		var components = [];

		components.push(
			DOM.div({ key: 'header', className: 'page-header' },
				DOM.div({ className: 'row' }, [
					DOM.div({ key: 'headerText', className: 'col-xs-10' },
						DOM.h1(null, [
							DOM.div({key: 'name'}, this.props.jsonResume.basics.name),
							DOM.small({key: 'label'}, ' ' + this.props.jsonResume.basics.label)
						])
					),
					DOM.img({ key: 'headerAvatar', className: 'gravatar', src: this.props.jsonResume.basics.picture })
				])
			)
		);

		components.push(
			plainTextComponent({ key: 'summary', title: 'About', body: this.props.jsonResume.basics.summary })
		);

		components.push(skillsComponent({ key: 'skills', title: 'Skills', items: this.props.jsonResume.skills }));

		components.push(workComponent({ key: 'work', title: 'Work', work: this.props.jsonResume.work }));

		// Education
		// TODO Create an Education component and move this in there. Or be generic?
		components.push(
			DOM.div({ key: 'education', className: 'educationContainer' }, [
				DOM.div({ key: 'educationTitle', className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						DOM.h2(null, 'Education')
					)
				),
				DOM.div({ key: 'educationBody', className: 'row' },
					DOM.div({ className: 'col-xs-12' },
						this.props.jsonResume.education.map(function (education, index) {
							education.key = 'education' + index;
							return educationItemComponent(education);
						})
					)
				)
			])
		);

		// Optional, human languages component.
		if (this.props.jsonResume.languages && this.props.jsonResume.languages.length > 0) {
			components.push(languagesComponent({
				key: 'languages',
				languages: this.props.jsonResume.languages
			}));
		}

		// Footer
		components.push(
			footerComponent({
				key: 'footer',
				version: this.props.pkg.version,
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