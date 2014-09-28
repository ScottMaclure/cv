var React = require('react'),
	DOM = React.DOM;

var languagesComponent = require(__dirname + '/Languages.js');

module.exports = React.createClass({

	propTypes: {
		jsonResume: React.PropTypes.object
	},

	render: function () {

		var components = [];

		components.push(
			DOM.div({ className: 'page-header' },
				DOM.h1(null, [
					DOM.span(null, 'Resume of ' + this.props.jsonResume.basics.name),
					DOM.small(null, ' ' + this.props.jsonResume.basics.label)
				])
			)
		);

		// Optional, human languages component.
		if (this.props.jsonResume.languages) {
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