( function() {
	'use strict';

	describe( 'vui-focus', function() {

		var node;

		beforeEach( function () {

			jasmine.addMatchers( vui.jasmine.dom.matchers );

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

		it( 'should have outline width 0px', function() {

			var style = window.getComputedStyle( node, null );
			expect( style.getPropertyValue( 'outline-width' ) ).toBe( '0px' );

		} );
		
		it( 'should have border-color', function() {

			var style = window.getComputedStyle( node, null );
			expect( style.getPropertyValue( 'border-top-color' ) ).toBe( 'rgb(148, 204, 218)' );
			expect( style.getPropertyValue( 'border-right-color' ) ).toBe( 'rgb(148, 204, 218)' );
			expect( style.getPropertyValue( 'border-bottom-color' ) ).toBe( 'rgb(148, 204, 218)' );
			expect( style.getPropertyValue( 'border-left-color' ) ).toBe( 'rgb(148, 204, 218)' );

		} );

	} );

} )();
