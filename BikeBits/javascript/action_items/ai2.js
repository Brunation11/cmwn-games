$(document).ready(function () {
    
	$('#game-complete').modal('hide');

	$('#next-a2').click(function () {
		$('#next-a2').delay(1000).delay(1000, function () {
	   	 $("#putcontenthere").load("/action_items/ai7.html");
		});
	});
 });