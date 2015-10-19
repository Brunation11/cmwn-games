var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

var bgMusic = $("#triple")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

var bgMusic = $("#treasure")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

var correct_items = new Array();
var correct_heads = new Array();
var clicked_item = $(this).attr(".yes");

yahoo.play();

$(document).ready(function () {

    $('#next-button2').hide();
    $('#next-button3').hide();
    $('#next-button4').hide();
    $('#next-button5').hide();
    $('#next-button6').hide();
    $('#next-button7').hide();
    $('#next-button8').hide();

    $('#game-info').modal('show');

    $('#effects').hide();
    $('#effects2').hide();

    $('#card').hide();

    $('#desert').hide();
    $('#desert2').hide();

    $('#save').hide();

    $('#facts').hide();

    $('#next-button').click(function () {
        $('#next-button').hide();
        $('#game-info').modal('hide');
        $('#effects').show();
        background.play();
    });

    $('#e1').hide();
    $('#e2').hide();
    $('#e3').hide();
    $('#e4').hide();
    $('#e5').hide();

    $('#e6').hide();
    $('#e7').hide();
    $('#e8').hide();
    $('#e9').hide();
    $('#e10').hide();

    $('#next-button2').click(function () {
        $('#next-button2').hide();
        $('#next-button3').show();
        $('#game-complete').modal('show');
        $('#effects').hide();
    });

    $('#next-button3').click(function () {
        $('#next-button3').hide();
        $('#game-complete').modal('hide');
        $('#effects2').show();
    });

    $('#next-button4').click(function () {
        $('#next-button4').hide();
        $('#effects2').hide();
        $('#card').show();
    });

    $('#blur').click(function () {
        $('#next-button5').fadeIn(2000);
        flip.load();
        flip.play();
    });

    $('#next-button5').click(function () {
        $('#next-button5').hide();
        $('#next-button6').fadeIn(3000);
        $('#card').hide();
        $('#desert').show();
        background.pause();
        des.play();
    });

    //$("#swirl").css("animation-play-state", "paused");

    $('#next-button6').click(function () {
        $("#swirl").css("animation-play-state", "running").show(function () {
            $("#swirl").animate({ width: "-=100", height: "-=100" }, 8000)
            swirly.play();
        });
        $('#next-button6').hide();
        $('#desert').delay(5000).hide(function () {
            $('#next-button7').fadeIn(2000);
            $('#desert2').show();
            cash.play();
        });
    });

    $('#next-button7').click(function () {
        $('#next-button7').hide();
        $('#desert2').hide();
        $('#save').show();
        des.pause();
        triple.play();
    });

    $('#c1').click(function () {
        flip.load();
        flip.play();
    });

    $('#c2').click(function () {
        flip.load();
        flip.play();
    });

    $('#card3').click(function () {
        $('#next-button8').show();
        flip.load();
        flip.play();
    });

    $('#next-button8').click(function () {
        $('#save').hide();
        $('#facts').show();
        triple.pause();
        treasure.play();
    });

    // Quit screen function

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    //Chest

    $('#key2').hide();
    $('#key3').hide();
    $('#key4').hide();
    $('#key5').hide();
    $('#key6').hide();
    $('#key7').hide();
    $('#key8').hide();

    $('#next-button9').hide();
    $('#next-button10').hide();
    $('#next-button11').hide();

    $('#door').hide();
    $('#door2').hide();
    $('#door3').hide();
    $('#door4').hide();
    $('#door5').hide();
    $('#door6').hide();
    $('#door7').hide();
    $('#door8').hide();

    $('#first').hide();
    $('#second').hide();
    $('#third').hide();
    $('#fourth').hide();
    $('#fifth').hide();
    $('#sixth').hide();
    $('#seventh').hide();
    $('#eighth').hide();

    $('#frame1').hide();

    $('#door-c').hide();
    $('#door-c2').hide();
    $('#door-c3').hide();
    $('#door-c4').hide();
    $('#door-c5').hide();
    $('#door-c6').hide();
    $('#door-c7').hide();
    $('#door-c8').hide();

    $('#key').click(function () {
        $('#key').hide();
        $('#key2').show(8500);
        $('#door').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#first').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key2').click(function () {
        $('#key2').hide();
        $('#key3').show(8500);
        $('#door-c').hide();
        $('#door2').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#second').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c2').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key3').click(function () {
        $('#key3').hide();
        $('#key4').show(8500);
        $('#door-c2').hide();
        $('#door3').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#third').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c3').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key4').click(function () {
        $('#key4').hide();
        $('#key5').show(8500);
        $('#door-c3').hide();
        $('#door4').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#fourth').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c4').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key5').click(function () {
        $('#key5').hide();
        $('#key6').show(8500);
        $('#door-c4').hide();
        $('#door5').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#fifth').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c5').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key6').click(function () {
        $('#key6').hide();
        $('#key7').show(8500);
        $('#door-c5').hide();
        $('#door6').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#sixth').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c6').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key7').click(function () {
        $('#key7').hide();
        $('#key8').show(8500);
        $('#door-c6').hide();
        $('#door7').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#seventh').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c7').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key8').click(function () {
        $('#key8').hide();
        $('#door-c7').hide();
        $('#door7').show().delay(8000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(6000).fadeOut();
        $('#eighth').fadeIn(2000).delay(6000).fadeOut();
        $('#door-c8').hide().delay(8000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
        $('#next-button9').show(6000);
    });

    $('#next-button9').click(function () {
        $('#next-button9').hide();
        $('#next-button10').show();
        $('#facts').hide();
        $('#game-complete2').modal('show');
    });

    $('#next-button10').click(function () {
        $('#next-button10').hide();
        $('#next-button11').show();
        $('#game-complete2').modal('hide');
        $('#game-flip').modal('show');
        treasure.pause();
        flips.play();
        end.play();
    });
});

$(document).ready(function () {

    $('#s1').one("click", function () {
        $('#n-active').hide();
        $('#active').show();
        $('#e1').fadeIn();
        $('#e2').hide();
        $('#e3').hide();
        $('#e4').hide();
        $('#e5').hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 5) {
            $('#next-button2').show();
        }
    });

    $('#s2').one("click", function () {
        $('#n-active2').hide();
        $('#active2').show();
        $('#e1').hide();
        $('#e2').fadeIn();
        $('#e3').hide();
        $('#e4').hide();
        $('#e5').hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 5) {
            $('#next-button2').show();
        }
    });

    $('#s3').one("click", function () {
        $('#n-active3').hide();
        $('#active3').show();
        $('#e1').hide();
        $('#e2').hide();
        $('#e3').fadeIn();
        $('#e4').hide();
        $('#e5').hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 5) {
            $('#next-button2').show();
        }
    });

    $('#s4').one("click", function () {
        $('#n-active4').hide();
        $('#active4').show();
        $('#e1').hide();
        $('#e2').hide();
        $('#e3').hide();
        $('#e4').fadeIn();
        $('#e5').hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 5) {
            $('#next-button2').show();
        }
    });

    $('#s5').one("click", function () {
        $('#n-active5').hide();
        $('#active5').show();
        $('#e1').hide();
        $('#e2').hide();
        $('#e3').hide();
        $('#e4').hide();
        $('#e5').fadeIn();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {

        } else if (correct_items.length === 5) {
            $('#next-button2').show();
        }
    });

});

