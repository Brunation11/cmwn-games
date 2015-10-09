var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

$(document).ready(function () {

    $('.modal-backdrop').remove();

    $('#journey').hide();
    $('#p1').hide();
    $('#p2').hide();
    $('#p3').hide();
    $('#p4').hide();

    $('#next').hide().fadeIn(6000);
    $('#next-button').hide();
    $('#next-button2').hide();
    $('#next-button3').hide();

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#next').click(function () {
        $('#next').hide();
        $('#butter-info').hide();
        $('#video-modal').modal('show');
        $('#next-button').fadeIn(5000);
        background.play();
    });

    $('#next-button').click(function () {
        $('#video-modal').modal('hide');
        $('#next-button').hide();
        $('#journey').show();
    });

    $('#bar1').click(function () {
        facts.load();
        facts.play();
        $('#p0').hide();
        $('#p1').fadeIn();
        $('#p2').hide();
        $('#p3').hide();
        $('#p4').hide();
    });

    $('#bar2').click(function () {
        facts.load();
        facts.play();
        $('#p0').hide();
        $('#p1').hide();
        $('#p2').fadeIn();
        $('#p3').hide();
        $('#p4').hide();
    });

    $('#bar3').click(function () {
        facts.load();
        facts.play();
        $('#p0').hide();
        $('#p1').hide();
        $('#p2').hide();
        $('#p3').fadeIn();
        $('#p4').hide();
    });

    $('#bar4').click(function () {
        facts.load();
        facts.play();
        $('#p0').hide();
        $('#p1').hide();
        $('#p2').hide();
        $('#p3').hide();
        $('#p4').fadeIn();
        $('#next-button2').show();
    });

    $('#next-button2').click(function () {
        $('.modal-backdrop').remove();
        background.pause();
        flip.play();
        $('#next-button2').hide();
        $('#journey').hide();
        $('#next-button3').fadeIn(4000);
        $('#game-flip').modal('show');
        completeFlip(24312);
    });

});