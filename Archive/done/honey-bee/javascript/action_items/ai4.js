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

    $('#next-button').hide();

    $('.cream').hide();

    $('#eggs').hide();
    $('.eggs').hide();

    $('#milk').hide();
    $('.milk').hide();

    $('#sugar').hide();
    $('.sugar').hide();

    $('#straw').hide();
    $('.straw').hide();

    $('#vani').hide();
    $('.vani').hide();

    $('#cup2').hide();
    $('#cup3').hide();
    $('#cup4').hide();
    $('#cup5').hide();
    $('#cup6').hide();
    $('#cup7').hide();

    $('.complete').hide();

    $('#cream').one("click", function () {
        $('#eggs').show();
        $('#eggs2').hide();
        $('#cup').fadeOut(1000);
        $('#cup2').fadeIn(1000);
        $('.cream').show();
        $('#ingredients').hide();
        $('#numbers').hide();
    });

    $('#c-close').click(function () {
        $('#cream').hide();
        $('.cream').hide();
        $('#ingredients').show();
        $('#numbers').show();
    });

    $('#eggs').one("click", function () {
        $('#milk').show();
        $('#milk2').hide();
        $('.eggs').show();
        $('#ingredients').hide();
        $('#numbers').hide();
    });

    $('#c-close2').click(function () {
        $('#active').show();
        $('#n-active').hide();
        $('.eggs').hide();
        $('#cream').hide();
        $('#ingredients').show();
        $('#numbers').show();
    });

    $('#milk').one("click", function () {
        $('#sugar').show();
        $('#sugar2').hide();
        $('#cup2').fadeOut(1000);
        $('#cup3').fadeIn(1000);
        $('.milk').show();
        $('#ingredients').hide();
        $('#numbers').hide();
    });

    $('#c-close3').click(function () {
        $('#milk').hide();
        $('.milk').hide();
        $('#cream').hide();
        $('#ingredients').show();
        $('#numbers').show();
    });

    $('#sugar').one("click", function () {
        $('#active2').show();
        $('#n-active2').hide();
        $('#straw').show();
        $('#straw2').hide();
        $('#cup3').fadeOut(1000);
        $('#cup4').fadeIn(1000);
        $('.sugar').show();
        $('#ingredients').hide();
        $('#numbers').hide();
    });

    $('#c-close4').click(function () {
        $('#milk').hide();
        $('#cream').hide();
        $('.sugar').hide();
        $('#ingredients').show();
        $('#numbers').show();
    });

    $('#straw').one("click", function () {
        $('#vani').show();
        $('#vani2').hide();
        $('#cup4').fadeOut(1000);
        $('#cup5').fadeIn(1000);
        $('.straw').show();
        $('#ingredients').hide();
        $('#numbers').hide();
    });

    $('#c-close5').click(function () {
        $('#milk').hide();
        $('#cream').hide();
        $('#straw').hide();
        $('.straw').hide();
        $('#ingredients').show();
        $('#numbers').show();
    });

    $('#vani').one("click", function () {
        $('#cup5').fadeOut(1000);
        $('#cup6').fadeIn(1000);
        $('.vani').show();
        $('#ingredients').hide();
        $('#numbers').hide();
    });

    $('#c-close6').click(function () {
        $('#active3').show();
        $('#n-active3').hide();
        $('#milk').hide();
        $('#cream').hide();
        $('#straw').hide();
        $('.vani').hide();
        $('#ingredients').show();
        $('#numbers').show();
        $('#next-button').show();
    });

    $('#next-button').click(function () {
        $('#next-button').hide();
        $('#cup6').fadeOut(1000);
        $('#cup7').fadeIn(1000);
        $('#ingredients').hide();
        $('#numbers').hide();
        $('.complete').show();
    });

    $('#next-button2').click(function () {
        $("#putcontenthere").load("action_items/ai5.html");
    });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

});