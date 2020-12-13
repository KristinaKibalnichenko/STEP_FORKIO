const browserSync = require("browser-sync").create();

const serv = () => {
	browserSync.init({
		server: {
			baseDir: "./", 
		},
		// browser: "firefox", 
		// browser: "chrome",
	});
};

exports.browsersync = browserSync;
exports.serv = serv;
