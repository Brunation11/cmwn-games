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

    $('.modal-backdrop').remove();

    $("#f1").hide();
    $("#f2").hide();
    $("#f3").hide();
    $("#f4").hide();
    $("#f5").hide();
    $("#f6").hide();
    $("#f7").hide();
    $("#f8").hide();
    $("#f9").hide();
    $("#f10").hide();
    $("#f11").hide();
    $("#f12").hide();

    $("#butterfly").hide();

    $('#game-info').modal('show');

    $("#next-button").hide().fadeIn(3000);
    $("#next-button2").hide();

    $('#next-button').click(function () {
        $("#next-button").hide();
        $('#game-info').modal('hide');
        $("#butterfly").show();
    });


    $('#next-button2').click(function () {
        $("#putcontenthere").load("action_items/ai3.html");
    });

    $('#close').click(function () {
        $('#game-close').modal('show');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#c1').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f1").hide();
    });

    $('#c2').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f2").hide();
    });

    $('#c3').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f3").hide();
    });

    $('#c4').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f4").hide();
    });

    $('#c5').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f5").hide();
    });

    $('#c6').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f6").hide();
    });

    $('#c7').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f7").hide();
    });

    $('#c8').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f8").hide();
    });

    $('#c9').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f9").hide();
    });

    $('#c10').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f10").hide();
    });

    $('#c11').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f11").hide();
    });

    $('#c12').click(function () {
        $("#butterfly").unbind('click');
        $(".animate-flower").css("animation-play-state", "running");
        $(".animate-flower2").css("animation-play-state", "running");
        $(".animate-flower3").css("animation-play-state", "running");
        $(".animate-flower4").css("animation-play-state", "running");
        $(".animate-flower5").css("animation-play-state", "running");
        $('#butterfly').css({ top: 100, left: 150 });
        $("#f12").hide();
    });

});

//Butterfly Game

var memory_array = ['red'];
var correct_items = new Array();
var clicked_item = $(this).attr("#red");

$(document).ready(function () {

    var goal_tracker = {
        goal: 0
    };

    $(function () {
        $window = $('#field'),
        $bird = $('#butterfly'),
        fallTime = 1000,
        gapHeight = 120,
        gameState = 2,
        pipeId = 0;
        initializePositions();

        //var int = setInterval(function () {
        //    if (gameState === 1) {
        //        spawnPipe();
        //        movePipes();
        //    }
        //}, 1300);

        var birdPosInterval = setInterval(function () {
            if (gameState === 1) {
                //birdPos();
            }
        }, 10);

        $window.mousedown(function () {
            birdFlap();

            if (gameState === 2) {
                gameState = 1;
                //deleteInterval();
            }
        });

        // $(window).keydown(function (e) {
        //     if (e.keyCode === 32) {
        //         birdFlap();
        //         e.preventDefault();
        //         if (gameState === 2) {
        //             gameState = 1;
        //             //deleteInterval();
        //         }
        //     }
        // });

        //function deleteInterval() {
        //    setTimeout(function () {
        //        var int = setInterval(function () {
        //            if (gameState === 1) {
        //                deletePipe();
        //            }
        //        }, 1300);
        //    }, 2050);
        //}

        function birdFlap() {
            if (gameState === 1 || gameState === 2) {
                $bird.css('transform', 'rotate(-20deg)');
                $bird.stop().animate({
                    top: '-=60px'
                }, 200, function () {
                    birdPos();
                    $bird.css('transform', 'rotate(0deg)');
                    $bird.stop().animate({
                        top: '+=160px'
                    }, 300, 'linear', function () {
                        birdPos();
                        gravity();
                        testCollision();
                    });
                });
            }
        }

        // TAPPING EFFECT

        function gravity() {
            birdPercent = parseInt($bird.css('bottom')) / $window.height();
            totalFallTime = fallTime * birdPercent;
            $bird.stop().animate({
                top: '265px'
            }, totalFallTime, 'linear');
        }

        function birdPos() {
            if (parseInt($bird.css('bottom')) === 0) {
                gameEnd();
            }
        }

        function initializePositions() {
            var red = $('#red');
            red.css({ top: 320, right: 200 });

            var butterfly = $('#butterfly');
            butterfly.css({ top: 100, left: 150 });
        }

        function testCollision() {
            var bird = $('#butterfly');
            var bird_position = bird.position();
            var bird_center = bird_position.left + 115;
            console.log('Bird Position Center ' + bird_center + ' top ' + bird_position.top);

            var red = $('#red');
            var red_position = red.position();

            red_right = red_position.left + 140;
            console.log('Red Position ' + ' right ' + red_right + ' left ' + red_position.left + ' top ' + red_position.top);

            if (bird_position.top <= red_position.top && bird_center >= red_position.left && bird_center <= red_right) {

                goal_tracker.goal += 1;

                if (goal_tracker.goal === 1) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f1").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 2) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f2").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 3) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f3").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 4) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f4").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 5) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f5").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 6) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f6").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 7) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f7").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 8) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f8").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 9) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f9").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 10) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f10").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 11) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f11").show();
                    facts.load();
                    facts.play();
                }

                if (goal_tracker.goal === 12) {
                    $('#butterfly').click(false).appendTo("#field");
                    $(".animate-flower").css("animation-play-state", "paused");
                    $(".animate-flower2").css("animation-play-state", "paused");
                    $(".animate-flower3").css("animation-play-state", "paused");
                    $(".animate-flower4").css("animation-play-state", "paused");
                    $(".animate-flower5").css("animation-play-state", "paused");
                    $("#f12").show();
                    facts.load();
                    facts.play();
                    $("#next-button2").show();
                }                       
            }

            //RELEASE BUTTERFLY

            function gameEnd() {
                clearInterval(birdPosInterval);
                $('#red').stop();
                //$('#f1').show();
                gravity();
                gameState = 0;
            }

        }
    });

});