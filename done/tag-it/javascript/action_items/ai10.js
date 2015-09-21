$(document).ready(function () {
    $('.headline2 img').hide();
    $('.headline2 ul').hide();
    $('.forward2').hide();
    $('.back2').hide();
    $('.forward').click(function () {
        $('.headline2 img').fadeIn(2000);
        $('.headline2 ul').fadeIn(2000);
        $('.forward2').fadeIn(2000);
        $('.back2').fadeIn(2000);
        $('.tips').addClass('bounce');
        $('.headline1 img').hide();
        $('.headline1 h1').hide();
        $('.forward').hide();
        $('.back').hide();
        steps.play();
    });
    $('.back2').click(function () {
        $('.headline1 img').fadeIn(2000);
        $('.headline1 h1').fadeIn(2000);
        $('.forward').fadeIn(2000);
        $('.back').fadeIn(2000);

        $('.headline2 img').hide();
        $('.headline2 ul').hide();
        $('.forward2').hide();
        $('.back2').hide();
    });
    $('.forward2').click(function () {
        $('.forward2').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai12.html");
        });
        nex.play();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai9.html");
        });
        nex.play();
    });
        $('.bkg-image').css('background-image','url(content/images/BKG_4.png)');

});            