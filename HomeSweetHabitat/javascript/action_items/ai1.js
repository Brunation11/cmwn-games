$(document).ready(function () {

    $ ('.bkg-image').css('background-image','url(/content/images/background/bkg_1.png)');

    background.load();
    background.play();
    $('.close-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('.no').click(function () {
        $('#quit-game').modal('hide');

    });
});