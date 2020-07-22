var React = require('react'),
	DOM = require('react-dom-factories'),
	PropTypes = require('prop-types'),
	createReactClass = require('create-react-class');

module.exports = createReactClass({

	propTypes: {
		version: PropTypes.string,
		year: PropTypes.number,
		author: PropTypes.string,
		email: PropTypes.string,
		githubUrl: PropTypes.string
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

			DOM.div({ key: 'bodyContainer', className: 'row' }, DOM.div({ className: 'col text-center' }, [
				DOM.small({ key: 'email', dangerouslySetInnerHTML: { __html: '&copy; ' + this.props.year + ' ' }}),
				DOM.a({ key: 'author', className: 'footer__author', href: 'mailto:' + this.props.email }, this.props.author),
				DOM.small({ key: 'version', className: 'footer__version'}, ' v' + this.props.version)
			])),

			DOM.div({ key: 'secondaryContainer', className: 'row' },
				DOM.div({ className: 'col text-center' },
					DOM.small(null,
						DOM.a({ className: 'footer__url', href: this.props.githubUrl }, 'View sourcecode on github')
					)
				)
			)

		]);
	}

});