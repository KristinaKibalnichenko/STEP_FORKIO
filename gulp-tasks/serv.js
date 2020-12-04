const browserSync = require("browser-sync").create();

const serv = () => {
	browserSync.init({
		server: {
			baseDir: "./", // папка, где лежит  index.html
		},
		port: 3000,
		notify: false
	});
};

exports.browsersync = browserSync;
exports.serv = serv;
