( ( window, document ) => {
  'use strict';

  // --------------------------------------------------
  // DECLARE VARS
  // --------------------------------------------------
  // Elems.
  let containerElem = document.querySelector( '.js--blend-mode-container' );

  // State.
  let state = {
    isListening: false,
  };

  // --------------------------------------------------
  // DECLARE FUNCTIONS
  // --------------------------------------------------
  const handleMouseMove = () => {
    console.log( '/// TODO' );
  };

  // --------------------------------------------------
  // INIT
  // --------------------------------------------------
  if ( containerElem ) {
    containerElem.addEventListener( 'mouseenter', () => {
      console.log( 'ENTER' ); /// TEMP

      state.isListening = true;

      window.addEventListener( 'mousemove', handleMouseMove );
    } );

    containerElem.addEventListener( 'mouseleave', () => {
      console.log( 'LEAVE' ); /// TEMP

      state.isListening = false;

      window.removeEventListener( 'mousemove', handleMouseMove );
    } );
  }
} )( window, document );
