/**
 * Default routes.
 */

var fs = require('fs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var FragmentHelper = require('../libs/FragmentHelper');
var jsonResumeComponent = React.createFactory(require('../components/JsonResume'));

exports.index = function (req, res) {

	// TODO Dynamic, cached.
	var jsonResume = JSON.parse(fs.readFileSync(__dirname + '/../data/scott-maclure.json', 'utf-8'));
	var pkg = require('../package.json');

	var props = {
		pkg: pkg,
		jsonResume: jsonResume
	};

	var component = jsonResumeComponent(props);

	// https://facebook.github.io/react/docs/top-level-api.html#reactdomserver
	var reactHtml = ReactDOMServer.renderToStaticMarkup(component);

	res.send(FragmentHelper.renderPage('index', reactHtml));

};