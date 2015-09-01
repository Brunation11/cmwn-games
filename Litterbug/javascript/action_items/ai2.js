$(document).ready(function () {
    $(".Clean-up").hide().delay(700).fadeIn(600);

    $(".Next").hide().delay(2000).fadeIn(1000);

    $('.Next').click(function(){
       $("#putcontenthere").load("action_items/ai3.html");
    });
});