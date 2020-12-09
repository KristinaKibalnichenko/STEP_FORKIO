const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const imgs = () =>
    src("./src/img/**/*.{jpg,png,svg,gif,ico,webp}")
        .pipe(webp({
            quality: 70
        }))
        // .pipe(dest("./dist/img/"))
        // .pipe(src("./src/img/**/*.{jpg,png,svg,gif,ico,webp}"))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 4,
            svgoPlugins: [{ removeViewBox: false }]
        }))
        .pipe(dest("./dist/img/"))
        .pipe(browsersync.reload({ stream: true }));

exports.imgs = imgs;
