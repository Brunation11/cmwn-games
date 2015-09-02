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

    $(".play-Btn").click(functions (){
        $("#putcontenthere").load("action_items/ai2.html");
    });
});