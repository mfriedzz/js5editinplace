$(document).on('ready', function() {
  
  $( 'p' ).click(function() {
  		var position = $(this).width();
		console.log("the width of the var position is:", position);
  		
  	 $(this).after("<input class='newinput' type ='text' > ");
  		
  		$(this).hide(1000);
  		$('.newinput').width(position);
  		
  	
  	// blur event after text is input

  		$('.newinput').change (function() {
  		var text1 = $('.newinput').val();
  		$('.newinput').blur();
  		$('.newinput').hide();
  		$('p').append('text1');
  			console.log("I got here", text1 );
  		});

  		
});

  
});