$(function () { 

    // DOM ready shorthand

    $('#game-close').modal('hide');

    //Quit screen
    $('#close').click(function () {
        $('#game-close').modal('show');
        $('.header_Bkg').hide();
        $('.Pop_up').hide();
        $('.Warm').hide();
        $('.Cold').hide();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        $('.header_Bkg').hide().fadeIn(600);
        $('.Pop_up').hide().fadeIn(600);
        $('.Warm').hide().fadeIn(600);
        $('.Cold').hide().fadeIn(600);
    });

    $("#left").click(function () {
        correct.load();
        correct.play();
        window.setTimeout(function () {
            $("#putcontenthere").load("action_items/ai11.html");
        }, 2500);
    });

    $("#right").click(function () {
        wrong.load();
        wrong.play();
    });

});