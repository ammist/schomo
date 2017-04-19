$( document ).ready(function() {
 
  var scanStatus = 'waiting';
    
  $( "#scan" ).click(function( event ) {
    if ( scanStatus == 'waiting' ) {
       scanStatus = 'scanning';
       $( '.status' ).addClass('loading');
    } else {
      scanStatus = 'waiting';
       $( '.status' ).removeClass('loading');
    }
  });
 
});