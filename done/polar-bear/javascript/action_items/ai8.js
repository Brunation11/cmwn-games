$(document).ready(function () { // DOM ready shorthand

    $('#game-close').modal('hide');

    //Quit screen

    $('#close').click(function () {
        $('#game-close').modal('show');
        $('.header_Bkg').hide();
        $('.Pop_up').hide();
        $('.Left_hand').hide();
        $('.Right_hand').hide();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        $('.header_Bkg').hide().fadeIn(600);
        $('.Pop_up').hide().fadeIn(600);
        $('.Left_hand').hide().fadeIn(600);
        $('.Right_hand').hide().fadeIn(600);
    });

    $("#left").click(function () {
        wrong.load();
        wrong.play();
    });

    $("#right").click(function () {
        correct.load();
        correct.play();
        window.setTimeout(function () {
            $("#putcontenthere").load("action_items/ai9.html");
        }, 2500);
    });

});