const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const group_media_queries = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const styles = () =>
  src("./src/styles/style.scss")
    .pipe(
      sass(
        // {
        // 	includePaths: require("node-normalize-scss").includePaths
        // },
        {
          outputStyle: "expanded",
        }
      ).on("error", sass.logError)
    )
    .pipe(group_media_queries())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true,
      })
    )
    .pipe(dest("./dist/css/"))
    .pipe(cleanCSS())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest("./dist/css/"))
    .pipe(browsersync.reload({ stream: true }));

exports.styles = styles;
