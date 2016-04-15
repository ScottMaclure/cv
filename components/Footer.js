var React = require('react'),
	DOM = React.DOM;

module.exports = React.createClass({

	propTypes: {
		version: React.PropTypes.string,
		year: React.PropTypes.number,
		author: React.PropTypes.string,
		email: React.PropTypes.string,
		githubUrl: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			year: new Date().getFullYear(),
			author: 'YourNameHere',
			email: 'your@email.com',
			githubUrl: null
		};
	},

	render: function () {
		return DOM.footer(null, [

			DOM.hr({ key: 'hr' }, null),

			DOM.div({ key: 'bodyContainer', className: 'row' }, DOM.div({ className: 'col-xs-12 text-center' }, [
				DOM.small({ key: 'email', dangerouslySetInnerHTML: { __html: '&copy; ' + this.props.year + ' ' }}),
				DOM.a({ key: 'author', className: 'footer__author', href: 'mailto:' + this.props.email }, this.props.author),
				DOM.small({ key: 'version', className: 'footer__version'}, ' v' + this.props.version)
			])),

			DOM.div({ key: 'secondaryContainer', className: 'row' },
				DOM.div({ className: 'col-xs-12 text-center' },
					DOM.small(null,
						DOM.a({ className: 'footer__url', href: this.props.githubUrl }, 'View sourcecode on github')
					)
				)
			)

		]);
	}

});