    var start = document.getElementById("start1");
    var runout = document.getElementById("runout4");
    var correct_items = new Array();


$(document).ready(function () {

///////////////////////// When document loads, this function gives a random oreder of items ///////////////////////////////////////////////
    $("div.carousel-inner div").sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
    }).each(function(){
        var $t = $(this),
            color = $t.attr("class");
        $t.css({backgroundColor: color}).appendTo( $t.parent() );

    });


    $('.carousel-inner').parent().carousel({ pause: true, interval: false });



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
        $('#myCarousel.carousel').carousel({
            pause: true,
            interval: false
        }).carousel(0);
    });

    $('#re-try').click(function(){
        $("#putcontenthere").load("action_items/ai2.html");
        $('#myCarousel.carousel').carousel({
            pause: true,
            interval: false
        }).carousel(0);
    });

    /////// advance to flip screen ///////////////
    $('#next-button2').click(function(){
        $('#flip-screen').modal("show");
        $('#retry-screen').modal("hide");
            try
            {
                flip.load();
                flip.play();
            }
            catch (err) {
                //no sound - log error
            }
            slide12.load();
            slide12.play();
    });

    ///// advance out of the ai after flip screen ///////////////////
    $('#next-button3').click(function(){
        ///// ------------ whatever the next screen may be -------/////
    });


    // hide points animation

    $('.win').hide();
    $('.loose').hide();

    ////////////////////// End of random functions /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // All items click
    $(".hit").dblclick(function (event) {


        var click_item = $(this).attr('id');
        var click_correct = $(this).attr('data-correct');
        var drop_correct = $(this).attr('data-correct');
        var item_animate = click_item + "#";
        var current = $('.item');

        var selected_item = $("#carousel_ul li")[2].id;

        selected_item = selected_item.replace("-li", "");

        if(selected_item == ""){
            $('.carousel-inner').parent().carousel('next', 1);
        } else {
            /// Main if statement
            if (click_correct) {
                correct_items.push(click_correct);

                // playSound(correct_items);
                $('.carousel-inner').parent().carousel('next', 1);

            } ///// End of main "if" statement
            else {
                //play incorrect sound

                $('.carousel-inner').parent().carousel('next', 1);

            }
        }/// End of first statement



        var wait = setInterval(function() {

            if( !$("#" + click_item + "Drop_" + "" ).is(":animated") ) {
                clearInterval(wait);
                // alert('hey');
                console.log(drop_correct + "" + selected_item);
                 if(drop_correct == "")
                {
                    $('.carousel-inner').parent().carousel('next', 1);
                }else {
                if (drop_correct == selected_item)
                {
                    $('.win').show().hide(1000);
                    playCorrect();
                    $('#score p').html(function (i, val) { return val * 1 + 15; });
                }
                else
                {
                    $('.loose').show().hide(1000);
                    playWrong();
                    $('#score p').html(function (i, val) { return val * 1 - 15; });
                }
            }

            }
        }, 700);

        $("#" + click_item + "1").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);
        $("#" + click_item + "2").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "3").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "4").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "5").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "6").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "7").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "8").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "9").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "10").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "11").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "12").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "13").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "14").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "15").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "16").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "17").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "18").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "19").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "20").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "21").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "22").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "23").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "24").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "25").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "26").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "27").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "28").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "29").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "30").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "31").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "32").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "33").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "34").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "35").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "36").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "37").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "38").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "39").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);

        $("#" + click_item + "40").animate({
            top: "+=260px"  //moves down
        }, 400).hide(1);
    }); /// End of big click function


function playSound(){
//Play music here
    var audio = document.getElementById("object");
    $("#banana-peel").get(audio);
    audio.play();


}


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
            slide11.load();
            slide11.play();
        } else {
            $('#fail-screen').modal("show");
            $('#retry-screen').modal("hide");
        }
    });

});