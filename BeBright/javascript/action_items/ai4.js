$(document).ready(function () {

    $(".upload-btn").hide().delay(1000).fadeIn(600);

    $(".upload-btn ").click(function(){

        $("#putcontenthere").load("action_items/ai5.html");
    });

});