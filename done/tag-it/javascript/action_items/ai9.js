$(document).ready(function () {
    me5.load();
    me5.play();
    $('#headline2 img').hide();
    $('#headline2 h1').hide();
    $('.forward2').hide();
    $('.back2').hide();
    $('#headline3 img').hide();
    $('#headline3 h1').hide();
    $('.forward3').hide();
    $('.back3').hide();
    $('#headline4 img').hide();
    $('#headline4 h1').hide();
    $('.forward4').hide();
    $('.back4').hide();
    $('#headline5 img').hide();
    $('#headline5 h1').hide();
    $('.forward5').hide();
    $('.back5').hide();
    $('.hint').hide();
    $('.hint2').hide();
    $('.hint3').hide();
    $('.forward21').hide();
    $('.forward31').hide();
    $('.forward41').hide();
    $('.forward').click(function () {
        $('#headline1 img').fadeOut(1000);
        $('#headline1 h1').fadeOut(1000);
        $('#headline2 img').fadeIn(2000);
        $('#headline2 h1').fadeIn(2000);
        $('.step8').addClass('bounce');
        $('.forward').hide();
        $('.forward21').show();
        $('.back').hide();
        $('.back2').show();
        steps.play();
    });
    $('.forward21').click(function () {
        $('.hint').fadeIn(2000);
        $('.forward21').hide();
        $('.forward2').show();
        hinty.play();
    });
    $('.forward2').click(function () {
        $('#headline2 img').fadeOut(1000);
        $('#headline2 h1').fadeOut(1000);
        $('#headline3 img').fadeIn(2000);
        $('#headline3 h1').fadeIn(2000);
        $('.art').addClass('bounceInRight');
        $('.forward2').hide();
        $('.forward31').show();
        $('.back2').hide();
        $('.back3').show();
        $('.hint').hide();
    });
    $('.forward3').click(function () {
        $('#headline3 img').fadeOut(1000);
        $('#headline3 h1').fadeOut(1000);
        $('#headline4 img').fadeIn(2000);
        $('#headline4 h1').fadeIn(2000);
        $('.step9').addClass('bounce');
        $('.hint1').addClass('lightSpeedIn');
        $('.forward3').hide();
        $('.forward41').show();
        $('.back3').hide();
        $('.back4').show();
        $('.hint2').hide();
    });
   $('.forward31').click(function () {
        $('.hint2').fadeIn(2000);
        $('.forward31').hide();
        $('.forward3').show();
        hinty.play();
    });
    $('.forward4').click(function () {
        $('#headline4 img').fadeOut(1000);
        $('#headline4 h1').fadeOut(1000);
        $('#headline5 img').fadeIn(2000);
        $('#headline5 h1').fadeIn(2000);
        $('.forward4').hide();
        $('.forward5').show();
        $('.back4').hide();
        $('.back5').show();
        $('.hint3').hide();
    });
    $('.forward41').click(function () {
        $('.hint3').fadeIn(2000);
        $('.forward41').hide();
        $('.forward4').show();
        hinty.play();
    });
    $('.forward5').click(function () {
        $('.forward2').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai10.html");
        });
        nex.play();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai8.html");
        });
        nex.play();
    });
    $('.back2').click(function () {
        $('#headline1 img').fadeIn(3000);
        $('#headline1 h1').fadeIn(3000);
        $('#headline2 img').fadeOut(1000);
        $('#headline2 h1').fadeOut(1000);
        $('.forward21').hide();
        $('.forward2').hide();
        $('.forward').show();
        $('.back2').hide();
        $('.back').show();
        $('.hint').hide();
    });
    $('.back3').click(function () {
        $('#headline2 img').fadeIn(3000);
        $('#headline2 h1').fadeIn(3000);
        $('#headline3 img').fadeOut(1000);
        $('#headline3 h1').fadeOut(1000);
        $('.forward3').hide();
        $('.forward31').hide();
        $('.forward21').show();
        $('.back3').hide();
        $('.back2').show();
        $('.hint2').hide();
    });
    $('.back4').click(function () {
        $('#headline3 img').fadeIn(3000);
        $('#headline3 h1').fadeIn(3000);
        $('#headline4 img').fadeOut(1000);
        $('#headline4 h1').fadeOut(1000);
        $('.forward4').hide();
        $('.forward41').hide();
        $('.forward31').show();
        $('.back4').hide();
        $('.back3').show();
        $('.hint3').hide();
    });
    $('.back5').click(function () {
        $('#headline4 img').fadeIn(3000);
        $('#headline4 h1').fadeIn(3000);
        $('#headline5 img').fadeOut(1000);
        $('#headline5 h1').fadeOut(1000);
        $('.forward5').hide();
        $('.forward4').show();
        $('.back5').hide();
        $('.back4').show();
    });
});