$(document).ready(function () {

    completeFlip(24313);

    try
    {
        background.play();
        background.volume = 0.1;
    }
    catch(err)
    {
        //no sound - log error
    }

    $('#game-info').modal('show');

    $('.advance-btn').click(function () {
        $('#game-info').modal('hide');
        $('#final-slide').modal('show');
        try
        {
            Aicompleted.play();
            Aicompleted.volume = 0.1
        }
        catch (err)
        {
            //no sound - log error
        }
    });

    $(function () {
        $('.second-slide p').each(function (i) {
            $(this).delay((i++) * 600).fadeTo(600, 1);
        })
    });
    
    $('#div1').hide().fadeIn(8000);
    $('#div2').hide().fadeIn(8000);
    $('#div3').hide().fadeIn(8000);
    $('#div4').hide().fadeIn(8000);
    $('#div5').hide().fadeIn(8000);
    $('#div6').hide().fadeIn(8000);
    $('#div7').hide().fadeIn(8000);
    $('#div8').hide().fadeIn(8000);
    $('#div9').hide().fadeIn(8000);
    $('#div10').hide().fadeIn(8000);
    $('#div11').hide().fadeIn(8000);
    $('#div12').hide().fadeIn(8000);
    $('#div13').hide().fadeIn(8000);
    $('#div14').hide().fadeIn(8000);
    $('#div15').hide().fadeIn(8000);
    $('#div16').hide().fadeIn(8000);
    $('#div17').hide().fadeIn(8000);
    $('#div18').hide().fadeIn(8000);
    $('#div19').hide().fadeIn(8000);
    $('#div20').hide().fadeIn(8000);
    $('#div21').hide().fadeIn(8000);
    $('#div22').hide().fadeIn(8000);

    $("#div1 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 8000
    }, 'linear', 2000);

    $("#div2 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 12000
    }, 'linear', 2000);

    $("#div3 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 7000
    }, 'linear', 2000);

    $("#div4 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 14000
    }, 'linear', 2000);

    $("#div5 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 9000
    }, 'linear', 2000);

    $("#div6 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 7000
    }, 'linear', 2000);

    $("#div7 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 10000
    }, 'linear', 2000);

    $("#div8 > img").animate({ rotate: 60, "top": "+=219px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 8000
    }, 'linear', 2000);

    $("#div9 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 7000
    }, 'linear', 2000);

    $("#div10 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 5000
    }, 'linear', 2000);

    $("#div11 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 9000
    }, 'linear', 2000);

    $("#div12 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 14000
    }, 'linear', 2000);

    $("#div13 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 7000
    }, 'linear', 2000);

    $("#div14 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 6000
    }, 'linear', 2000);

    $("#div15 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 11000
    }, 'linear', 2000);

    $("#div16 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 12000
    }, 'linear', 2000);

    $("#div17 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 9000
    }, 'linear', 2000);

    $("#div18 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 6000
    }, 'linear', 2000);

    $("#div19 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 10000
    }, 'linear', 2000);

    $("#div20 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 8000
    }, 'linear', 2000);

    $("#div21 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 7000
    }, 'linear', 2000);

    $("#div22 > img").animate({ rotate: 60, "top": "+=220px" }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');

        },
        duration: 14000
    }, 'linear', 2000);

});