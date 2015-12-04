$(document).ready(function () {
    setTimeout(function(){
        slides.load();
        slides.play();
    },2000);
    $('.main-header').hide().delay(500).fadeIn(2000);

    $(".Veggies").hide();

    $(".Fruit").hide();

    $('.Next').hide();

    $('.Next').click(function(){
        play.load();
        play.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai6.html");
        },1000);
    });

    setTimeout(function () {
        $(".Veggies").hide().delay(1000).fadeIn(600);
        $(".Fruit").hide().delay(1000).fadeIn(600);
        $('.Next').hide().delay(2000).fadeIn(2000);
    },1000);
});