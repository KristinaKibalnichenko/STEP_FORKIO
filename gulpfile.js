const { series, parallel } = require("gulp");
const { clean } = require("./gulp-tasks/clean");
const { indexes } = require("./gulp-tasks/indexs");
const { scripts } = require("./gulp-tasks/scripts");
const { styles } = require("./gulp-tasks/styles");
const { imgs } = require("./gulp-tasks/imgs");
const { serv } = require("./gulp-tasks/serv");
const { watch } = require("./gulp-tasks/watch");


// exports.default = series(clean, parallel(serv, watch, series(indexes, styles, scripts, imgs)));
exports.dev = series(clean, parallel(serv, watch, series(indexes, styles, scripts, imgs)));