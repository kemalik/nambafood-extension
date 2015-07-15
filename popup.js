jQuery(document).ready(function($) {
	var bgPage = chrome.extension.getBackgroundPage();
 	$('#filter').click(function(){
 		var min = $('#min-price').val();
 		var max = $('#max-price').val();
 		var hide = $('#hide_other').is(':checked');
 		var combine = $('#combine').is(':checked');
 		chrome.tabs.executeScript(null, {code:"filter("+min+","+max+","+hide+","+combine+");"});
	});
});