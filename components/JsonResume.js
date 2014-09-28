var React = require('react'),
	DOM = React.DOM;

var languagesComponent = require(__dirname + '/Languages');
var plainTextComponent = require(__dirname + '/PlainText');
var workComponent = require(__dirname + '/Work');

module.exports = React.createClass({

	propTypes: {
		jsonResume: React.PropTypes.object
	},

	render: function () {

		var components = [];

		components.push(DOM.div({ className: 'page-header' },
			DOM.h1(null, [
				DOM.div(null, 'Resume of ' + this.props.jsonResume.basics.name),
				DOM.small(null, ' ' + this.props.jsonResume.basics.label)
			])
		));

		components.push(
			plainTextComponent({ title: 'About', body: this.props.jsonResume.basics.summary })
		);

		components.push(workComponent({ title: 'Work', work: this.props.jsonResume.work }));

		// Optional, human languages component.
		if (this.props.jsonResume.languages && this.props.jsonResume.languages.length > 0) {
			components.push(languagesComponent({
				languages: this.props.jsonResume.languages
			}));
		}

		return DOM.div(
			{ className: 'container-fluid' },
			components
		);

	}

});