var correct_items = new Array();
var clicked_item = $(this).attr("#small-bee");

// var bgMusic = $("#background")[0],
// playing = true;

// bgMusic.addEventListener('ended', function () {
//     this.currentTime = 0;
//     if (playing) {
//         this.play();
//     }
// }, false);

// background.volume = 0.2
// background.play();

$(document).ready(function () {

    $('#next-ai').hide();

    $("#b1").hide();
    $("#b2").hide();
    $("#b3").hide();
    $("#b4").hide();

    $('#game-info').modal('show');

    $('#next-button').click(function () {
        $('#game-info').modal('hide');
    });

    $("#close").click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#b1').click(function () {
        $('#b2').hide();
        return false;
    });

    $('#b2').click(function () {
        $('#b3').hide();
        return false;
    });

    $('#b3').click(function () {
        $('#b4').hide();
        return false;
    });

    $('#b-close').click(function () {
        $('#b1').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close2').click(function () {
        $('#b2').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close3').click(function () {
        $('#b3').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close4').click(function () {
        $('#b4').hide();
        $("#small-bee").css("animation-play-state", "running");
    });

    $('#next-ai').click(function () {
        $("#putcontenthere").load("action_items/ai3.html");
    });

});

$(document).ready(function () {

    bee.play();
    bee.loop = true;

    $('#small-bee').click(function () {

        $("#small-bee").css("animation-play-state", "paused");

        correct_items.push(clicked_item);
        if (correct_items.length === 1) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b1").show();

        } else if (correct_items.length === 2) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b2").show();

        } else if (correct_items.length === 3) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b3").show();

        } else if (correct_items.length === 4) {
            $("#b4").show();
            $('#next-ai').show();
        }

    });

});