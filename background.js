var max_price = 0;
var glob_hide = false;
function filter(min, max, hide, combine){
	var count = 0;
	max_price = max;
	glob_hide = hide;
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
	var results = 'Results: ' + count + '<br>Filter: ' + min +'-' + max + ' som'
	if($('#food_result').length>0)
		$('#food_result').html(results)
	else
		$('body').prepend('<h3 id="food_result" style="position: fixed">' + results + '</h3>');
}


$(document).ready(function(){
	filter(0, 160, false, false)
})

$('#cart').bind("DOMSubtreeModified",function(){
	price_ar = $('.cart-left .price').text().split(" ");
	cart_total = parseInt(price_ar[price_ar.length - 2]);
	remain = max_price - cart_total;
	if(remain > 0){
		if(confirm('Want to filter for ' + remain + 'som?')){
			filter(0, remain, glob_hide, false)
		}
	}
});