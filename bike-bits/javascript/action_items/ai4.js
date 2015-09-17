var complete = document.getElementById("complete3");

$(document).ready(function () {
   
     try {
            complete3.play();
        }
        catch (err) {
            //no sound - log error
        }
        

    $('#game-complete').modal('hide');

$('#close4').click(function () {
		$('#game-complete4').modal('show');
	});

$("#no4").click(function () {
                $('#game-complete4').modal('hide');
            });


    $('.next4').click(function () {
        $('.next4').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai1.html");
        });
    });
 });