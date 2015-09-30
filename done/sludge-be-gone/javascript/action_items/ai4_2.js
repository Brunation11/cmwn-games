var correct_items = new Array();
var clicked_item = $(this).attr(".yes");
var timer1;
var $form;
var $countdown;
var incrementTime = 1000;
var currentTime;

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

    $('#star2').hide();
    $('#star3').hide();
    $('#star4').hide();
    $('#star5').hide();
    $('#star6').hide();
    $('#star7').hide();
    $('#star8').hide();
    $('#star9').hide();

});

$(document).ready(function () {

    $(".body-content").addClass("net");
    startGame();

    // $('#game-info').modal('show');
    // $('#scoop-game').hide();
    // $('#head2').hide().show(1000, function () {
    //     progress.play();
    // });
    // $('#head3').hide().show(2000, function () {
    //     progress2.play();
    // });
    // $('#head4').hide().show(3000, function () {
    //     progress3.play();
    // });

    // $('#next-button3').click(function () {
    //     $(".body-content").addClass("net");
    //     $('#game-info').modal('hide');
    //     $('#scoop-game').show();
    //     startGame();
    // });

    $('#next-button2').click(function () {
        $('#game-complete').modal('hide');
        $('#game-flip').modal('show');
        flip.play();
    });

    $('#close').click(function () {
        $('#game-close').modal('show');
        timer1.Timer.stop();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        timer1.Timer.play();
    });

    $('#replay').click(function () {
        $("#putcontenthere").load("action_items/ai4_2.html");
        correct_matches = new Array();
        currentTime = 90000;
        timer1.Timer.play();

        start.loop = true;
        start.play();
    });

});

$(document).ready(function () {

    //Correct Items

    $('.yes').click(function () {

        $(this).hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {
            $('#star2').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 2) {
            $('#star3').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 3) {
            $('#star4').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 4) {
            $('#star5').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 5) {
            $('#star6').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 6) {
            $('#star7').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 7) {
            $('#star8').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 8) {
            timer1.Timer.stop();
            $('#star9').show();
            $('#game-complete').modal('show');
            complete.play();
            $('#scoop-game').hide();
            correct.load();
            correct.play();
        }
    });

    //Wrong Items

    $('#fish').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#root').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#turtle').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#octo').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#shell').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#fish2').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#crab').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#horse').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#rock').click(function () {
        incorrect.load();
        incorrect.play();
    });
    $('#nemo').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#fish3').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#star').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#clam').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#shell2').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#red').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#jelly').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#lob').click(function () {
        incorrect.load();
        incorrect.play();
    });
});


function startGame() {
    startTimer();
    start.loop = true;
}

var timer1 = new (function () {
    currentTime = '90000'; // 24 hours (in milliseconds)
});

function delayTimerStart(delayLength) {
    $('#counter').slideUp(300).delay(delayLength).queue(function () {

    });
}

function startTimer() {
    $countdown = $('#counter');
    $countdown.show();

    timer1.Timer = $.timer(updateTimer, incrementTime, true);
}

function updateTimer() {

    // Output timer position
    var timeString = currentTime.toString();
    $countdown.html(displayTime(timeString));

    // If timer is complete, trigger alert
    if (currentTime == 0) {
        timer1.Timer.stop();
        //alert('Times up!');
        $('#time-modal').modal('show');
        start.pause();
        start.currentTime = 0;
        
        runout.play();

        setTimeout(function () {
            Background.pause();
            
            
        });

    }
    // Increment timer position
    currentTime -= incrementTime;
    if (currentTime < 0) currentTime = 0;
}

function displayTime(timeString) {
    var seconds = ~~((timeString / 1000) % 60);
    var minutes = ~~((timeString / (1000 * 60)) % 60);
    //var hours = ~~((timeString / (1000 * 60 * 60)) % 24);

    //alert('hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds);

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "" + minutes;
    //if (hours < 10) hours = "" + hours;

    //if (hours = 0) hours = "00";
    //if (minutes = 0) minutes = "00";

    return minutes.toString() + seconds.toString();
}