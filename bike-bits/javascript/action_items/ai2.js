$(document).ready(function () {
    
	$('#game-complete').modal('hide');


	$('#close1').click(function () {
		$('#game-complete').modal('show');
	});

$("#no").click(function () {
                $('#game-complete').modal('hide');
            });

	$('#next-a2').click(function () {
		$('#next-a2').delay(1000).delay(1000, function () {
	   	 $("#putcontenthere").load("action_items/ai7.html");
		});
	});
 });