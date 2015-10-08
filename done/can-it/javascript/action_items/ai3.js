    try
    {
        Background.load();
        Background.play();
    }
    catch (err)
    {
        //no sound - log error
    }

    $('.carousel-inner').parent().carousel({ pause: true, interval: false });

    currentSlide = Math.floor((Math.random() * $('.item').length));
    rand = currentSlide;
    $('#myCarousel').carousel(currentSlide);
    setInterval(function () {
        while (rand == currentSlide) {

            rand = Math.floor((Math.random() * $('.item').length));
        }
        currentSlide = rand;
        $('#myCarousel').carousel(rand);

    }, 900000);

    // close window
    $('.scape-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('#no-btn').click(function () {
        $('#quit-game').modal('hide');
    });

    $('.exit-Modal-Btn').click(function () {
        $('#quit-game').modal('hide');
    });

    // hide Good job sorting screen message
    $('#retry-screen').modal('hide');
    // hide points animation
    $('.win').hide();
    $('.loose').hide();
    // Control dumpster carousel and captions

    function playCorrect() {
        try
        {
            correct.load();
            correct.play();
        }
        catch (err) {
            //no sound - log error
        }
    }

    function playWrong() {
        try
        {
            wrong.load();
            wrong.play();
        }
        catch (err) {
            //no sound - log error
        }
    }
    ////// click and shoot item to trash cans

    $(".Hit_One,.Hit_two,.Hit_three,.Hit_four,.Hit_five,.Hit_six,.Hit_seven,.Hit_eight,.Hit_nine,.Hit_ten,.Hit_eleven,.Hit_twelve,.Hit_thirteen,.Hit_fourteen,.Hit_fifteen,.Hit_sixteen,.Hit_seventeen,.Hit_eighteen,.Hit_nineteen,.Hit_twenty,.Hit_twentyone,.Hit_twentytwo,.Hit_twentythree,.Hit_twentyfour,.Hit_twentyfive,.Hit_twentysix,.Hit_twentyseven,.Hit_twentyeight,.Hit_twentynine,.Hit_thirty,.Hit_thirtyone,.Hit_thirtytwo,.Hit_thirtythree,.Hit_thirtyfour,.Hit_thirtyfive,.Hit_thirtysix,.Hit_thirtyseven,.Hit_thirtyeight,.Hit_thirtynine,.Hit_forty").click(function (event) {
        $('#carousel_ul').carousel().animate('pause',2000);
        var click_item = $(this).attr('id');
        var click_correct = $(this).attr('data-correct');
        var item_animate = click_item + "#"
        var current = $('.item');

        //check to see where the carousel paused and find the selected item id

            var selected_item = $("#carousel_ul li")[2].id;
            selected_item = selected_item.replace("-li", "");

            if (click_correct === selected_item) {
                //remove the correct item so ite does not diplay again
                // $(this).remove();

                //play correct sound
                //alert('You hit Compost bin');

                correct_items.push(selected_item);

                if (correct_items.length === 1) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top : -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 10);
                    /// change color of active state //
                }

                if (correct_items.length === 2) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 3) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 4) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 5) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15});
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 6) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                    $('.carousel-inner').carousel({ pause: true, interval: false });
                }

                if (correct_items.length === 7) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 8) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 9) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 10) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 11) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 12) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 13) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 14) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 15) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 16) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 17) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 18) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 19) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 20) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 21) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 22) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 23) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 24) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 25) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 26) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 27) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 28) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 29) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 30) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 31) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 32) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 33) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 34) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 35) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 36) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 37) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 38) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 39) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

                if (correct_items.length === 40) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }
            }

            else {
                //play incorrect sound
                Wrong.play();
                $('#score p').html(function (i, val) { return val * 1 - 30 });
                $('.loose').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);
            }

        //});

        $("#" + click_item + "1").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "2").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "3").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "4").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "5").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "6").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "7").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "8").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "9").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "10").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "11").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "12").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "13").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "14").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "15").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "16").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "17").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "18").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "19").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "20").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "21").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "22").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "23").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "24").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "25").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "26").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "27").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "28").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "29").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "30").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "31").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "32").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "33").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "34").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "35").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "36").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "37").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "38").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "39").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "40").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $('#myCarousel').carousel().animate();

        });

        $('#carousel_ul').carousel().animate();
});

function playStart() {
    try
    {
        start.loop = true;
        start.play();
    }
    catch (err)
    {
        //no sound - log error
    }
}

function pauseStart() {
    try {
        start.pause();
    }
    catch (err) {
        //no sound - log error
    }
}

function startGame() {
    startTimer();

    playStart();
}

var $countdown;
var $form;
var incrementTime = 1000;
var currentTime;

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

function playWonGame() {
    try {
        wongame.load();
        wongame.play();
    }
    catch (err) {
        //no sound - log error
    }
}

function playFlip() {
    try {
        flip.load();
        flip.play();
    }
    catch (err) {
        //no sound - log error
    }
}

function playRunOut() {
    try {
        runout.load();
        runout.play();
    }
    catch (err) {
        //no sound - log error
    }
}

function updateTimer() {

    // Output timer position
    var timeString = currentTime.toString();
    $countdown.html(displayTime(timeString));

    // If timer is complete, trigger alert
    if (currentTime === 0) {
        timer1.Timer.stop();
        //alert('Times up!');
        try
        {
            start.currentTime = 0;
        }
        catch(err)
        {
            //no sound - log error
        }

        //pauseStart();
        clock.pause();

        setTimeout(function () {
            try
            {
                Background.pause();
            }
            catch(err)
            {
                //no sound - log error
            }

            // $('#carousel_ul').carousel().animate('pause');
            if (correct_items.length >= 10) {
                //alert('You Win');
                $('#retry-screen').modal('show');
                Win.play();

                $('#next-button2').click(function () {

                    $('#flip-screen').modal('show');
                    Flip.play();

                    //need to tell the system that is is time to award flip

                    $('#retry-screen').modal('hide');
                });
                $("#re-try").click(function () {
                    $('#retry-screen').modal('hide');
                    $("#putcontenthere").load("action_items/ai2.html");
                    // alert("Hey");
                    // setTimeout(function () { location.reload(); }, 1000);

                    try
                    {
                        startGame.load();
                    }
                    catch (err) {
                        //no sound - log error
                    }
                    // startGame();
                });

            } else {
                Timeout.play();
                // $('#retry-screen').modal('hide');
                $('#fail-screen').modal('show');
                $('#re-try-2').click( function() {
                    $("#putcontenthere").load("action_items/ai2.html");
                        // location.reload();
                });
            }

        });
    }
    // Increment timer position
    currentTime -= incrementTime;
    if (currentTime < 0) currentTime = 0;
}

function displayTime(timeString) {
    var seconds = ~~((timeString / 1000) % 60);
    var minutes = ~~((timeString / (1000 * 60)) % 60);
    var hours = ~~((timeString / (1000 * 60 * 60)) % 24);

    //alert('hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds);

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "" + minutes;
    if (hours < 10) hours = "0" + hours;

    //if (hours = 0) hours = "00";
    //if (minutes = 0) minutes = "00";

    return minutes.toString() + seconds.toString();
}