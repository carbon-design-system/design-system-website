'use strict';

// modules
var assemble = require('fabricator-assemble');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var markdown = require('gulp-markdown');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var streamqueue = require('streamqueue');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');


// configuration
var config = {
	dev: gutil.env.dev,
	src: {
		scripts: {
			fabricator: [
				'src/assets/bluemix-design-system/scripts/fabricator.js'
			],
			vendor: [
				'src/assets/bluemix-design-system/scripts/prism.js'
			]
        },
		styles: {
			main: 'src/assets/bluemix-design-system/styles/main.scss',
            bluemixComponents: 'bower_components/bluemix-components/styles.scss'
		},
		views: 'src/views/*.html',
        bluemix: {
            compMarkdown: 'bower_components/bluemix-components/components/**/**/*.md',
            baseMarkdown: 'bower_components/bluemix-components/base-elements/**/**/*.md'
        }
	},
	dest: 'dist'
};


// clean
gulp.task('clean', function (cb) {
	del(['**'], { ignore: 'demo/**', cwd: config.dest }, cb);
});

// styles
gulp.task('styles:main', function () {
	return gulp.src(config.src.styles.main)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(rename('main.css'))
		.pipe(gulp.dest(config.dest + '/assets/bluemix-design-system/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:bluemixComponents', function() {
    return gulp.src(config.src.styles.bluemixComponents)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(gulp.dest(config.dest + '/assets/bluemix-design-system/styles'))
        .pipe(gulpif(config.dev, reload({stream:true})));
})

gulp.task('styles', ['styles:main', 'styles:bluemixComponents']);

// scripts
gulp.task('scripts', function () {
	return gulp.src(config.src.scripts.fabricator)
		.pipe(concat('main.js'))
		.pipe(gulpif(!config.dev, uglify()))
		.pipe(gulp.dest(config.dest + '/assets/bluemix-design-system/scripts'));
});

// markdown to html

gulp.task('markdown:components', function() {
    return gulp.src(config.src.bluemix.compMarkdown)
    .pipe(rename({dirname: ''}))
    .pipe(markdown())
    .pipe(gulp.dest('src/materials/components/'));
});

gulp.task('markdown:base-elements', function() {
    return gulp.src(config.src.bluemix.baseMarkdown)
    .pipe(rename({dirname: ''}))
    .pipe(markdown())
    .pipe(gulp.dest('src/materials/base-elements/'));
});

gulp.task('markdown', ['markdown:components', 'markdown:base-elements']);

// assemble
gulp.task('assemble', function(done) {
	assemble({
		helpers: {
			markdown: function (str, opts) {
				if (typeof str === 'object') {
					opts = str;
					str = null;
				}
				str = str || opts.fn(this);
				return require('markdown-it')()
					.use(require('markdown-it-headinganchor'), {
						linkify: true,
						anchorClass: '',
						slugify: function(str) {
							return require('string')(str).slugify().s;
						}
					})
					.render(str);
			},
			decode: function (val) {
				return decodeURIComponent(val);
			},
			raw: function (options) {
				return options.fn();
			}
		}
	});
	done();
});


// server
gulp.task('serve', ['default'], function () {

	var reload = browserSync.reload;

	browserSync({
		server: {
			baseDir: config.dest
		},
		notify: false,
		logPrefix: 'BLUEMIX DESIGN SYSTEM'
	});

	gulp.watch('src/materials/**/**/**/*.{html,md,json,yml}', ['assemble']).on('change', reload);
	gulp.watch('src/assets/bluemix-design-system/styles/**/*.scss', ['styles:main']).on('change', reload);
	gulp.watch('src/assets/bluemix-design-system/scripts/**/*.js', ['scripts']).on('change', reload);
	gulp.watch(config.src.images, ['images']).on('change', reload);
});


// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
        'markdown',
		'styles',
		'scripts',
		'assemble'
	];

	// run build
	runSequence(tasks, function () {
		if (config.dev) {
			gulp.start('serve');
		}
	});

});
