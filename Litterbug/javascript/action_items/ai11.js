$(document).ready(function () {

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_1.png)');

    $(".info2").hide();

    $(".Accept").hide();
    $(".Message-window").hide().delay(900).fadeIn(80);

    $(".logo").hide().delay(1000).fadeIn(80);

    $(".info").hide().delay(1600).fadeIn(80);
    setTimeout(function () {
        $(".header").addClass("zoomOut");

        $(".info").addClass("fadeOut");

        $(".info2").hide().delay(1000).fadeIn(500);

        $(".Accept").hide().delay(1700).fadeIn(500);

        $(".info2").addClass("fadeInDown");

        $('.Message-window').animate({
            top: '-=60'
        }, 2000);

        $('.Eco-symbol-1').animate({
            top: '-=60'
        }, 2000);
    }, 4000);

    $(".Accept").click(function(){

        $("#putcontenthere").load("action_items/ai12.html");
    });
});