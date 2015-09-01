$(document).ready(function () {
    $(".Next").hide().delay(1000).fadeIn(1000);

    $('.Next').click(function(){
       $("#putcontenthere").load("action_items/ai8.html");
    });
});