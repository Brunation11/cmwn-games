$(document).ready(function () {

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

	$(".Next1").click(function () {
		$("#putcontenthere").load("action_items/ai7.html");
        
    });

    $(".upload-btn").hide().delay(1000).fadeIn(600);

    $(".upload-btn ").click(function(){

        $("#putcontenthere").load("action_items/ai7.html");
    });

});