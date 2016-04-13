/**
 * @see http://expressjs.com/4x/api.html
 */

var express = require('express'),
	serveStatic = require('serve-static'),
	errorHandler = require('errorhandler'),
	path = require('path'),
	indexRoute = require('./routes/index');

var app = express();

// Default port is 7001, else use the "PORT" environment variable.
app.set('port', process.env.PORT || 7001);

// Static file server.
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(serveStatic(path.join(__dirname, 'coverage')));

// Required to support JSON-encoded bodies
//app.use(express.json());

// Typically, you'd check for process.env.NODE_ENV === 'development'
// But currently I statically generate the html and upload to github pages,
// so I don't care.
app.use(errorHandler());

// Bind routes.
app.route('/').get(indexRoute.index);

// @see http://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
app.listen(app.get('port'), function () {
	console.log('HTTP server listening on: http://localhost:' + app.get('port'));
});