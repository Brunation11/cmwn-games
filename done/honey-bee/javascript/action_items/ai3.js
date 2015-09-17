var correct_items = new Array();
var correct_heads = new Array();
var clicked_item = $(this).attr("#small-bee");
var clicked_head = $(this).attr(".yes");

var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

var bgMusic = $("#background2")[0],
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
    $('#next-button3').hide();

    $('#bounce').hide();

    $("#b1").hide();
    $("#b2").hide();
    $("#b3").hide();
    $("#b4").hide();
    $("#b5").hide();
    $("#b6").hide();
    $("#b7").hide();
    $("#b8").hide();
    $("#b9").hide();

    $('#b-close10').hide();
    $('#b-close11').hide();
    $('#b-close12').hide();
    $('#b-close13').hide();

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

    $('#b4').click(function () {
        $('#b5').hide();
        return false;
    });

    $('#b5').click(function () {
        $('#b6').hide();
        return false;
    });

    $('#b6').click(function () {
        $('#b7').hide();
        return false;
    });

    $('#b7').click(function () {
        $('#b8').hide();
        return false;
    });

    $('#b8').click(function () {
        $('#b9').hide();
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
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close5').click(function () {
        $('#b5').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close6').click(function () {
        $('#b6').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close7').click(function () {
        $('#b7').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close8').click(function () {
        $('#b8').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").css("animation-play-state", "running");
        return false;
    });

    $('#b-close9').click(function () {
        $('#b9').hide();
        $(".bee-div").unbind('click');
        $("#small-bee").hide();
        $('#game-complete').modal('show');
        $('#next-button').delay(2000).fadeIn();
        background.pause();
        background2.play();
        return false;
    });

    $('#next-button').click(function () {
        $('#game-complete').modal('hide');
        $('#game-complete2').modal('show');
    });

    $('#next-button2').click(function () {
        $('#game-complete2').modal('hide');
        $('#bounce').show();
    });

    $('#next-button3').click(function () {
        $('#next-button3').hide();
        $('#game-complete3').modal('show');
    });

    $('#next-button4').click(function () {
        $('#game-complete3').modal('hide');
        $('#game-complete4').modal('show');
    });

    $('#next-button5').click(function () {
        $("#putcontenthere").load("action_items/ai4.html");
    });

    //Bounce Game Functions

    $('#bounce1').click(function () {
        $("#bounce1").css("animation-play-state", "paused");
        $('#b-close10').show();
    });

    $('#b-close10').click(function () {
        $('#bounce1').hide();
    });

    $('#bounce2').click(function () {
        $("#bounce2").css("animation-play-state", "paused");
        $('#b-close11').show();
    });

    $('#b-close11').click(function () {
        $('#bounce2').hide();
    });

    $('#bounce3').click(function () {
        $("#bounce3").css("animation-play-state", "paused");
        $('#b-close12').show();
    });

    $('#b-close12').click(function () {
        $('#bounce3').hide();
    });

    $('#bounce4').click(function () {
        $("#bounce4").css("animation-play-state", "paused");
        $('#b-close13').show();
    });

    $('#b-close13').click(function () {
        $('#bounce4').hide();
    });

    //Closing Functions

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

});

$(document).ready(function () {

    //bee.play();
    //bee.loop = true;

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
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b4").show();

        } else if (correct_items.length === 5) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b5").show();

        } else if (correct_items.length === 6) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b6").show();

        } else if (correct_items.length === 7) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b7").show();

        } else if (correct_items.length === 8) {
            $('.bee-div').click(false).appendTo("#small-bee");
            $("#b8").show();

        } else if (correct_items.length === 9) {
            $("#b9").show();
        }

    });

});

$(document).ready(function () {

    $('.yes').click(function () {

        correct_heads.push(clicked_head);

        if (correct_heads.length === 1) {

        } else if (correct_heads.length === 2) {

        } else if (correct_heads.length === 3) {

        } else if (correct_heads.length === 4) {
            //alert('you won');
            $('#next-button3').show();
        }

    });

});