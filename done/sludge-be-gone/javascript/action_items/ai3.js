//var memory_array = ['brush', 'dish', 'crop', 'swim', 'clean', 'run', 'cook', 'face', 'laundry', 'drink', 'shower', 'aqua', 'drive', 'read', 'sleep', 'sand', 'zip', 'time', 'dance', 'bucket', 'kite', 'play', 'phone', 'soda'];
var correct_items = new Array();
var clicked_item = $(this).attr(".yes");

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

    $('#head2').hide();
    $('#head3').hide();
    $('#head4').hide();

    $('#next-button').hide().fadeIn(1000);
    $('#next-button2').hide();
    $('#bubble-game').hide();

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#game-info').modal('show');

    $('#next-button').click(function () {
        $('#next-button').hide();
        $('#game-info').modal('hide');
        $('#bubble-game').show();
    });

    $('#next-button2').click(function () {
        $("#putcontenthere").load("action_items/ai4.html");
        $('#bubble-game').hide();
        background.pause();       
    });

});

$(document).ready(function () {

    $('#score p').html(function (i, val) { return val * 1 + 0 });

    //Correct Items

    $('.yes').click(function () {

        $(this).hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 2) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 3) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 4) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 5) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 6) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 7) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 8) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 9) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 10) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 11) {
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });

        } else if (correct_items.length === 12) {
            $('#next-button2').show();
            correct.load();
            correct.play();
            $('#score p').html(function (i, val) { return val * 1 + 10 });
        }
    });

    //Wrong Items

    $('#drive').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#read').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#sleep').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#sand').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#zip').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#time').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#dance').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#bucket').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#kite').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#play').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#phone').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

    $('#soda').click(function () {
        incorrect.load();
        incorrect.play();
        $('#score p').html(function (i, val) { return val * 1 - 10 });
    });

});