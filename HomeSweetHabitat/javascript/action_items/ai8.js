$(window).load(function () {
    $('.flip').hide();
});
$(document).ready(function () {
    flip.load();
    flip.play();
    $('.close-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('.no').click(function () {
        $('#quit-game').modal('hide');

    });

    $('.flip').hide().delay(600).fadeIn(1000);
});