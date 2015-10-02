var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

var correct_items = new Array();
var clicked_item = $(this).attr(".yes");

$(document).ready(function () {

    // Quit screen function

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#next-button').hide();
    $('#next-button2').hide();
    $('#next-button3').hide();
    $('#next-button4').hide();

    $('#des3').hide();

    $('#next-button').click(function () {
        $('#next-button').hide();
        $('#next-button2').show(6000);
        $('#drought').hide();
        $('#game-complete').modal('show');
        background.play();
        $('.stamp').hide(5000).show(function () {
            try {
                stamped.play();
            }
            catch (err) {
                //no sound - log error
            }
            //stamped.load();
            //stamped.play();
        });
    });

    $('#next-button2').click(function () {
        $('#next-button2').hide();
        $('#next-button3').show();
        $('#game-complete').modal('hide');
        $('#game-info').modal('show');
        $('#des3').show();
    });

    $('#next-button3').click(function () {
        $('#next-button3').hide();
        $('#next-button4').show();
        $('#game-info').modal('hide');
        $('#game-info2').modal('show');
    });

    $('#next-button4').click(function () {
        $("#putcontenthere").load("action_items/ai3.html");
    });

});

$(document).ready(function () {

    //Right Answers

    $('#dust').one("click", function () {
        $('#n-active').hide();
        $('#active').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    $('#dry').one("click", function () {
        $('#n-active2').hide();
        $('#active2').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    $('#hot').one("click", function () {
        $('#n-active3').hide();
        $('#active3').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    $('#water').one("click", function () {
        $('#n-active4').hide();
        $('#active4').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    $('#parch').one("click", function () {
        $('#n-active5').hide();
        $('#active5').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    $('#arid').one("click", function () {
        $('#n-active6').hide();
        $('#active6').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    $('#thirst').one("click", function () {
        $('#n-active7').hide();
        $('#active7').show();
        clicks.load();
        clicks.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 7) {
            $('#next-button').show();
        }
    });

    //Wrong Answers

    $('#green').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#damp').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#monsoon').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#trop').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#wet').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#steam').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#balm').click(function () {
        wrong.load();
        wrong.play();
    });

    $('#swamp').click(function () {
        wrong.load();
        wrong.play();
    });

});