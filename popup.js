jQuery(document).ready(function($) {
	$('.price').each(function(){
		var food = $(this).parents('.bordered-block');
		var food_price = parseFloat($(this).text().replace(',',''))
		if(food_price<100){
			food.css('background', 'lightgreen')
		}
	})
});
