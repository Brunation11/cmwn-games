var memory_array = ['andean', 'asiatic', 'polar', 'panda', 'black', 'brown', 'sloth', 'sun'];
var correct_items = new Array();
var clicked_item = $(this).attr("#polar");

var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

background.load();
background.play();

$(document).ready(function () {

    $("#close").click(function () {
        $('#game-close').modal('show');
    });

    $("#no-button").click(function () {
        $("#quit").modal('hide');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
    });

    $('#next-button').click(function () {
        $("#putcontenthere").load("action_items/ai4.html");
    });

  //  $("#puck").click(function () {
    //  $("#c1").show();
     //   correct.play();
   // });

});

//Scoring table

$(function () {

    $("#c1").hide();
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();
    $("#c5").hide();

});

//Puck Movement

$(document).ready(function () {

    function loop() {
        $("#puck").click(function () {

            $('#carousel_ul').carousel().animate('pause', function () {
                //check to see where the carousel paused and find the selected item id
                var selected_item = $("#carousel_ul li")[2].id;
                selected_item = selected_item.replace("-li", "");
                
                //check to see if it is a polar bear
                if (selected_item === "polar-bear") {
                    //play correct sound
                    correct.load();
                    correct.play();

                    //increase bar
                    correct_items.push(selected_item);

                    //is the game over
                    if (correct_items.length === 5) {
                        //play game complete sound
                        complete.load();
                        complete.play();

                        //show the game complete modal
                        $("#game-complete").modal('show');
                    }

                    if (correct_items.length === 1) {
                        $("#c1").show();
                        if (document.getElementById("#polar") !== null) {
                            $('#puck').click(function () {
                                $('#carousel_ul').carousel().animate('pause');
                            });
                        }

                        correct.load();
                        correct.play();
                    }

                    if (correct_items.length === 2) {
                        $("#c2").show();
                        $('#carousel_ul li').trigger('pause', true);

                        correct.load();
                        correct.play();
                    }

                    if (correct_items.length === 3) {
                        $("#c3").show();
                        $('#carousel_ul li').trigger('pause', true);

                        correct.load();
                        correct.play();

                    }

                    if (correct_items.length === 4) {
                        $("#c4").show();
                        $('#carousel_ul li').trigger('pause', true);

                        correct.load();
                        correct.play();

                    } if (correct_items.length === 5) {
                        $("#c5").show();
                        $("#game-complete").modal('show').fadeOut();
                        background.pause();
                        complete.load();
                        complete.play();

                    }
                }

                else {
                    //play incorrect sound
                    wrong.load();
                    wrong.play();

                    //show modal of incorrect bear
                    $("#" + selected_item + "").modal('show');
                    setTimeout(function () { $("#" + selected_item + "").modal('hide'); }, 3000);

                }

            });
            slider.load();
            slider.play();
            $("#puck").animate({
                'marginTop': "-=100px"  //moves up
            }, 100).hide(1);
            $("#puck").delay(1).fadeTo("2000", 1, function () {
                inpocket.load();
                inpocket.play();
                $('#puck').css({ 'margin-top': "340px" }).slideDown(1);

                //correct_items.push(clicked_item);

                //if (correct_items.length === 1) {
                //    $("#c1").show();
                //    if (document.getElementById("#polar") !== null) {
                //        $('#puck').click(function () {
                //            $('#carousel_ul').carousel().animate('pause');
                //        });
                //    }
                    
                //    correct.load();
                //    correct.play();
                //}

                //if (correct_items.length === 2) {
                //    $("#c2").show();
                //    $('#carousel_ul li').trigger('pause', true);

                //    correct.load();
                //    correct.play();
                //}

                //if (correct_items.length === 3) {
                //    $("#c3").show();
                //    $('#carousel_ul li').trigger('pause', true);

                //    correct.load();
                //    correct.play();
                
                //}

                //if (correct_items.length === 4) {
                //    $("#c4").show();
                //    $('#carousel_ul li').trigger('pause', true);

                //    correct.load();
                //    correct.play();

                //} if (correct_items.length === 5) {
                //    $("#c5").show();
                //    $("#game-complete").modal('show').fadeOut();
                //    complete.load();
                //    complete.play();

                // alert("You Won!!");

                //} else if (correct_items.length === 5) {
                //    $("#andean-bear").modal('show').fadeOut();
                //    wrong.play();

                //    // alert("You Won!!");
                //}
            });
        });
    }
    loop();
});


