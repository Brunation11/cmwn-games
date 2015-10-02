$(document).ready(function () {
    steps.load();
    steps.play();
    $('#headline2 img').hide();
    $('.forward2').hide();
    $('.back2').hide();
    $('#headline1 img').hide();
    $('.forward').hide();
    $('.forward1').click(function () {
        $('#headline1 img').fadeIn(3000);
        $('.forward').show();
        $('.hint').addClass('fadIn')
        hinty.play();
    });
    $('.forward').click(function () {
        $('#headline1 img').fadeOut(3000);
        $('#headline2 img').fadeIn(2000);
        $('.forward').hide();
        $('.forward2').show();
        $('.back').hide();
        $('.back2').show();
        hinty.play();
    });
    $('.forward2').click(function () {
        $('.forward2').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai7.html");
        });
        try {
           click.play();
        }
        catch (err) {
           //no sound - log error
        }
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai5.html");
        });
        try {
           click.play();
        }
        catch (err) {
           //no sound - log error
        }
    });
    $('.back2').click(function () {
        $('#headline2 img').hide();
        $('#headline1 img').show();
        $('.forward2').hide();
        $('.forward').show();
        $('.back2').hide();
        $('.back').show();
    });
});    