const { watch } = require("gulp");
const { indexes } = require("./indexs");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { imgs } = require("./imgs");
const { browsersync } = require("./serv");

const watchTask = () => {
	watch("./index.html", (cb) => {
		browsersync.reload();
		cb();
	});
	watch("./src/**/*.html", indexes);
	watch("./src/styles/**/*.scss", styles);
	watch("./src/js/**/*.js", scripts);
	watch("./src/img/**/*.{jpg,png,svg,gif,ico,webp}", imgs);
};

exports.watch = watchTask;
