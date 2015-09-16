var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

background.play();

head.play();

$(document).ready(function () {

    $("#close").hide();

    $("#next-button2").hide();

    $('#next').click(function () {
        $('.modal-backdrop').remove();
        click.load();
        click.play();
        $("#title").fadeOut(1000);
        $("#close").fadeIn(1000);
        $("#video-modal").modal('show');
        $("#next-button2").fadeIn(10000);
    });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

   $('#next-button2').click(function () {
        $("#putcontenthere").load("action_items/ai2.html");
    });

});