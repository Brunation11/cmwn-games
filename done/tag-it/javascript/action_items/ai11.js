$(document).ready(function () {
    $('.headline2 img').hide();
    $('.picture').hide();
    $('.picture1').hide();
    $('.headline3 img').hide();
    $('.headline3 h1').hide();
    $('.forward2').hide();
    $('.forward3').hide();
    $('.back2').hide();
    $('.back3').hide();
    $('.upl-btn').click(function () {
        $('.headline2 img').fadeIn(2000);
        $('.headline2').fadeIn(2000);
        $('.picture').fadeIn(2000);
        $('.picture1').fadeIn(2000);
        $('.forward2').fadeIn(2000);
        $('.back2').fadeIn(2000);
        $('.headline1 img').hide();
        $('.headline1 h1').hide();
        $('.forward').hide();
        $('.back').hide();
        designBtn.play();
    });
    $('.upload').click(function () {
        $('.headline1 img').fadeIn(2000);
        $('.headline1 h1').fadeIn(2000);
        $('.forward').fadeIn(2000);
        $('.back').fadeIn(2000);
        $('.headline2 img').hide();
        $('.picture').fadeOut(1000);
        $('.picture1').fadeOut(1000);
        $('.headline2').hide();
        $('.forward2').hide();
        $('.back2').hide();
    });
    $('.done').click(function () {
        $('.headline3 img').fadeIn(2000);
        $('.headline3 h1').fadeIn(2000);
        $('.forward3').fadeIn(2000);
        $('.back3').fadeIn(2000);
        $('.headline2 img').hide();
        $('.headline2').hide();
        $('.headline2 h1').hide();
        $('.forward2').hide();
        $('.back2').hide();
    });
    $('.yes').click(function () {
        $('.headline2 img').fadeIn(2000);
        $('.headline2').fadeIn(2000);
        $('.headline2 h1').fadeIn(2000);
        $('.forward2').fadeIn(2000);
        $('.back2').fadeIn(2000);

        $('.headline3 img').hide();
        $('.headline3 h1').hide();
        $('.forward3').hide();
        $('.back3').hide();
    });
    $('.no').click(function () {
        $('.no').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai12.html");
        });
        nex.play();
    });
});