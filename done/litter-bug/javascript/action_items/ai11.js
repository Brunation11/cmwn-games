$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".info2").hide();

    $(".accept").hide();
    $(".in-window").hide().delay(900).fadeIn(80);

    $(".logo").hide().delay(1000).fadeIn(80);

    $(".info").hide().delay(1600).fadeIn(80);
    setTimeout(function () {
        $(".header").addClass("zoomOut");

        $(".info").addClass("fadeOut");

        $(".info2").hide().delay(1000).fadeIn(500);

        $(".accept").hide().delay(1700).fadeIn(500);

        $(".info2").addClass("fadeInDown");

        $('.in-window').animate({
            top: '-=60'
        }, 2000);

        $('.eco-symbol-1').animate({
            top: '-=60'
        }, 2000);
    }, 4000);

    $(".accept").click(function(){
        $("#putcontenthere").load("action_items/ai12.html");
    });

});