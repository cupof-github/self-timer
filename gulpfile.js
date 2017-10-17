const gulp = require("gulp");

const minify = require("gulp-minify");
const concat = require("gulp-concat");
const umd = require("gulp-umd");

/*----- for es5 -------*/

/**
 * [ concate files ]
 */
gulp.task("es5-build", () => {
  let source = "./src/";

  // source files
  let files = [
    "header",
    "utils/helpers",
    "utils/messages",
    "utils/formats",
    "utils/info",
    "methods/es5/on",
    "methods/es5/at",
    "methods/es5/in",
    "methods/es5/is",
    "methods/es5/timer",
    "utils/check"
  ];

  // add source path in array
  let src = files.map(res => {
    return source + res + ".js";
  });

  gulp
    .src(src)
    .pipe(concat("selftimer.js"))
    .pipe(gulp.dest(source + "build/es5/"));
});

/**
 * [ build as umd for es5]
 */
gulp.task("es5-umd", () => {
  let build_path = "./src/build/es5/selftimer.js";

  gulp
    .src(build_path)
    .pipe(
      umd({
        exports: function(file) {
          return "SelfTimer";
        },
        namespace: function(file) {
          return "SelfTimer";
        }
      })
    )
    .pipe(gulp.dest("./src/build/es5/intermediate"));
});

/**
 * [ minify and publish to dist folder for es5]
 */
gulp.task("es5-minify", () => {
  gulp
    .src("src/build/es5/intermediate/selftimer.js")
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".min.js"
        },
        exclude: ["tasks"],
        ignoreFiles: [".combo.js", "-min.js"]
      })
    )
    .pipe(gulp.dest("dist"));
});

/*----- for promise -------*/

/**
 * [ concate files ]
 * @type {String}
 */
gulp.task("promise-build", () => {
  let source = "./src/";

  // source files
  let files = function(path) {
    return [
      "header",
      "utils/helpers",
      "utils/messages",
      "utils/formats",
      "utils/info",
      "methods/" + path + "/on",
      "methods/" + path + "/at",
      "methods/" + path + "/in",
      "methods/" + path + "/is",
      "methods/" + path + "/timer"
    ];
  };

  // add source path in array
  let src_promise = files("promise").map(res => {
    return source + res + ".js";
  });

  gulp
    .src(src_promise)
    .pipe(concat("selftimer.js"))
    .pipe(gulp.dest(source + "build/promise/"));
});

gulp.task("promise-umd", () => {
  /*
   * build as umd
   */
  let build_path = "./src/build/promise/selftimer.js";

  gulp
    .src(build_path)
    .pipe(
      umd({
        exports: function(file) {
          return "SelfTimer";
        },
        namespace: function(file) {
          return "SelfTimer";
        }
      })
    )
    .pipe(gulp.dest("./src/build/promise/intermediate"));
});

gulp.task("promise-attach", () => {
  let source = "./src/";

  let src = [
    "./node_modules/promise-polyfill/promise.min.js",
    "src/build/promise/intermediate/selftimer.js"
  ];

  gulp
    .src(src)
    .pipe(concat("selftimer.js"))
    .pipe(gulp.dest(source + "build/promise/intermediate2/"));
});

gulp.task("promise-polyfill-minify", () => {
  /*
   * minify
   */
  gulp
    .src("src/build/promise/intermediate2/selftimer.js")
    .pipe(
      minify({
        ext: {
          src: "-promise-polyfill.js",
          min: "-promise-polyfill.min.js"
        },
        exclude: ["tasks"],
        ignoreFiles: [".combo.js", "-min.js"]
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("promise-minify", () => {
  /*
   * minify
   */
  gulp
    .src("src/build/promise/intermediate/selftimer.js")
    .pipe(
      minify({
        ext: {
          src: "-promise.js",
          min: "-promise.min.js"
        },
        exclude: ["tasks"],
        ignoreFiles: [".combo.js", "-min.js"]
      })
    )
    .pipe(gulp.dest("dist"));
});
