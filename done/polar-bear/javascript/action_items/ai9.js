$(document).ready(function () {

    $('#game-close').modal('hide');

    $('#close').click(function () {
        $('#game-close').modal('show');
        $('.header_Bkg').hide();
        $('.Pop_up').hide();
        $('.bowl').hide();
        $('.bag').hide();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        $('.header_Bkg').hide().fadeIn(600);
        $('.Pop_up').hide().fadeIn(600);
        $('.bowl').hide().fadeIn(600);
        $('.bag').hide().fadeIn(600);
    });
});

$(function () { // DOM ready shorthand

    $("#left").click(function () {
        correct.load();
        correct.play();
        window.setTimeout(function () {
            $("#putcontenthere").load("action_items/ai10.html");
        }, 2500);
    });

    $("#right").click(function () {
        wrong.load();
        wrong.play();
    });

});