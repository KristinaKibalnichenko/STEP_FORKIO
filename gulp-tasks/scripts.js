const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const fileinclude = require("gulp-file-include");
const rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify-es').default;

const scripts = () =>
	src("./src/js/script.js")
		.pipe(sourcemaps.init())
		.pipe(fileinclude({
			prefix: "@@",
			basepath: "@file"
		}))
		.pipe(dest("./dist/js/"))
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(sourcemaps.write("./maps"))
		.pipe(dest("./dist/js/"))
		.pipe(browsersync.reload({ stream: true }));

exports.scripts = scripts;
