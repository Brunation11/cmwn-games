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
    $('#key9').hide();
    $('#key10').hide();
    $('#key11').hide();

    $('#next-button9').hide();
    $('#next-button10').hide();
    $('#next-button11').hide();

    $('#chest').hide();
    $('#chest2').hide();
    $('#chest3').hide();
    $('#chest4').hide();
    $('#chest5').hide();
    $('#chest6').hide();
    $('#chest7').hide();
    $('#chest8').hide();
    $('#chest9').hide();
    $('#chest10').hide();
    $('#chest11').hide();

    $('#first').hide();
    $('#second').hide();
    $('#third').hide();
    $('#fourth').hide();
    $('#fifth').hide();
    $('#sixth').hide();
    $('#seventh').hide();
    $('#eighth').hide();
    $('#ninth').hide();
    $('#tenth').hide();
    $('#eleventh').hide();

    $('#chest-c').hide();
    $('#chest-c2').hide();
    $('#chest-c3').hide();
    $('#chest-c4').hide();
    $('#chest-c5').hide();
    $('#chest-c6').hide();
    $('#chest-c7').hide();
    $('#chest-c8').hide();
    $('#chest-c9').hide();
    $('#chest-c10').hide();
    $('#chest-c11').hide();

    $('#key').click(function () {
        $('#key').hide();
        $('#key2').show(6000);
        $('#ches').hide();
        $('#chest').show().css("background-image", "url('content/images/chests/chest_open.gif" + "?a=" + Math.random() + "')");
        $('#first').fadeIn(3000);
    });

    $('#key2').click(function () {
        $('#key2').hide();
        $('#key3').show(6000);
        $('#chest-c').show().css("background-image", "url('content/images/chests/chest_closed.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#first').hide();
        $('#chest').hide();
        $('#chest2').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_2.gif" + "?a=" + Math.random() + "')");
        $('#second').fadeIn(3000);
    });

    $('#key3').click(function () {
        $('#key3').hide();
        $('#key4').show(6000);
        $('#chest-c2').show().css("background-image", "url('content/images/chests/chest_closed_2.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#second').hide();
        $('#chest2').hide();
        $('#chest3').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_3.gif" + "?a=" + Math.random() + "')");
        $('#third').fadeIn(3000);
    });

    $('#key4').click(function () {
        $('#key4').hide();
        $('#key5').show(6000);
        $('#chest-c3').show().css("background-image", "url('content/images/chests/chest_closed_3.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#third').hide();
        $('#chest3').hide();
        $('#chest4').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_4.gif" + "?a=" + Math.random() + "')");
        $('#fourth').fadeIn(3000);
    });

    $('#key5').click(function () {
        $('#key5').hide();
        $('#key6').show(6000);
        $('#chest-c4').show().css("background-image", "url('content/images/chests/chest_closed_4.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#fourth').hide();
        $('#chest4').hide();
        $('#chest5').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_5.gif" + "?a=" + Math.random() + "')");
        $('#fifth').fadeIn(3000);
    });

    $('#key6').click(function () {
        $('#key6').hide();
        $('#key7').show(6000);
        $('#chest-c5').show().css("background-image", "url('content/images/chests/chest_closed_5.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#fifth').hide();
        $('#chest5').hide();
        $('#chest6').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_6.gif" + "?a=" + Math.random() + "')");
        $('#sixth').fadeIn(3000);
    });

    $('#key7').click(function () {
        $('#key7').hide();
        $('#key8').show(6000);
        $('#chest-c6').show().css("background-image", "url('content/images/chests/chest_closed_6.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#sixth').hide();
        $('#chest6').hide();
        $('#chest7').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_7.gif" + "?a=" + Math.random() + "')");
        $('#seventh').fadeIn(3000);
    });

    $('#key8').click(function () {
        $('#key8').hide();
        $('#key9').show(6000);
        $('#chest-c7').show().css("background-image", "url('content/images/chests/chest_closed_7.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#seventh').hide();
        $('#chest7').hide();
        $('#chest8').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_8.gif" + "?a=" + Math.random() + "')");
        $('#eighth').fadeIn(3000);
    });

    $('#key9').click(function () {
        $('#key9').hide();
        $('#key10').show(6000);
        $('#chest-c8').show().css("background-image", "url('content/images/chests/chest_closed_8.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#eighth').hide();
        $('#chest8').hide();
        $('#chest9').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_9.gif" + "?a=" + Math.random() + "')");
        $('#ninth').fadeIn(3000);
    });

    $('#key10').click(function () {
        $('#key10').hide();
        $('#key11').show(6000);
        $('#chest-c9').show().css("background-image", "url('content/images/chests/chest_closed_9.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#ninth').hide();
        $('#chest9').hide();
        $('#chest10').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_10.gif" + "?a=" + Math.random() + "')");
        $('#tenth').fadeIn(3000);
    });

    $('#key11').click(function () {
        $('#key11').hide();
        $('#next-button9').show(6000);
        $('#chest-c10').show().css("background-image", "url('content/images/chests/chest_closed_10.gif" + "?a=" + Math.random() + "')").delay(3000).hide();
        $('#tenth').hide();
        $('#chest10').hide();
        $('#chest11').delay(8000).show().css("background-image", "url('content/images/chests/chest_open_11.gif" + "?a=" + Math.random() + "')");
        $('#eleventh').fadeIn(3000);
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