jQuery(function(){
(function($){

			$('.button').click(function(){
				if($('.spoiler').height() == 0){
					$('.spoiler').animate({
						'height': '60'
					}, 150, function(){
								$('.button').text('Закрыть');
							});
				}else{
					$('.spoiler').animate({
						'height': '0'
					}, 150, function(){
								$('.button').text('Открыть');
								$('.button').css('display: none');
							});
				}
			});
			
})(jQuery);
});

























