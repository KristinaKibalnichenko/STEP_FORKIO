const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const fileinclude = require("gulp-file-include");
 
const indexes = () =>
    src("./src/index.html")
        .pipe(fileinclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(dest('./'))
        .pipe(browsersync.reload({ stream: true }));

exports.indexes = indexes;