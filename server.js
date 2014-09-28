/**
 * @see http://expressjs.com/4x/api.html
 */

var express = require('express'),
	serveStatic = require('serve-static'),
	errorHandler = require('errorhandler'),
	path = require('path');

var app = express();

// For openshift.
app.set('port', process.env.PORT || 7001);

// Static file server.
app.use(serveStatic(path.join(__dirname, 'public')));

// Required to support JSON-encoded bodies
//app.use(express.json());

// TODO Check for process.env.NODE_ENV === 'development'
app.use(errorHandler());

// Load routes, passing app
var indexRoute = require('./routes/index');

// Bind routes
app.route('/').get(indexRoute.index);

// @see http://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
app.listen(app.get('port'), function () {
	console.log('HTTP server listening on: http://localhost:' + app.get('port'));
});