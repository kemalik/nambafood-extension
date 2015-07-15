jQuery(document).ready(function($) {
	$('.price').each(function(){
		if(parseInt($(this).text())<200){
			$(this).parents('form').css('background', 'green')
		}
	})
});
