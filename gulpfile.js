const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const config = {
	'styles': {
	'src': './src/*.sass',
	'dist': './public'
	},
	'scripts': {
	'src': './src/*.js',
	'dist': './public'
	}
}

function clean(cb) {
	console.log( 'clean()' );
	cb();
}

function build(cb) {
	console.log( 'build()' );
	styles();
	scripts();
	cb();
}

function watchFiles() {
	gulp.watch( config.styles.src, styles );
	gulp.watch( config.scripts.src, scripts );
}

function styles() {
	return gulp
		.src( config.styles.src )
		.pipe( sass() )
		.on( 'error', sass.logError )
		.pipe( gulp.dest( config.styles.dist ) )
}

function scripts() {
	return gulp
		.src( config.scripts.src )
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe( gulp.dest( config.scripts.dist ) )
}

exports.build = build;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = gulp.series( clean, build );