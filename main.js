$(document).on('ready', function() {
  
  $( 'p' ).click(function() {
  		var position = $(this).width();
		console.log("the width of the var position is:", position);
  		
  		var text = $(this).after("<input class='newinput' type ='text' > ");
  		$(this).hide(1000);
  		$('.newinput').width(position);
  	
  	// blur event after text is input

  		$('.newinput').change (function() {
  			
  			$(this).blur('text');
  		//	$('.newinput').hide();
  			$(this).text(text);
  			console.log("I got here" ,text);
  		});

  		
});

  
});