var memory_array = ['red'];
var correct_items = new Array();
var clicked_item = $(this).attr("#red");

$(document).ready(function(){

    var goal_tracker = {
            goal: 0
    };

$(function () {
            $window = $('#field'),
            $bird = $('#item'),
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
                red.css({ top: 320, left: 200 });

                var butterfly = $('#item');
                butterfly.css({ top: 100, left: 150 });
            }

            function testCollision() {
                var bird = $('#item');
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
                        $('#item').click(false).appendTo("#field");

                    }

                    if (goal_tracker.goal === 2) {
                         $('#item').click(false).appendTo("#field");

                    }

                    if (goal_tracker.goal === 3) {
                         $('#item').click(false).appendTo("#field");

                    }

                    if (goal_tracker.goal === 4) {
                         $('#item').click(false).appendTo("#field");

                    }

                    if (goal_tracker.goal === 5) {
                         $('#item').click(false).appendTo("#field");

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
        })

});




