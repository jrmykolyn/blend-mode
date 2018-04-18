// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const PathMap = require( 'sfco-path-map' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const PATHS = new PathMap( {
	root: '.',
	// Assets
	assetsSrc: '{{root}}/assets/src',
	assetsDest: '{{root}}/assets/dist',
	// Styles
	stylesSrc: '{{assetsSrc}}/styles',
	stylesDest: '{{assetsDest}}/css',
} );

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
/**
 * Wrapper around any/all tasks to be executed when `gulp` is run.
 */
gulp.task( 'default', [ 'styles' ], function() {
	console.log( 'INSIDE TASK: `default`' );
} );

/**
 * Wrapper around any/all style-related tasks.
 */
gulp.task( 'styles', function() {
	gulp.src( `${PATHS.stylesSrc}/styles.scss` )
		.pipe( sass( {
			outputStyle: 'expanded',
		} ) )
		.pipe( gulp.dest( PATHS.stylesDest ) );
} );
