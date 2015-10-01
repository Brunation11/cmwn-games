$(document).ready(function () {
    setTimeout(function(){
        slides.load();
        slides.play();
    },2000);
    $('.vegetables').hide().delay(500).fadeIn(2000);

    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        play.load();
        play.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai5.html");
        },1000);
    });

    $(".body-copy-1").hide();
    setTimeout(function () {
        $('.body-copy-1').hide().delay(1000).fadeIn(600);
    }, 1000);
});