//Carousel

$(document).ready(function () {

    //options( 1 - ON , 0 - OFF)
    var auto_slide = 1;
    var hover_pause = 0;
    var key_slide = 1;

    //speed of auto slide(
    var auto_slide_seconds = 900;
    /* IMPORTANT: i know the variable is called ...seconds but it's
    in milliseconds ( multiplied with 1000) '*/

    /*move the last list item before the first item. The purpose of this is
    if the user clicks to slide left he will be able to see the last item.*/
    $('#carousel_ul li:first').before($('#carousel_ul li:last'));

    //check if auto sliding is enabled
    if (auto_slide == 1) {
        /*set the interval (loop) to call function slide with option 'right'
        and set the interval time to the variable we declared previously */
        var timer = setInterval('slide("right")', auto_slide_seconds);

        /*and change the value of our hidden field that hold info about
        the interval, setting it to the number of milliseconds we declared previously*/
        $('#hidden_auto_slide_seconds').val(auto_slide_seconds);

    }

    //check if hover pause is enabled
    if (hover_pause == 1) {
        //when hovered over the list
        $('#carousel_ul').hover(function () {
            //stop the interval
            clearInterval(timer)
        }, function () {
            //and when mouseout start it again
            timer = setInterval('slide("right")', auto_slide_seconds);
        });

    }

    //check if key sliding is enabled
    if (key_slide == 1) {

        //binding keypress function
        $(document).bind('keypress', function (e) {
            //keyCode for left arrow is 37 and for right it's 39 '
            if (e.keyCode == 37) {
                //initialize the slide to left function
                slide('left');
            } else if (e.keyCode == 39) {
                //initialize the slide to right function
                slide('right');
            }
        });

    }

});

//FUNCTIONS BELLOW

//slide function
function slide(where) {


    //get the item width
    var item_width = $('#carousel_ul li').outerWidth() + 10;

    /* using a if statement and the where variable check
    we will check where the user wants to slide (left or right)*/
    if (where == 'left') {
        //...calculating the new left indent of the unordered list (ul) for left sliding
        var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
    } else {
        //...calculating the new left indent of the unordered list (ul) for right sliding
        var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;

    }

    //make the sliding effect using jQuery's animate function... '
    $('#carousel_ul:not(:animated)').animate({ 'left': left_indent }, 450, function () {

        $('ul').each(function () {
            // get current ul
            var $ul = $(this);
            // get array of list items in current ul
            var $liArr = $ul.children('li').slice(9,12);
            // sort array of list items in current ul randomly
            $liArr.sort(function (a, b) {
                // Get a random number between 0 and 10
                var temp = parseInt(Math.random() * 12);
                // Get 1 or 0, whether temp is odd or even
                var isOddOrEven = temp % 2;
                // Get +1 or -1, whether temp greater or smaller than 5
                var isPosOrNeg = temp > 5 ? 1 : -1;
                // Return -1, 0, or +1
                return (isOddOrEven * isPosOrNeg);
            })
            // append list items to ul
            .appendTo($ul);
        });

        /* when the animation finishes use the if statement again, and make an ilussion
        of infinity by changing place of last or first item*/
        if (where == 'left') {
            //...and if it slided to left we put the last item before the first item
            $('#carousel_ul li:first').before($('#carousel_ul li:last'));
        } else {
            //...and if it slided to right we put the first item after the last item
            $('#carousel_ul li:last').after($('#carousel_ul li:first'));
        }

        //...and then just get back the default left indent
        $('#carousel_ul').css({ 'left': '-210px' });
    });

}