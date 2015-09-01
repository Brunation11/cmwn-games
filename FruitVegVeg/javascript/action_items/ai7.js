$(document).ready(function () {
    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        $("#putcontenthere").load("action_items/ai8.html");
    });

    $(".body-copy").hide();
    setTimeout(function () {
        $('.body-copy').hide().delay(100).fadeIn(600);
    }, 1000);

});