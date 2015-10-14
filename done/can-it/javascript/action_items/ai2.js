    var start = document.getElementById("start1");
    var runout = document.getElementById("runout4");
    var correct_items = new Array();


$(document).ready(function () {

    ////// fade in dumpster items //////////////
    $('#myCarousel').hide().delay(500).fadeIn(500);
    ///////// hide all bootstrap modals /////////
    $('#quit-game').modal("hide");
    $('#fail-screen').modal("hide");
    $('#retry-screen').modal("hide");
    $('#flip-screen').modal("hide");

    ////////// quit screen //////////////////////////////
    $('.scape-Btn').click(function(){
        $('#quit-game').modal("show");
    });
    //////// hide quit screen ///////////////////////
    $('#no-btn').click(function(){
        $('#quit-game').modal("hide");
    });

    /////// replay game /////////////////////////////
    $('#re-try-2').click(function(){
        $("#putcontenthere").load("action_items/ai2.html");
    });

    $('#re-try').click(function(){
        $("#putcontenthere").load("action_items/ai2.html");
    });

    /////// advance to flip screen ///////////////
    $('#next-button2').click(function(){
        $('#flip-screen').modal("show");
            try
            {
                flip.load();
                flip.play();
            }
            catch (err) {
                //no sound - log error
            }
    });

    ///// advance out of the ai after flip screen ///////////////////
    $('#next-button3').click(function(){
        ///// ------------ whatever the next screen may be -------/////
    });


    // hide points animation
    $('.win').hide();
    $('.loose').hide();

    ///////////////////////// When document loads, this function gives a random oreder of items ///////////////////////////////////////////////
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
    ////////////////////// End of random functions /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.item').click(function () {
            //stop the main carousel
            $('#carousel_ul').carousel().animate('pause',2000);
    });
    // All items click
    $(".Hit_One,.Hit_two,.Hit_three,.Hit_four,.Hit_five,.Hit_six,.Hit_seven,.Hit_eight,.Hit_nine,.Hit_ten,.Hit_eleven,.Hit_twelve,.Hit_thirteen,.Hit_fourteen,.Hit_fifteen,.Hit_sixteen,.Hit_seventeen,.Hit_eighteen,.Hit_nineteen,.Hit_twenty,.Hit_twentyone,.Hit_twentytwo,.Hit_twentythree,.Hit_twentyfour,.Hit_twentyfive,.Hit_twentysix,.Hit_twentyseven,.Hit_twentyeight,.Hit_twentynine,.Hit_thirty,.Hit_thirtyone,.Hit_thirtytwo,.Hit_thirtythree,.Hit_thirtyfour,.Hit_thirtyfive,.Hit_thirtysix,.Hit_thirtyseven,.Hit_thirtyeight,.Hit_thirtynine,.Hit_forty").click(function (event) {

        var click_item = $(this).attr('id');
        var click_correct = $(this).attr('data-correct');
        var item_animate = click_item + "#";
        var current = $('.item');

        var selected_item = $("#carousel_ul li")[2].id;
        selected_item = selected_item.replace("-li", "");
        // alert(click_correct + " " +selected_item);

        /// Main if statement
        if (click_correct == selected_item) {


            correct_items.push(selected_item);

            if (correct_items.length == 1) {
                playCorrect();

                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top : -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 10);
            }

            if (correct_items.length === 2) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 3) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 4) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 5) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 6) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);
                $('.carousel-inner').carousel({ pause: true, interval: false });
            }
            if (correct_items.length === 7) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 8) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 9) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 10) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 11) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 12) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 13) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 14) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 15) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 16) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 17) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 18) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 19) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 20) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 21) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 22) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 23) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 24) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 25) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 26) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 27) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 28) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 29) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 30) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 31) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 32) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 33) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 34) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 35) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 36) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 37) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 38) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 39) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

            if (correct_items.length === 40) {
                playCorrect();
                $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top: -10 }, 800).hide(1000);
                $('.carousel-inner').parent().carousel('next', 1);

            }

        } ///// End om main "if" statement

        else {
                    //play incorrect sound
                    playWrong();
                    $('#score p').html(function (i, val) { return val * 1 - 30; });
                    $('.loose').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                }

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
    }); /// End of big click function

}); ///End of document.ready

//////////////// Timer functionality ////////////////////////////////////////////////////////////////////////////////
$.fn.timer = function( callback ) {
    callback = callback || function() {};
    return this.each(function() {
        var $timer = $( this ),
            $minutesEl = $timer.find( '.minutes' ),
            $secondsEl = $timer.find( '.seconds' ),
            interval = 1000,
            timer = null,
            start = 60,
            minutesText = $minutesEl.text(),
            minutes = ( minutesText[0] == '0' ) ? minutesText[1] : minutesText[0],
            m = Number( minutes );

            timer = setInterval(function() {
                start--;
                if( start == 0 ) {
                    start = 60;

                    $secondsEl.text( '00' );

                    m--;

                    if( m == 0 ) {
                        clearInterval( timer );
                        $minutesEl.text( '00' );
                        callback();

                    }
                } else {

                    if( start >= 10 ) {

                        $secondsEl.text( start.toString() );

                    } else {

                        $secondsEl.text( '0' + start.toString() );


                    }
                    if( minutes.length == 2 ) {
                        $minutesEl.text( m.toString() );
                    } else {
                        if( m == 1 ) {
                            $minutesEl.text( '00' );
                        } else {
                            $minutesEl.text( '0' + m.toString() );
                        }
                    }

                }

            }, interval);

    });

};

$(function() {
    $( '.timer' ).timer(function() {
        document.getElementById( 'timeout' ).play();
        document.getElementById( 'clock' ).pause();
        document.getElementById( 'background' ).pause();


        if (correct_items.length >= 5) {
            $('#retry-screen').modal("show");
            $('#fail-screen').modal("hide");
        } else {
            $('#fail-screen').modal("show");
            $('#retry-screen').modal("hide");
        }
    });

});
