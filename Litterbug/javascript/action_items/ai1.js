$(document).ready(function () {

    $(".eco-logo").hide().delay(1000).fadeIn(500);

    $(".Next").hide().delay(2000).fadeIn(1000);

    $('.Next').click(function(){
       $("#putcontenthere").load("action_items/ai2.html");
    });
});