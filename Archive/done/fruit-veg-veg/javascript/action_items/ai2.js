$(document).ready(function () {
    slide3.load();
    slide3.play();
    $('.Header-veg').hide().delay(1000).fadeIn(1000);

    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        play.load();
        play.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai3.html");
        },1000);
    });
});