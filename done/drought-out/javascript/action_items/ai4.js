var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

background.volume = 0.2

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

treasure.volume = 0.2

var correct_items = new Array();
var correct_heads = new Array();
var clicked_item = $(this).attr(".yes");

yahoo.play();

$(document).ready(function () {

    $('#message').get(0).play();

    $('#next-button').hide().delay(4000).fadeIn();

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
        $('#next-button3').delay(3500).fadeIn();
        $('#game-complete').modal('show');
        $('#effects').hide();
        bad.play();
    });

    $('#next-button3').click(function () {
        $('#next-button3').hide();
        $('#game-complete').modal('hide');
        $('#effects2').show();
    });

    $('#next-button4').click(function () {
        what.load();
        what.play();
        $('#next-button4').hide();
        $('#effects2').hide();
        $('#card').show();
    });

    $('#blur').click(function () {
        line.load();
        line.play();
        $('#next-button5').delay(3500).fadeIn();
        flip.load();
        flip.play();
    });

    $('#next-button5').click(function () {
        most.load();
        most.play();
        $('#next-button5').hide();
        $('#next-button6').delay(11000).fadeIn();
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
            $('#next-button7').delay(2000).fadeIn();
            $('#desert2').show();
            cash.play();
            usin.play();
        });
    });

    $('#next-button7').click(function () {
        sav.play();
        $('#next-button7').hide();
        $('#desert2').hide();
        $('#save').show();
        des.pause();
        triple.play();
    });

    $('#c1').click(function () {
        gal.play();
        gal.play();
        flip.load();
        flip.play();
    });

    $('#c2').click(function () {
        gal2.load();
        gal2.play();
        flip.load();
        flip.play();
    });

    $('#card3').click(function () {
        $('#next-button8').delay(9000).fadeIn();
        gal3.load();
        gal3.play();
        flip.load();
        flip.play();
    });

    $('#next-button8').click(function () {
        ways.load();
        ways.play();
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
    $('#key9').hide();

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
    $('#door9').hide();

    $('#first').hide();
    $('#second').hide();
    $('#third').hide();
    $('#fourth').hide();
    $('#fifth').hide();
    $('#sixth').hide();
    $('#seventh').hide();
    $('#eighth').hide();
    $('#ninth').hide();

    $('#frame1').hide();

    $('#door-c').hide();
    $('#door-c2').hide();
    $('#door-c3').hide();
    $('#door-c4').hide();
    $('#door-c5').hide();
    $('#door-c6').hide();
    $('#door-c7').hide();
    $('#door-c8').hide();
    $('#door-c9').hide();

    $('#key').click(function () {
        d1.play();
        $('#key').hide();
        $('#key2').show(5500);
        $('#door').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#first').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key2').click(function () {
        d2.play();
        $('#key2').hide();
        $('#key3').show(5500);
        $('#door-c').hide();
        $('#door2').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#second').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c2').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key3').click(function () {
        d3.play();
        $('#key3').hide();
        $('#key4').show(5500);
        $('#door-c2').hide();
        $('#door3').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#third').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c3').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key4').click(function () {
        d4.play();
        $('#key4').hide();
        $('#key5').show(5500);
        $('#door-c3').hide();
        $('#door4').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#fourth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c4').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key5').click(function () {
        d5.play();
        $('#key5').hide();
        $('#key6').show(5500);
        $('#door-c4').hide();
        $('#door5').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#fifth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c5').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key6').click(function () {
        d6.play();
        $('#key6').hide();
        $('#key7').show(5500);
        $('#door-c5').hide();
        $('#door6').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#sixth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c6').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key7').click(function () {
        d7.play();
        $('#key7').hide();
        $('#key8').show(5500);
        $('#door-c6').hide();
        $('#door7').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#seventh').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c7').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key8').click(function () {
        d8.play();
        $('#key8').hide();
        $('#key9').show(5500);
        $('#door-c7').hide();
        $('#door8').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#eighth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c8').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
    });

    $('#key9').click(function () {
        d9.play();
        $('#key9').hide();
        $('#door-c8').hide();
        $('#door9').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_doors.gif" + "?a=" + Math.random() + "')");
        $('#frame1').fadeIn(2000).delay(3000).fadeOut();
        $('#ninth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c9').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_doors.gif" + "?a=" + Math.random() + "')");
        $('#next-button9').delay(3000).fadeIn();
    });

    $('#next-button9').click(function () {
        $('#next-button9').hide();
        $('#next-button10').delay(11000).fadeIn();
        $('#facts').hide();
        $('#game-complete2').modal('show');
        tag.play();
    });

    $('#next-button10').click(function () {
        $('#next-button10').hide();
        $('#next-button11').show();
        $('#game-complete2').modal('hide');
        $('#game-flip').modal('show');
        treasure.pause();
        thanks.play();
        flips.play();
        end.play();
    });
});

$(document).ready(function () {

    $('#s1').one("click", function () {
        loss.load();
        loss.play();

        $('#less').get(0).pause();
        $('#more').get(0).pause();
        $('#face').get(0).pause();
        $('#soil').get(0).pause();

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
        less.load();
        less.play();

        $('#loss').get(0).pause();
        $('#more').get(0).pause();
        $('#face').get(0).pause();
        $('#soil').get(0).pause();

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
        more.load();
        more.play();

        $('#less').get(0).pause();
        $('#loss').get(0).pause();
        $('#face').get(0).pause();
        $('#soil').get(0).pause();

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
        face.load();
        face.play();

        $('#less').get(0).pause();
        $('#more').get(0).pause();
        $('#loss').get(0).pause();
        $('#soil').get(0).pause();

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
        soil.load();
        soil.play();

        $('#less').get(0).pause();
        $('#more').get(0).pause();
        $('#face').get(0).pause();
        $('#loss').get(0).pause();

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
        health.load();
        health.play();

        $('#threat').get(0).pause();
        $('#and').get(0).pause();
        $('#income').get(0).pause();
        $('#water').get(0).pause();

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
        threat.load();
        threat.play();

        $('#health').get(0).pause();
        $('#and').get(0).pause();
        $('#income').get(0).pause();
        $('#water').get(0).pause();

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
        and.load();
        and.play();

        $('#threat').get(0).pause();
        $('#health').get(0).pause();
        $('#income').get(0).pause();
        $('#water').get(0).pause();

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
        income.load();
        income.play();

        $('#threat').get(0).pause();
        $('#and').get(0).pause();
        $('#health').get(0).pause();
        $('#water').get(0).pause();

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
        water.load();
        water.play();

        $('#threat').get(0).pause();
        $('#and').get(0).pause();
        $('#income').get(0).pause();
        $('#health').get(0).pause();

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