$(document).ready(function () {

    $('.arrows > .next').fadeIn();
    $('.arrows > .next').addClass('open').one("click", function() {
        // $('#Sslide3').get(0).currentTime = 0;
        // $('#Sslide3').get(0).play();
    });

    function loop() {
        $('#step .slider .pointer').css({ top: 130 });
        $('#step .slider .pointer').animate({
            top: '+=400'
        }, 2000, 'linear', function () {
            $('#drip').get(0).currentTime = 0;
            $('#drip').get(0).play();
            loop();
            $('#step .pointer').click(function () {
                $(this).addClass('active-pointer');
                $('.arrows > .next').fadeIn();
                $('.arrows > .next').addClass('open');
            });
        });
    }

    setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 500);
    $('#title').get(0).play();
    $('.btn-click, .next, .prev').click(function () {
        $('#btnClick').get(0).play();
    });

    $('#home .play').click(function () {
        $('#home').fadeOut(500);
        $('#step').fadeIn(500);
        loop();
        $('#title').get(0).pause();
        $('#Sslide3').get(0).currentTime = 0;
        $('#Sslide3').get(0).play();
    });

    $('#reveal .next').click(function () {
        $('#Sslide-bg-19-22').get(0).pause();
        $('#Sslide-bg-23-27').get(0).pause();
        $('#Sslide27').get(0).currentTime = 0;
        $('#Sslide27').get(0).play();

        $('#reveal').fadeOut(500);
        $('#esential').fadeIn(500);
        $('#esential .circle-container').addClass('together rotation');
        /*$('#mainSound').get(0).play();*/
    });

    $('#esential .next').click(function () {
        $('#esential').fadeOut(500);
        $('#flip').fadeIn(500);
        $('#flip .water').addClass('waterspin');
        $('#Sslide28').get(0).currentTime = 0;
        $('#Sslide28').get(0).play();

    });
    /*slider*/
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/

    setTimeout(function () {
        $('#step .slider .slide').hide();
        $('#step .slider  .pointer').remove();
        $('#step .slider .slide .img-hover').append('<div class="pointer"></div>');

        $('#step .slider .slide').first().show();
        setTimeout(function () { $('#step .slider .slide:nth-child(' + 1 + ') .cs-buttons a').trigger('click'); }, 2500);

        $('#step .slider .slide').first().addClass('openslide');
        $('.arrows > .prev').fadeOut();

        var num = $('#step .slider .slide').first().index() + 1;


        /*---------------NEXT--BUTTON------------------------*/
        $('.arrows > .prev').click(function (i) {
            //$('#mainSound').get(0).play();
            console.log("PREV is clicked", num);
            $('#step .pointer').removeClass('active-pointer');
            $('.content-box .btn-hold .btn-hover').fadeOut(100);
            if ($('#step .slider .slide').hasClass('openslide')) {
                if (num <= $('#step .slider .slide').length) {
                    $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut(10);
                    $('#step .slider .slide').removeClass('openslide').fadeOut(10);
                    $('#step .slider .slide:nth-child(' + (num - 1) + ')').addClass('openslide').fadeIn(500);

                    $('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').addClass('font-size');
                    if ($('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').hasClass('font-size25')) {
                        $('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').removeClass('font-size25 font-size');
                        $('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').addClass('font-size25');

                    } else if ($('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').hasClass('font-size28')) {
                        $('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').removeClass('font-size28 font-size');
                        $('#step .slider .slide:nth-child(' + (num - 1) + ') .content-text > div p').addClass('font-size28');

                    }
                    $('.arrows > .next').fadeOut();
                    $('.arrows > .next').removeClass('open');

                    num--;
                    if ((num - 1) >= 1) {
                        setTimeout(function () {
                            $('.arrows > .next').fadeIn();
                            $('.arrows > .next').addClass('open');

                        }, 750);
                    }
                    if (num  == 1) {

                            $('.arrows > .prev').fadeOut();

                    }
                    if ((num) == 2 ) {
                        console.log('slide2');
                        $('#step .slider .slide .why').parent().addClass('tada');
                        // $('#Sslide3').get(0).currentTime = 0;
                        // $('#Sslide3').get(0).play();

                    }
                    if ((num) == 12) {

                        setTimeout(function () {
                            $('.arrows > .next').fadeIn();
                            $('.arrows > .next').addClass('open');

                        }, 750);

                    }
                    if ((num) == 6) {
                        $('#step .slider .slide .img-hover').append('<div class="pointer"></div>');
                        loop();
                        $('#Sslide7').get(0).currentTime = 0;
                        $('#Sslide7').get(0).play();
                    }

                    if ((num) == 7 ) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).pause();
                    }
                    if ((num) == 11 ) {
                        $('#Sslide11').get(0).currentTime = 0;
                        $('#Sslide11').get(0).play();
                    }
                    if ((num) == 14 ) {
                        $('#Timer').get(0).currentTime = 0;
                        $('#Timer').get(0).play();
                    }
                    if ((num) == 15 ) {
                        $('#Timer').get(0).currentTime = 0;
                        $('#Timer').get(0).pause();
                    }
                    if ((num) == 17) {

                        console.log('17!!!!');
                        $('.arrows > .next').fadeIn();
                        $('.arrows > .next').addClass('open');
                        if ($('.lister li').hasClass('timed')) {
                            console.log('timed!!!!');
                            $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut(10);
                            num = 15;
                            $('#Timer').get(0).currentTime = 0;
                            $('#Timer').get(0).pause();

                            $('#step .slider .slide:nth-child(' + (num - 1) + ')').addClass('openslide').fadeIn(500);
                            $('.arrows > .next').fadeOut();
                            $('.arrows > .next').removeClass('open');
                        }
                    }
                    if ((num) == 1 || (num) == 2 || (num) == 3 || (num) == 4 || (num) == 5 || (num) == 6 || (num) == 7 || (num) == 14 || (num) == 12 || (num) == 16) {

                        setTimeout(function () {
                            $('.arrows > .next').fadeOut();
                            $('.arrows > .next').removeClass('open');

                        }, 750);


                    }
                    if ((num) == 13 || (num) == 12  ) {
                        $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut(10);
                        num = 13;

                        $('#step .slider .slide:nth-child(' + (num - 1) + ')').addClass('openslide').fadeIn(500);
                    }
                    if ((num - 1) == ($('#step .slider .slide').length)) {
                        $('#step').fadeOut(500);
                        $('#reveal').fadeIn(500);
                        $('#Sslide-bg-19-22').get(0).currentTime = 0;
                        $('#Sslide-bg-19-22').get(0).pause();
                        $('#Sslide-bg-23-27').get(0).currentTime = 0;
                        $('#Sslide-bg-23-27').get(0).play();
                        setTimeout(function () {
                            $('.arrows > .next').fadeOut();
                            $('.arrows > .next').removeClass('open');

                        }, 750);

                        /*$('#mainSound').get(0).pause();
                         $('#slide29').get(0).play();*/

                    }
                    if ((num) == 17 ) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).pause();
                        $('.estimate').wave(null, 25, 1500);
                    }

                    if ((num) == 18 ) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).pause();
                        $('.week-spent').wave(null, 25, 1500);
                    }
                    if ((num) == 19 ) {
                        $('.month-spent').wave(null, 25, 1500);
                    }
                    if ((num) == 20 ) {
                        $('.year-spent').wave(null, 25, 1500);
                    }
                }
            }
        });
        /*---------------NEXT--BUTTON------------------------*/
        $('.arrows > .next').click(function (i) {
            //$('#mainSound').get(0).play();
            console.log("Next is clicked", num);
            $('.content-box .btn-hold .btn-hover').fadeOut(100);
            if ($('#step .slider .slide').hasClass('openslide')) {
                if (num <= $('#step .slider .slide').length) {
                    $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut(10);
                    $('#step .slider .slide').removeClass('openslide').fadeOut(10);
                    $('#step .slider .slide:nth-child(' + (num + 1) + ')').addClass('openslide').fadeIn(500);
                    $('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').addClass('font-size');
                    if ($('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').hasClass('font-size25')) {
                        $('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').removeClass('font-size25 font-size');
                        $('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').addClass('font-size25');

                    } else if ($('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').hasClass('font-size28')) {
                        $('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').removeClass('font-size28 font-size');
                        $('#step .slider .slide:nth-child(' + (num + 1) + ') .content-text > div p').addClass('font-size28');

                    }
                    $('.arrows > .next').fadeOut();
                    $('.arrows > .next').removeClass('open');

                    num++;
                    if ((num - 1) >= 1) {
                        setTimeout(function () {
                            $('.arrows > .next').fadeIn();
                            $('.arrows > .next').addClass('open');

                        }, 750);
                    }
                    if (num  == 1) {

                        $('.arrows > .prev').fadeOut();

                    }
                    if ((num) == 2 ) {
                        console.log('slide2');
                        $('#step .slider .slide .why').parent().addClass('tada');
                        $('.arrows > .prev').fadeIn();

                    }
                    if ((num) == 12) {

                        setTimeout(function () {
                            $('.arrows > .next').fadeIn();
                            $('.arrows > .next').addClass('open');

                        }, 750);

                    }
                    if ((num) == 7 ) {
                        $('#step .slider .slide .img-hover').html('');
                        $('#Sslide7').get(0).currentTime = 0;
                        $('#Sslide7').get(0).play();
                    }

                    if ((num) == 8 ) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).play();
                    }
                    if ((num) == 11 ) {
                        $('#Sslide11').get(0).currentTime = 0;
                        $('#Sslide11').get(0).play();
                    }
                    if ((num) == 14 ) {
                        $('#Timer').get(0).currentTime = 0;
                        $('#Timer').get(0).play();
                    }
                    if ((num) == 15 ) {
                        $('#Timer').get(0).currentTime = 0;
                        $('#Timer').get(0).pause();
                    }
                    if ((num) == 17) {

                        console.log('17!!!!');
                        $('.arrows > .next').fadeIn();
                        $('.arrows > .next').addClass('open');
                        if ($('.lister li').hasClass('timed')) {
                            console.log('timed!!!!');
                            $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut(10);
                            num = 15;
                            $('#Timer').get(0).currentTime = 0;
                            $('#Timer').get(0).pause();
                            $('#step .slider .slide:nth-child(' + (num - 1) + ')').addClass('openslide').fadeIn(500);
                            $('.arrows > .next').fadeOut();
                            $('.arrows > .next').removeClass('open');
                        }
                    }
                    if ((num) == 18 || (num) == 19|| (num) == 20) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).pause();
                        $('#Sslide-bg-19-22').get(0).currentTime = 0;
                        $('#Sslide-bg-19-22').get(0).play();
                    }
                    if ((num) == 1 || (num) == 2 || (num) == 3 || (num) == 4 || (num) == 5 || (num) == 6 || (num) == 7 || (num) == 14 || (num) == 12 || (num) == 16) {

                        setTimeout(function () {
                            $('.arrows > .next').fadeOut();
                            $('.arrows > .next').removeClass('open');

                        }, 750);

                    }
                    if ((num - 1) == ($('#step .slider .slide').length)) {
                        $('#step').fadeOut(500);
                        $('#reveal').fadeIn(500);
                        $('#Sslide-bg-19-22').get(0).currentTime = 0;
                        $('#Sslide-bg-19-22').get(0).pause();
                        $('#Sslide-bg-23-27').get(0).currentTime = 0;
                        $('#Sslide-bg-23-27').get(0).play();
                        setTimeout(function () {
                            $('.arrows > .next').fadeOut();
                            $('.arrows > .next').removeClass('open');

                        }, 750);

                        /*$('#mainSound').get(0).pause();
                         $('#slide29').get(0).play();*/

                    }
                    if ((num) == 17 ) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).pause();
                        $('.estimate').wave(null, 25, 1500);
                    }
                    if ((num) == 18 ) {
                        $('#Sslide9-18').get(0).currentTime = 0;
                        $('#Sslide9-18').get(0).pause();
                        $('.week-spent').wave(null, 25, 1500);
                    }
                    if ((num) == 19 ) {
                        $('.month-spent').wave(null, 25, 1500);
                    }
                    if ((num) == 20 ) {
                        $('.year-spent').wave(null, 25, 1500);
                    }

                }
            }

        });

    }, 200);
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/
    $('ul.gallons li').click(function (e) {
        $('#incorrect').get(0).currentTime = 0;
        $('#incorrect').get(0).play();
    });

    $('ul.gallons li:first-child').click(function (e) {
        $('#incorrect').get(0).currentTime = 0;
        $('#incorrect').get(0).pause();
        $(this).addClass('correct');
        $('.arrows > .next').fadeIn();
        $('.arrows > .next').addClass('open');
        $('#correct').get(0).currentTime = 0;
        $('#correct').get(0).play();
    });

    $('#flip .heading, #flip .next').click(function () {
        $('#flip').fadeOut(500);
        $('#quit').fadeIn(500);
    });

    (function () {
        var clock = $('.countdown').FlipClock(
            3600 * 24 * 3  // here should be set timer for user
            //200
            , {
                'countdown': true,
                "minimumDigits": 2,
                callbacks: {
                    stop: function () {
                        console.log('The clock has stopped!');
                        $('#notebook .clock').fadeOut(10);
                        $('#notebook .timeout').fadeIn(500);
                        $('#notebook .hint-popup2').fadeIn(500);
                    }
                }
            })
        ;
    })();
    /*//////////////////////// OLD scripts for purple box and popups /////////////////////////////*/
    // $('#pop-up').modal('show');

    //to use the close modal, use this function
    $('.modal .no').click(function () {
        $('.modal').modal('hide');
    });

    //to use the close modal, use this function

    $('.close-Btn').click(function () {
        console.log('CLOSE!!!!');
        $('#game-info').modal('show');
    });

    $('.A').click(function () {
        $("#level-complete").modal('show');
    });

    $('.B').click(function () {
        $("#retry-level").modal('show');
    });

    $('.purple-button').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {
        $("#retry-level").modal('show');
    });

    $('.close-Btn').click(function () {
        $("#game-info").modal('hide');
    });

});

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function () {

    /*-+------------------------------------*/
    /*-+--------USER PARSING----------------*/
    /*-+------------------------------------*/
    setTimeout(function () {
        $('#slide12 .click').click(function () {

            var t=0;
            var o = { "items": [] }; // create an object with key items to hold array
            $('#timeform li').each(function () { // loop in to the input's wrapper
                var obj = {
                    name: $(this).find('[name]').val(), // place the name in a new object
                    tp:  $(this).find('[name]').attr("name")// time: $(this).find('.timepicker').val(), // place the url in a new object
                };
                o.items.push(obj); // push in the "o" object created
            });
            // strigify to show

            $.each(o.items, function (i, val) { // loop in to the input's wrapper
                if (val.name != "")  {
                        console.log(val.name);
                        t++;
                        console.log(t);

                    $('.lister li:nth-child(' + (i + 1) + ')').addClass('timed').html("<span class='tp' value=" + val.name + ">" + val.name + "</span> <span class='timepicks timepick" + (i+1) + "></span>");
                    if (t >= 2)  {
                        $('.arrows > .next').fadeIn();
                        $('.arrows > .next').addClass('open');
                    }
                }
            });
        });

        $('.lister > li').click(function () {
            $('.arrows > .next').fadeIn();
            $('.arrows > .next').addClass('open');
            $('.user-timer .start').bind( "click");
            var i = $(this).index();
            console.log(i, "index");

            //if ($(this).hasClass('timed')){
            console.log($(this).find('.timepick' + (i+1) ).text(), "text");
            $('.user-timer .user').html($(this).find('.tp').text());
            var timer = $('.user-timer .timer .clock');
            var leadingZero = function (n) {
                if (n < 10 && n >= 0) return '0' + n;
                else return n;
            }
            var minutes = 0;
            var seconds = 0;
            var clicked = true;
            var counter = null;
            var m = $('.min'),
                s = $('.sec');
            $('.user-timer .timer .clock .min').html("00");
            $('.user-timer .timer .clock .sec').html("00");
            $('.user-timer .start').click(function (e) {
                $('#Sslide17stop').get(0).currentTime = 0;
                $('#Sslide17stop').get(0).pause();
                $('#Sslide17start').get(0).currentTime = 0;
                $('#Sslide17start').get(0).play();

                e.preventDefault();
                console.log($(this));
                clearInterval(counter);
                if (clicked) {
                    counter = setInterval(function () {
                        console.log(counter, 'counter start');
                         if ( seconds < 59) {

                            seconds ++;
                             m.text(minutes);
                             s.text(leadingZero(seconds));
                        }
                         else {
                             minutes++;
                             seconds = 0;
                             seconds++;
                             m.text(minutes);
                             s.text(leadingZero(seconds));
                        }

                    }, 1000);
                }
                clicked = !clicked;
            });

            var totalTimes = 0;
            $('.user-timer .stop').click(function () {
                $('#Sslide17stop').get(0).currentTime = 0;
                $('#Sslide17stop').get(0).play();
                $('#Sslide17start').get(0).currentTime = 0;
                $('#Sslide17start').get(0).pause();
                $('.user-timer .start').unbind( "click");
                clearInterval(counter);

                $('.lister li .timepick' + (i+1)).html("").attr("value", 0 );
                if (seconds < 10 ) {
                    $('.lister li .timepick' + (i+1)).html( minutes + ":0" + seconds).attr("value", minutes + ":0" + seconds );}
                else {$('.lister li .timepick' + (i+1)).html( minutes + ":" + seconds ).attr("value", minutes + ":" + seconds );}
                m.text(minutes);
                s.text(leadingZero(seconds));
                $('.arrows > .next').fadeIn();
                $('.arrows > .next').addClass('open');
                /*--------------------------*/

                totalTimes += ((minutes + (seconds/60)));

                console.log('totalTimes', totalTimes.toFixed(0)); // strigify to show
                 $(".week-spent").html((totalTimes * 7 * 2.5).toFixed(0) + ' gallons');
                 $(".month-spent").html((totalTimes * 30 * 2.5).toFixed(0) + ' gallons');
                 $(".year-spent").html((totalTimes * 365 * 2.5).toFixed(0) + ' gallons');

                 /*---------------------------*/

            });
            //}

            $(this).find('span').css("color", "rgba(0, 0, 0, 0.5)");
            $(this).removeClass('timed').css("color", "rgba(0, 0, 0, 0.5)");
            console.log($(this));
        });

    }, 1000);
    /*--------------------------------*/
    $(".minutes-box .top-box").click(function () {
        var topbox = $(this);
        topbox.addClass('active');
        $('#Sslide23-27reveals').get(0).currentTime = 0;
        $('#Sslide23-27reveals').get(0).play();
        topbox.siblings().find('.week').fadeIn(500);
        setTimeout(function () {
            topbox.siblings().find('.month').fadeIn(500); }, 250);
        setTimeout(function () {
            topbox.siblings().find('.year').fadeIn(500); }, 500);
        });

    $(".cont-box .item").click(function () {
        $(this).removeClass('week month year');
        $(this).addClass('gallons');
        $(this).css("text-indent", "0");
        $('#Sslide23-27reveals').get(0).currentTime = 0;
        $('#Sslide23-27reveals').get(0).play();

        if ($(".cont-box .gallons").length == 9) {
            $('.arrows > .next').fadeIn();
            $('.arrows > .next').addClass('open');
        }
    });

});