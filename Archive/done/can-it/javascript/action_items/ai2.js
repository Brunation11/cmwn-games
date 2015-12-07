    var start = document.getElementById("start1");
    var runout = document.getElementById("runout4");
    var correct_items = new Array();


$(document).ready(function () {
background.volume = "0.3";
clock.volume = "0.3";
///////////////////////// When document loads, this function gives a random oreder of items ///////////////////////////////////////////////
    $("div.carousel-inner div").sort(function(){
        return Math.random()*40 > 1 ? 1 : -1;
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
if($('#apple-core').is(':visible')) {
            object1.play();
       } else {
            object1.pause();
       }


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
       if($('#apple-core').is(':visible')) {
            object1.play();
       } else {
            object1.pause();
       }
        if($('#batteries').is(':visible')) {
            object2.play();
       } else {
            object2.pause();
       }
       if($('#computer').is(':visible')) {
            object3.play();
       } else {
            object3.pause();
       }
        if($('#carton-boxes').is(':visible')) {
            object4.play();
       } else {
            object4.pause();
       }
        if($('#banana-peel').is(':visible')) {
            object5.play();
       } else {
            object5.pause();
       }
        if($('#bulb').is(':visible')) {
            object6.play();
       } else {
            object6.pause();
       }
       if($('#carrot').is(':visible')) {
            object7.play();
       } else {
            object7.pause();
       }
       if($('#diaper').is(':visible')) {
            object8.play();
       } else {
            object8.pause();
       }
       if($('#metal-can').is(':visible')) {
            object9.play();
       } else {
            object9.pause();
       }
       if($('#paper-box').is(':visible')) {
            object10.play();
       } else {
            object10.pause();
       }
       if($('#chicken').is(':visible')) {
            object11.play();
       } else {
            object11.pause();
       }
       if($('#milk-carton').is(':visible')) {
            object12.play();
       } else {
            object12.pause();
       }
       if($('#mirror').is(':visible')) {
            object13.play();
       } else {
            object13.pause();
       }
       if($('#magazine').is(':visible')) {
            object14.play();
       } else {
            object14.pause();
       }
       if($('#styrofoam').is(':visible')) {
            object15.play();
       } else {
            object15.pause();
       }
       if($('#egg').is(':visible')) {
            object16.play();
       } else {
            object16.pause();
       }
       if($('#phone').is(':visible')) {
            object17.play();
       } else {
            object17.pause();
       }
       if($('#cracker').is(':visible')) {
            object18.play();
       } else {
            object18.pause();
       }
       if($('#feather').is(':visible')) {
            object19.play();
       } else {
            object19.pause();
       }
       if($('#bag').is(':visible')) {
            object20.play();
       } else {
            object20.pause();
       }
       if($('#pasta').is(':visible')) {
            object21.play();
       } else {
            object21.pause();
       }
       if($('#plastic-bottle').is(':visible')) {
            object22.play();
       } else {
            object22.pause();
       }
       if($('#flower').is(':visible')) {
            object23.play();
       } else {
            object23.pause();
       }
       if($('#plastic-package').is(':visible')) {
            object24.play();
       } else {
            object24.pause();
       }
       if($('#leaf').is(':visible')) {
            object25.play();
       } else {
            object25.pause();
       }
       if($('#soap').is(':visible')) {
            object26.play();
       } else {
            object26.pause();
       }
       if($('#hay').is(':visible')) {
            object27.play();
       } else {
            object27.pause();
       }
       if($('#socks').is(':visible')) {
            object28.play();
       } else {
            object28.pause();
       }
       if($('#soda-bottle').is(':visible')) {
            object29.play();
       } else {
            object29.pause();
       }
       if($('#peanut').is(':visible')) {
            object30.play();
       } else {
            object30.pause();
       }
       if($('#soda-can').is(':visible')) {
            object31.play();
       } else {
            object31.pause();
       }
       if($('#lettuce').is(':visible')) {
            object32.play();
       } else {
            object32.pause();
       }
       if($('#tv').is(':visible')) {
            object33.play();
       } else {
            object33.pause();
       }
       if($('#tea').is(':visible')) {
            object34.play();
       } else {
            object34.pause();
       }
       if($('#tissue').is(':visible')) {
            object35.play();
       } else {
            object35.pause();
       }
       if($('#tube').is(':visible')) {
            object36.play();
       } else {
            object36.pause();
       }

            } ///// End of main "if" statement
            else {
                //play incorrect sound

                $('.carousel-inner').parent().carousel('next', 1);
                  if($('#apple-core').is(':visible')) {
            object1.play();
       } else {
            object1.pause();
       }
        if($('#batteries').is(':visible')) {
            object2.play();
       } else {
            object2.pause();
       }
       if($('#computer').is(':visible')) {
            object3.play();
       } else {
            object3.pause();
       }
        if($('#carton-boxes').is(':visible')) {
            object4.play();
       } else {
            object4.pause();
       }
        if($('#banana-peel').is(':visible')) {
            object5.play();
       } else {
            object5.pause();
       }
        if($('#bulb').is(':visible')) {
            object6.play();
       } else {
            object6.pause();
       }
       if($('#carrot').is(':visible')) {
            object7.play();
       } else {
            object7.pause();
       }
       if($('#diaper').is(':visible')) {
            object8.play();
       } else {
            object8.pause();
       }
       if($('#metal-can').is(':visible')) {
            object9.play();
       } else {
            object9.pause();
       }
       if($('#paper-box').is(':visible')) {
            object10.play();
       } else {
            object10.pause();
       }
       if($('#chicken').is(':visible')) {
            object11.play();
       } else {
            object11.pause();
       }
       if($('#milk-carton').is(':visible')) {
            object12.play();
       } else {
            object12.pause();
       }
       if($('#mirror').is(':visible')) {
            object13.play();
       } else {
            object13.pause();
       }
       if($('#magazine').is(':visible')) {
            object14.play();
       } else {
            object14.pause();
       }
       if($('#styrofoam').is(':visible')) {
            object15.play();
       } else {
            object15.pause();
       }
       if($('#egg').is(':visible')) {
            object16.play();
       } else {
            object16.pause();
       }
       if($('#phone').is(':visible')) {
            object17.play();
       } else {
            object17.pause();
       }
       if($('#cracker').is(':visible')) {
            object18.play();
       } else {
            object18.pause();
       }
       if($('#feather').is(':visible')) {
            object19.play();
       } else {
            object19.pause();
       }
       if($('#bag').is(':visible')) {
            object20.play();
       } else {
            object20.pause();
       }
       if($('#pasta').is(':visible')) {
            object21.play();
       } else {
            object21.pause();
       }
       if($('#plastic-bottle').is(':visible')) {
            object22.play();
       } else {
            object22.pause();
       }
       if($('#flower').is(':visible')) {
            object23.play();
       } else {
            object23.pause();
       }
       if($('#plastic-package').is(':visible')) {
            object24.play();
       } else {
            object24.pause();
       }
       if($('#leaf').is(':visible')) {
            object25.play();
       } else {
            object25.pause();
       }
       if($('#soap').is(':visible')) {
            object26.play();
       } else {
            object26.pause();
       }
       if($('#hay').is(':visible')) {
            object27.play();
       } else {
            object27.pause();
       }
       if($('#socks').is(':visible')) {
            object28.play();
       } else {
            object28.pause();
       }
       if($('#soda-bottle').is(':visible')) {
            object29.play();
       } else {
            object29.pause();
       }
       if($('#peanut').is(':visible')) {
            object30.play();
       } else {
            object30.pause();
       }
       if($('#soda-can').is(':visible')) {
            object31.play();
       } else {
            object31.pause();
       }
       if($('#lettuce').is(':visible')) {
            object32.play();
       } else {
            object32.pause();
       }
       if($('#tv').is(':visible')) {
            object33.play();
       } else {
            object33.pause();
       }
       if($('#tea').is(':visible')) {
            object34.play();
       } else {
            object34.pause();
       }
       if($('#tissue').is(':visible')) {
            object35.play();
       } else {
            object35.pause();
       }
       if($('#tube').is(':visible')) {
            object36.play();
       } else {
            object36.pause();
       }

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