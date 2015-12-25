//
/* jQuery(function(){ */
(function($){

			jQuery('.button').click(function(){
				jQuery('.spoiler').animate({
					'height': '0'
				}, 150, function(){
							jQuery('.button').text('Развернуть');
							jQuery('.spoiler').css('display: none');
						});				
			});
			
})(jQuery);
/* }); */

























