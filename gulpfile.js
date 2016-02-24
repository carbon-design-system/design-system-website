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
				'src/assets/fabricator/scripts/prism.js',
				'src/assets/fabricator/scripts/fabricator.js'
			],
			vendor: [
				'src/assets/fabricator/scripts/prism.js'
			],
			toolkit: './src/assets/toolkit/scripts/toolkit.js'
		},
		styles: {
			fabricator: 'src/assets/fabricator/styles/fabricator.scss',
			toolkit: 'src/assets/toolkit/styles/toolkit.scss',
            bluemix: 'src/assets/fabricator/styles/bluemix-components/styles.scss'
		},
		images: 'src/assets/toolkit/images/**/*',
		views: 'src/toolkit/views/*.html',
        bluemix: {
            compMarkdown: 'src/assets/fabricator/styles/bluemix-components/components/**/**/*.md',
            baseMarkdown: 'src/assets/fabricator/styles/bluemix-components/base-elements/**/**/*.md'
        }
	},
	dest: 'dist'
};


// clean
gulp.task('clean', function (cb) {
	del(['**'], { ignore: 'demo/**', cwd: config.dest }, cb);
});

// styles
gulp.task('styles:fabricator', function () {
	return gulp.src(config.src.styles.fabricator)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(rename('f.css'))
		.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:toolkit', function () {
	return gulp.src(config.src.styles.toolkit)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(gulp.dest(config.dest + '/assets/toolkit/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:bluemix', function() {
    return gulp.src(config.src.styles.bluemix)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(gulp.dest(config.dest + '/assets/toolkit/styles'))
        .pipe(gulpif(config.dev, reload({stream:true})));
})

gulp.task('styles', ['styles:fabricator', 'styles:toolkit', 'styles:bluemix']);


// scripts
gulp.task('scripts:fabricator', function () {
	return gulp.src(config.src.scripts.fabricator)
		.pipe(concat('f.js'))
		.pipe(gulpif(!config.dev, uglify()))
		.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts'));
});

gulp.task('scripts:toolkit', function() {

	var toolkit = function() {
		return browserify(config.src.scripts.toolkit).bundle()
			.on('error', function(error) {
				gutil.log(gutil.colors.red(error));
				this.emit('end');
			})
			.pipe(source('toolkit.js'));
	};

	var vendor = function() {
		return gulp.src(config.src.scripts.vendor)
			.pipe(concat('vendor.js'));
	};

	return streamqueue({
			objectMode: true
		}, vendor(), toolkit())
		.pipe(streamify(concat('toolkit.js')))
		.pipe(gulpif(!config.dev, streamify(uglify())))
		.pipe(gulp.dest(config.dest + '/assets/toolkit/scripts'));

});

gulp.task('scripts', ['scripts:fabricator', 'scripts:toolkit']);


// images
gulp.task('images', ['favicon'], function () {
	return gulp.src(config.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest + '/assets/toolkit/images'));
});

gulp.task('favicon', function () {
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.dest));
});

// copy

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
gulp.task('serve', function () {

	var reload = browserSync.reload;

	browserSync({
		server: {
			baseDir: config.dest
		},
		notify: false,
		logPrefix: 'BLUEMIX DESIGN SYSTEM'
	});

	gulp.watch('src/materials/**/**/**/*.{html,md,json,yml}', ['assemble']).on('change', reload);
	gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator']);
	gulp.watch('src/assets/toolkit/styles/**/*.scss', ['styles:toolkit']);
	gulp.watch('src/assets/fabricator/scripts/**/*.js', ['scripts:fabricator']).on('change', reload);
	gulp.watch('src/assets/toolkit/scripts/**/*.js', ['scripts:toolkit']).on('change', reload);
	gulp.watch(config.src.images, ['images']).on('change', reload);
});


// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
        'markdown',
		'styles',
		'scripts',
		'images',
		'assemble'
	];

	// run build
	runSequence(tasks, function () {
		if (config.dev) {
			gulp.start('serve');
		}
	});

});
