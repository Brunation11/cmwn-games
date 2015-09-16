$(document).ready(function () {
    $('.vegetables').hide().delay(500).fadeIn(2000);

    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        $("#putcontenthere").load("action_items/ai5.html");
    });

    $(".body-copy").hide();
    setTimeout(function () {
        $('.body-copy').hide().delay(1000).fadeIn(600);
    }, 1000);
});