$(document).ready(function () {

    $('#s6').one("click", function () {
        $('#n-active6').hide();
        $('#active6').show();
        $('#e6').fadeIn();
        $('#e7').hide();
        $('#e8').hide();
        $('#e9').hide();
        $('#e10').hide();

        correct_heads.push(clicked_item);

        if (correct_heads.length === 1) {

        } else if (correct_heads.length === 5) {
            $('#next-button4').show();
        }
    });

    $('#s7').one("click", function () {
        $('#n-active7').hide();
        $('#active7').show();
        $('#e6').hide();
        $('#e7').fadeIn();
        $('#e8').hide();
        $('#e9').hide();
        $('#e10').hide();

        correct_heads.push(clicked_item);

        if (correct_heads.length === 1) {

        } else if (correct_heads.length === 5) {
            $('#next-button4').show();
        }
    });

    $('#s8').one("click", function () {
        $('#n-active8').hide();
        $('#active8').show();
        $('#e6').hide();
        $('#e7').hide();
        $('#e8').fadeIn();
        $('#e9').hide();
        $('#e10').hide();

        correct_heads.push(clicked_item);

        if (correct_heads.length === 1) {

        } else if (correct_heads.length === 5) {
            $('#next-button4').show();
        }
    });

    $('#s9').one("click", function () {
        $('#n-active9').hide();
        $('#active9').show();
        $('#e6').hide();
        $('#e7').hide();
        $('#e8').hide();
        $('#e9').fadeIn();
        $('#e10').hide();

        correct_heads.push(clicked_item);

        if (correct_heads.length === 1) {

        } else if (correct_heads.length === 5) {
            $('#next-button4').show();
        }
    });

    $('#s10').one("click", function () {
        $('#n-active10').hide();
        $('#active10').show();
        $('#e6').hide();
        $('#e7').hide();
        $('#e8').hide();
        $('#e9').hide();
        $('#e10').fadeIn();

        correct_heads.push(clicked_item);

        if (correct_heads.length === 1) {

        } else if (correct_heads.length === 5) {
            $('#next-button4').show();
        }
    });

});

$(document).ready(function () {

    $('.card1 img').one("click", function () {
        $('.card1').addClass('flipped');
    });

    $('.card2 img').one("click", function () {
        $('.card2').addClass('flipped2');
    });

    $('.card3 img').one("click", function () {
        $('.card3').addClass('flipped3');
    });

    $('.card4 img').one("click", function () {
        $('.card4').addClass('flipped4');
    });

});