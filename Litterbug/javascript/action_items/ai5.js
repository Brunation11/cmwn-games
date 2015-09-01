$(document).ready(function () {
    $(".No").hide().delay(1000).fadeIn(100);

    $('.No').click(function(){
       $("#putcontenthere").load("action_items/ai6.html");
    });
});