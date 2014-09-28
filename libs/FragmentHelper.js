/**
 * Dinky little helper to load html fragments to house React components.
 * Needs to be replaced with something elegant, for sure.
 */

var fs = require('fs');

module.exports = {

	cache: {},

	/**
	 * Cached fragments for performance. Means a server-restart is needed on fragment change.
	 * @see http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options
	 */
	loadFragment: function (fragmentName) {

		// Fixed paths for project. Could make generic, but will end up removing this helper altogether later.
		var path = __dirname + '/../fragments/' + fragmentName + '.html';

		if (this.cache.path) {
			return this.cache.path;
		}

		this.cache.path = fs.readFileSync(path, 'utf-8');

		return this.cache.path;
	},

	renderPage: function (fragmentName, reactHtml) {

		var templateHtml = this.loadFragment(fragmentName);

		return templateHtml.replace('{{reactHtml}}', reactHtml);

	}

};