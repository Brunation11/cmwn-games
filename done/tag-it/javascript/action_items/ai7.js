$(document).ready(function () {           
    // $('#headline2 img').hide();
    // $('#headline2 h1').hide();
    $('.forward2').hide();
    $('.back2').hide();
    // $('.hint img').hide();
    $('.forward').hide();
    $('.forward1').click(function () {
        $('.hint img').fadeIn(3000);
        $('.forward').show();
        $('.hint').addClass('fadIn')
        hinty.play();
    });
    $('.forward').click(function () {
        $('#headline1 img').fadeOut(1000);
        $('#headline1 ul').fadeOut(1000);
        $('.here').addClass('bounce');
        $('#headline2 img').fadeIn(2000);
        $('#headline2 h1').fadeIn(2000);
        $('.forward').hide();
        $('.forward2').show();
        $('.back').hide();
        $('.back2').show();
        me5.play();
    });
    $('.forward2').click(function () {
        $('.forward2').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai8.html");
        });
        nex.play();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai6.html");
        });
        nex.play();
    });
    $('.back2').click(function () {
        $('#headline1 img').fadeIn(3000);
        $('#headline1 ul').fadeIn(3000);
        $('#headline2 img').fadeOut(1000);
        $('#headline2 h1').fadeOut(1000);
        $('.forward2').hide();
        $('.forward').show();
        $('.back2').hide();
        $('.back').show();
    });
});            