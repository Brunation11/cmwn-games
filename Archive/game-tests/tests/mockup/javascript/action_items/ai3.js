var correct_items = new Array();
var clicked_item = $(this).attr(".yes");

forest.play();
forest.loop = true;

$(document).ready(function () {

    $('#next-ai').hide();

    $('#crannies').hide();

    $('#game-info').modal('show');

    $("#next-button").hide().fadeIn(8000);

    $('#next-button').click(function () {
        $('#game-info').modal('hide');
        $('#crannies').show();
    });

    $("#close").click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#n1-active').delay(3375).fadeOut();
    $('#n2-active').delay(3375).fadeOut();
    $('#n3-active').delay(3375).fadeOut();
    $('#n4-active').delay(3375).fadeOut();
    $('#n5-active').delay(3375).fadeOut();
    $('#n6-active').delay(3375).fadeOut();

    $('#m-close').click(function () {
        ants.pause();
        $('#ants-modal').modal('hide');
    });

    $('#m-close2').click(function () {
        chipmunk.pause();
        $('#chip-modal').modal('hide');
    });

    $('#m-close3').click(function () {
        millipede.pause();
        $('#milli-modal').modal('hide');
    });

    $('#m-close4').click(function () {
        toad.pause();
        $('#toad-modal').modal('hide');
    });

    $('#m-close5').click(function () {
        snake.pause();
        $('#snake-modal').modal('hide');
    });

    $('#m-close6').click(function () {
        mouse.pause();
        $('#mouse-modal').modal('hide');
    });

});

$(document).ready(function () {

    $('#n1').click(function () {
        $('#n1').hide();
        $('#n1-active').show();
        $('#ants-modal').modal('show');
        ants.load();
        ants.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {
            correct.play();
        } else if (correct_items.length === 6) {
            $('#m-close').click(function () {
                $('#ants-modal').modal('hide');
                $('#game-complete').modal('show');
                $('#n1-active').show(function () {
                    $('#next-ai').show();
                });
                //alert("You Won!!");
            });               
        }
    });

    $('#n2').click(function () {
        $('#n2').hide();
        $('#n2-active').show();
        $('#chip-modal').modal('show');
        chipmunk.load();
        chipmunk.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

             try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
            
        } else if (correct_items.length === 6) {
            $('#m-close2').click(function () {
                $('#chip-modal').modal('hide');
                $('#game-complete').modal('show');
                $('#n2-active').show(function () {
                    $('#next-ai').show();
                });
                //alert("You Won!!");
            });
        }
    });

    $('#n3').click(function () {
        $('#n3').hide();
        $('#n3-active').show();
        $('#milli-modal').modal('show');
        millipede.load();
        millipede.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

            try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
        } else if (correct_items.length === 6) {
            $('#m-close3').click(function () {
                $('#milli-modal').modal('hide');
                $('#game-complete').modal('show');
                $('#n3-active').show(function () {
                    $('#next-ai').show();
                });
                //alert("You Won!!");
            });
        }
    });

    $('#n4').click(function () {
        $('#n4').hide();
        $('#n4-active').show();
        $('#toad-modal').modal('show');
        toad.load();
        toad.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

            try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
        } else if (correct_items.length === 6) {
            $('#m-close4').click(function () {
                $('#toad-modal').modal('hide');
                $('#game-complete').modal('show');
                $('#n4-active').show(function () {
                    $('#next-ai').show();
                });
                //alert("You Won!!");
            });
        }
    });

    $('#n5').click(function () {
        $('#n5').hide();
        $('#n5-active').show();
        $('#snake-modal').modal('show');
        snake.load();
        snake.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

            try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
        } else if (correct_items.length === 6) {
            $('#m-close5').click(function () {
                $('#snake-modal').modal('hide');
                $('#game-complete').modal('show');
                $('#n5-active').show(function () {
                    $('#next-ai').show();
                });
                //alert("You Won!!");
            });
        }
    });

    $('#n6').click(function () {
        $('#n6').hide();
        $('#n6-active').show();
        $('#mouse-modal').modal('show');
        mouse.load();
        mouse.play();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

            try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
        } else if (correct_items.length === 6) {
            $('#m-close6').click(function () {
                $('#mouse-modal').modal('hide');
                $('#game-complete').modal('show');
                $('#n6-active').show(function () {
                    $('#next-ai').show();
                });
                //alert("You Won!!");
            });
        }
    });

});