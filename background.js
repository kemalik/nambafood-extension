function filter(min, max, hide, combine){
	var count = 0;
	$('.price').each(function(){
		var food = $(this).parents('.bordered-block');
		var food_price = parseFloat($(this).text().replace(',',''));
		food.css('background', '');
		food.show();
		if(food_price>=min && food_price<=max){
			food.css('background', 'lightgreen')
			count++;
		}
		else if(hide) {
			food.hide();
		}
	})
	if($('#food_result').length>0)
		$('#food_result').text('Results: ' + count)
	else
		$('body').prepend('<h1 id="food_result" style="position: fixed">Results: ' + count + '</h1>');
}


$(document).ready(function(){
	filter(0, 160, false, false)
})