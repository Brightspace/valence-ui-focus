( function() {
	'use strict';

	describe( 'vui-focus', function() {

		var node;

		beforeEach( function () {

			jasmine.addMatchers( d2l.jasmine.matchers );

			node = document.body.appendChild( document.createElement( 'div' ) );
			node.className = 'vui-outline-force';

		} );

		afterEach( function() {

			document.body.removeChild( node );

		} );

		it( 'defines a "vui-outline:focus" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-outline:focus' );
		} );

		it( 'defines a "vui-outline-force" selector', function() {
			expect( document ).toHaveCssSelector( '.vui-outline-force' );
		} );

		it( 'should have default outline when not focused', function() {

			var style = window.getComputedStyle( node, null );
			expect( style.getPropertyValue( 'outline-color' ) ).toBe( 'rgb(148, 204, 218)' );

		} );

	} );

} )();