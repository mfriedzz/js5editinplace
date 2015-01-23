$(document).on('ready', function() {
  
  $( 'p' ).click(function() {
  		
  		var original = $(this);
  		console.log(original);
  		var position = $(this).width();
		console.log("the width of the var position is:", position);
  		
  	 	$(this).after("<input class='newinput' type ='text' > ");
  		
  		$(this).hide(1000);
  		$('.newinput').width(position);
  		// making all elements editable

  		$(this).addClass('editable');
  		$(this).attr('contentEditable', 'true');


  		
  		
  	
  	// blur event after text is input

  		$('.newinput').change (function() {
  				var text2 = $('.newinput').val();
  				$('.newinput').blur();
  				$('.newinput').hide();
  			
  			//original(an object) has the initial paragraph clicked, and then original is passed the 
  			//input text, and then the text method is available to the original object. 	
  				original.text(text2);
  				$(original).show();

  			//	$('.newinput').append(
  				// $('p').append('text1');
  				console.log("I got here", text2 );
  		});

  		
	});

  //$(document).on('ready', function() {


  //	$(this).addClass('editable');
  // $(this).attr('contenteditable', 'true');
  //	console.log("got here editable");

 // });

  
});