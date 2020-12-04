const { src } = require("gulp");
const clean = require("gulp-clean");

const cleanTask = () => 
	src(["./dist/*/", "./dist/*.*"])
        .pipe(clean());

exports.clean = cleanTask;