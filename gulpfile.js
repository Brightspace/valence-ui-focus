var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	del([ 'focus.css' ], cb);
} );

gulp.task( 'css', function () {
	return vui.makeCss( 'focus.css.less', 'focus.css' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

gulp.task( 'test', function () {
	return vui.test( {
		files: [
			'test/unit/**/*Spec.js',
			'focus.css'
		]
	} ) ;
} );
