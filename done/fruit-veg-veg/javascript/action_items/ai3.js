$(document).ready(function () {
    setTimeout(function(){
        slides.load();
        slides.play();
    },2000);

    $('.header-fruit').hide().delay(500).fadeIn(2000);

    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        play.load();
        play.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai4.html");
        },1000);
    });

    $(".header-text").hide();
        setTimeout(function () {
    $('.header-text').hide().delay(1000).fadeIn(600);
},1000);
});
