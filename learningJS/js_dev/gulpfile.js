const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", function(done) {
  // Node source
  gulp
    .src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

  // Brouser source
  gulp
    .src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
  done();
});
