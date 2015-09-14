var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

background.play();

$(document).ready(function () {

    $('#title2').hide();

    $('#approve').hide();

    $('.modal-backdrop').remove();

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#next-button').click(function () {
        background.play();
        $('#title').fadeOut();
        $('#title2').show();
    });

    // $('#email').click(function () {
    //     $('#email-info').fadeOut();
    //     $('#approve').show();
    // });

    $('#no-email').click(function () {
         $("#putcontenthere").load("action_items/ai7.html");
     });

    // $('#no-app').click(function () {
    //         $("#putcontenthere").load("action_items/ai4_2.html");
    // });

    // $('#app').click(function () {
    //         $("#putcontenthere").load("action_items/ai4.html");
    // });

});