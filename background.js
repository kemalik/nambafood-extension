function filter(min, max, hide, combine){
	$('.price').each(function(){
		var food = $(this).parents('.bordered-block');
		var food_price = parseFloat($(this).text().replace(',',''))
		food.css('background', '');
		food.show();
		if(food_price>=min && food_price<=max){
			food.css('background', 'lightgreen')
		}
		else if(hide) {
			food.hide();
		}
	})
}

$(document).ready(function(){
	filter(0, 160, false, false)
})