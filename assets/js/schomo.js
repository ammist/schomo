$( document ).ready(function() {
 
  var scanStatus = 'waiting';
  var animationStep = '';
  var totalItems = 0;
    
   window.setTimeout(showNextItem, 200);  
    
  $( "#scan" ).click(function( event ) {
    if ( scanStatus == 'waiting' ) {
       scanStatus = 'scanning';
       $( '.status' ).addClass('loading');
    } else {
      scanStatus = 'waiting';
       $( '.status' ).removeClass('loading');
    }
  });
  
  $( ".toggle" ).click( function( e ) {
  	var toggleTarget = "." + $( e.target ).data( 'target' );
  	$( e.target ).siblings( toggleTarget ).toggle(500); 
  	$( e.target ).toggleClass('open');
  } ) ;
 
 	$( ".delay-click").click( function( e ) {
 		e.preventDefault();
 		var timeout = $( e.target ).data( 'delay' );

 		$( e.target ).addClass( 'waiting' );
 		$( e.target ).siblings( '.loader' ).toggle();
 		window.setTimeout( function () {  $( 'form' ).submit(); } , timeout);
 	});
 	
 	$( ".delay-step").click( function ( e ) {
 		e.preventDefault();
 		var timeout = $( e.target ).data( 'delay' );
		animationStep = "." +  $( e.target ).data( 'next' );
		$( e.target ).siblings( '.loader' ).toggle();
		$( e.target ).parent().slideUp(timeout, function ( ) {
			$( animationStep ).slideDown(600);
		});
 	});
 	
 	$( ".appear-in .item" ).each( function ( index ) { 
 		totalItems++;
 		$( this ).addClass('item-' + totalItems ); 
 		animationStep = 0;
 	});
 	
 	function showNextItem(){
 		if ( totalItems < 1 ) {
 			return;
 		}
 		animationStep++;
 		totalItems--;
 		$( '.item-' + animationStep ).fadeIn(500);
 		window.setTimeout(showNextItem, 500); 
 	}
 	
});