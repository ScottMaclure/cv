/**
 * Default routes.
 */

var fs = require('fs');
var React = require('react');
var FragmentHelper = require('../libs/FragmentHelper');

var jsonResumeComponent = require('../components/JsonResume');

exports.index = function (req, res) {

	// TODO Dynamic, cached.
	var jsonResume = JSON.parse(fs.readFileSync(__dirname + '/../data/scott-maclure.json', 'utf-8'));

	var props = {
		jsonResume: jsonResume
	};

	var component = jsonResumeComponent(props);

	var reactHtml = React.renderComponentToString(component);

	res.send(FragmentHelper.renderPage('index', reactHtml));

};