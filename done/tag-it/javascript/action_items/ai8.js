 $(document).ready(function () {
    steps.load();
    steps.play();
    $('#headline2 img').hide();
    $('#headline2 h1').hide();
    $('#headline3 img').hide();
    // $('#headline3 h1').hide();
    $('#headline4 img').hide();
    $('#headline4 h1').hide();
    $('#headline5 img').hide();
    $('#headline5 h1').hide();
    $('.forward2').hide();
    $('.forward3').hide();
    $('.forward31').hide();
    $('.forward4').hide();
    $('.forward5').hide();
    $('.forward51').hide();
    $('.back2').hide();
    $('.back3').hide();
    $('.back4').hide();
    $('.back5').hide();
    $('.hint img').hide();
    $('.hint1 img').hide();
    $('.forward').click(function () {
        $('#headline1 img').fadeOut(1000);
        $('#headline1 h1').fadeOut(1000);
        $('#headline2 img').fadeIn(2000);
        $('#headline2 h1').fadeIn(2000);
        $('.step4').addClass('bounce');
        $('.forward').hide();
        $('.forward2').show();
        $('.back').hide();
        $('.back2').show();
        steps.play();
    });
    $('.forward2').click(function () {
        $('#headline2 img').fadeOut(1000);
        $('#headline2 h1').fadeOut(1000);
        $('#headline3 img').fadeIn(2000);
        $('#headline3 h1').fadeIn(2000);
        $('.step5').addClass('bounce');
        $('.forward2').hide();
        $('.forward31').show();
        $('.back2').hide();
        $('.back3').show();
        steps.play();
    });
    $('.forward31').click(function () {
        $('.forward3').show();
        $('.hint img').fadeIn(2000);
        hinty.play();
    });
    $('.forward3').click(function () {
        $('#headline3 img').fadeOut(1000);
        $('#headline3 h1').fadeOut(1000);
        $('#headline4 img').fadeIn(2000);
        $('#headline4 h1').fadeIn(2000);
        $('.step6').addClass('bounce');
        $('.forward3').hide();
        $('.forward4').show();
        $('.back3').hide();
        $('.back4').show();
        $('.hint img').hide();
        steps.play();
    });
    $('.forward4').click(function () {
        $('#headline4 img').fadeOut(1000);
        $('#headline4 h1').fadeOut(1000);
        $('#headline5 img').fadeIn(2000);
        $('#headline5 h1').fadeIn(2000);
        $('.step7').addClass('bounce');
        $('.forward4').hide();
        $('.forward51').show();
        $('.back4').hide();
        $('.back5').show();
        
        steps.play();
    });
    $('.forward51').click(function () {
        $('.forward51').hide();
        $('.forward5').show();
        $('.hint1 img').fadeIn(2000);
        hinty.play();
    });
    $('.forward5').click(function () {
        $('.back5').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai9.html");
        });
        nex.play();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai7.html");
        });
        nex.play();
    });
    $('.back2').click(function () {
        $('#headline2 img').hide();
        $('#headline1 img').show();
        $('#headline2 h1').hide();
        $('#headline1 h1').show();
        $('.forward').show();
        $('.back').show();
        $('.forward2').hide();
        $('.back2').hide();
    });
    $('.back3').click(function () {
        $('#headline3 img').hide();
        $('#headline2 img').show();
        $('#headline3 h1').hide();
        $('#headline2 h1').show();
        $('.forward2').show();
        $('.back2').show();
        $('.forward3').hide();
        $('.back3').hide();
        $('.hint img').hide();
        $('.forward31').hide();
    });
    $('.back4').click(function () {
        $('#headline4 img').hide();
        $('#headline3 img').show();
        $('#headline4 h1').hide();
        $('#headline3 h1').show();
        $('.back3').show();
        $('.forward4').hide();
        $('.back4').hide();
        $('.forward31').show();
    });
    $('.back5').click(function () {
        $('#headline5 img').hide();
        $('#headline4 img').show();
        $('#headline5 h1').hide();
        $('#headline4 h1').show();
        $('.forward4').show();
        $('.back4').show();
        $('.forward5').hide();
        $('.back5').hide();
    });
        $('.bkg-image').css('background-image','url(content/images/BKG_3.png)');

});