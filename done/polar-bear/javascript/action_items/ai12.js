$(document).ready(function () {

    completeFlip(24314);

    $('#game-close').modal('hide');

    $('#close').click(function () {
        $('#game-close').modal('show');
        // $('.header_Bkg').hide();
        // $('.Pop_up').hide();
        // $('.Flip').hide();
        // $('.Next-Ai').hide();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        // $('.header_Bkg').hide().fadeIn(600);
        // $('.Pop_up').hide().fadeIn(600);
        // $('.Flip').hide().fadeIn(600);
        // $('.Next-Ai').hide().fadeIn(600);
    });

});