const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const cssmin = require('gulp-minify-css')
const autoprefixer = require('gulp-autoprefixer')
const jsonminify = require('gulp-jsonminify2')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const runSequence = require('run-sequence');
const spritesmith = require('gulp.spritesmith');
const px2rpx = require('gulp-px2rpx');

//task
gulp.task('default', function () {
    runSequence('clean', 'exchange-scss2wxss', 'watch-handle');
});
gulp.task('sprite', function () {
    runSequence('exchange-icon2sprite')
});
gulp.task('build', function () {
    runSequence('clean', 'clone-static', 'exchange-scss2wxss', 'compress-wxss', 'compress-json', 'compress-js');
});
//clean
gulp.task('clean', function () {
    return del([
        './dist/**/*',
    ]);
});
//clone
gulp.task('clone-static', function () {
    return gulp.src([
        './src/config.js',
        './src/**/*.wxml',
        './src/**/assets/imgs/*',
        '!./src/**/*.scss'
    ])
        .pipe(gulp.dest('./dist'))
});
//compress
gulp.task('compress-scss', function () {
    return gulp.src('./src/**/*.wxss')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'));
});
gulp.task('compress-json', function () {
    return gulp.src([
        './src/**/*.json',
        '!project.config.json'
    ])
        .pipe(jsonminify())
        .pipe(gulp.dest('./dist'))
});
gulp.task('compress-js', function () {
    return gulp.src([
        './src/**/*.js',
        '!./src/config.js'
    ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});
//exchange
gulp.task('exchange-scss2wxss', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer([
            'iOS >= 8',
            'Android >= 4.1'
        ]))
        .pipe(px2rpx({
            screenWidth: 750, // 设计稿屏幕, 默认750
            wxappScreenWidth: 750, // 微信小程序屏幕, 默认750
            remPrecision: 6 // 小数精度, 默认6
        }))
        .pipe(rename((path) => path.extname = '.wxss'))
        .pipe(gulp.dest('./src'));
});
gulp.task('exchange-icon2sprite', function () {
    var spriteData = gulp.src('./icon-sprite/icon/*').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: 'https://sylar-kamill.github.io/workOn/sprite.png',
        padding: 10
    }));
    return spriteData.pipe(gulp.dest('./icon-sprite/sprite'));
});
//watch
gulp.task('watch-handle', function () {
    gulp.watch('./src/**/*.scss', function () {
        runSequence('exchange-scss2wxss');
    });
});