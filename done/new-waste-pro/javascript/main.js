var game = {
    currentSlide: 1,
    loadScreen : function(slide) {
        this.currentSlide = slide;

         $('.replace').hide();

        var divId = "#div" + slide;

        $(divId).show();
        console.log("current slide: " + this.currentSlide);

        this.loadScreenCallback(this.currentSlide);
    },

    loadNextScreen: function() {
        this.currentSlide++;

        this.loadScreen(this.currentSlide);

    },

    loadPrevScreen: function() {
        this.currentSlide--;

        this.loadScreen(this.currentSlide);
    }

};

game.loadScreenCallback = function (currentSlide) {
    if (currentSlide == 12) {
    	$('.next').hide();
    }
    if (currentSlide == 11) {
        vo61.play();
    }
    if (currentSlide == 10) {
        vo56.play();
    }
    if (currentSlide == 9) {
        vo56.play();
    }

    if (currentSlide == 8) {
        pledges.play();
        vo55.play();
        setTimeout(function(){
            $('.next').fadeIn(2000);
        },5500);
    }
    if (currentSlide == 7) {
        vo46.play();
    }
    if (currentSlide == 6) {
        vo27.play();
    }
    if (currentSlide == 4) {

    }
    if (currentSlide == 3) {
        vo3.play();
    }
    if (currentSlide == 2) {
        $('.arrows').fadeIn(500);
        $('.next').hide();
        $('.card').removeClass('flipped');
    }
    if (currentSlide == 1) {
        $('#play, .next').fadeIn(500);
        $('.arrows').fadeOut(100);
    }

}

game.loadScreen(1);

var full;
var correct_items_trash = new Array();
var balance = new Array(); ///// feed variable with selected_one variable /////
var four_btns = new Array(); ///// feed variable with green_btns variable ////
var div_five_btns = new Array();
var spin = new Array();//// feed variable spin with spin_btn ////
var pledge = new Array();
$(document).ready(function () {

    var bgMusic = $("#background")[0],
    playing = true;

    bgMusic.addEventListener('ended', function () {
        this.currentTime = 0;
        if (playing) {
            this.play();
        }
    }, false);
    background.play();

    //// once droped items are equal to 5, send me to next screen/////
    /// balance variable ////
    var selected_one = $(".toNext");
    var button_1 = $('.button-1');
    var div_5 = $('.answer1');
    var spin_btn = $('.spin');
    var pledge_btn = $('.pledge');
    $('#play').click(function () {
        background.pause();
        vo1.play();
    });

    $(".bkg-image2").hide();

    /// balance conditional statement ////
    $('.toNext').click(function() {

        balance.push(selected_one);

        if (balance.length == 5) {
            game.loadNextScreen();
            if($('#b1').is(':visible')) {
                vo21.play();
            }
            if($('#b2').is(':visible')) {
                // vo21.play();
            }
            if($('#b3').is(':visible')) {
                vo19.play();
            }
            if($('#b4').is(':visible')) {
                vo22a.play();
            }
        }
    });

// randomize function for
// first set of facts in div 4 and 5///
$('.quote').hide();
$('.quote2').hide();
function selectRandomListItem() {

/////////  first set of buttons ////////////////////
    $('#fact-text .quote:gt(0)').hide( function(){
        if($('#b1').is(':visible')) {
            vo19.pause();
            vo21.play();
            vo22a.pause();
        }
        if($('#b2').is(':visible')) {
            vo19.pause();
            vo21.pause();
            vo22a.pause();
        }
        if($('#b3').is(':visible')) {
            vo19.play();
            vo21.pause();
            vo22a.pause();
        }
        if($('#b4').is(':visible')) {
            vo19.pause();
            vo21.pause();
            vo22a.play();
        }
    });

        var random = $('#fact-text > .quote').not(':visible') //Select only the hidden one
        var swapRandom = Math.floor(Math.random() * random.length); //Use only those hidden, remove the 1 since we are now on a 0-based index

        $('#fact-text > .quote').hide();
        random.eq(swapRandom).show();

///////// Second set of buttons ///////////////
    $('#fact-text-2 .quote2:gt(0)').hide( function() {
        if($('#c1').is(':visible')) {
            vo23.pause();
            vo24.pause();
            vo25.play();
            vo26.pause();
        }
        if($('#c2').is(':visible')) {
            vo23.pause();
            vo24.pause();
            vo25.pause();
            vo26.play();
        }
        if($('#c3').is(':visible')) {
            vo23.play();
            vo24.pause();
            vo25.pause();
            vo26.pause();
        }
        if($('#c4').is(':visible')) {
            vo23.pause();
            vo24.play();
            vo25.pause();
            vo26.pause();
        }
    });

    var random_two = $('#fact-text-2 > .quote2').not(':visible') //Select only the hidden one
    var swapRandom_two = Math.floor(Math.random() * random_two.length);

    $('#fact-text-2 > .quote2').hide();
    random_two.eq(swapRandom_two).show();

};
selectRandomListItem();

    // feed array to go to next screen //
    $('.spin').click(function() {
        pull.play();
        spins.play();
        setTimeout(function () {
            stops.play();
        }, 3600);

        spin.push(spin_btn);

        if (spin.length == 7) {
            setTimeout(function(){
                $('.next').fadeIn(500);
                endslot.play();
            },5500);
        }
    });

    // feed array to go to next screen //
    $('.pledge').click(function() {
        pledge.push(pledge_btn);

        if (pledge.length == 4) {
            $('.next').fadeIn(500);
        }
    });

    $('#plastic').click(function() {
        vo62.play();
        flip.play();
        game.loadNextScreen();
    });

    $('.next').on('click', function(){
        game.loadNextScreen();
        $('.next').hide();
        cont.load();
        cont.play();
    });

    $('.prev').on('click', function(){
        game.loadPrevScreen();
        cont.load();
        cont.play();
    });

    $("#start-over").on('click', function() {
        game.loadScreen(1);
    });

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

    $('#Btn-hide1').click(function () {
        $('#retry-level').modal('hide');
    });

    $('.card').click(function () {
        $(this).addClass('flipped');
        setTimeout(function () { $('.next').fadeIn(500); }, 1000);
        cards.play();
        vo2.play();
    });

    //////// DIV3 /////////

    $('#n1').hide();
    $('#n2').hide();
    $('#n3').hide();
    $('#n4').hide();
    $('#n5').hide();
    $('#buses').hide();
    $('#cars').hide();
    $('#elephants').hide();
    $('#hippos').hide();
    $('#cats').hide();

    $("#drag").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag2").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag3").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag4").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag5").draggable({ cursor: 'move', revert: 'invalid' });

    $("#drop1").droppable({
        tolerance: "pointer",
        accept: "#drag",
        drop: function () {

            try {
                slide.play();
                right.play();
                vo6.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#arm").animate({  borderSpacing: +18 }, {
                step: function(now,fx) {
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');

            $("#lefty").animate({
                 top: '-45px',
                 left: "-5px"
             }, 600);

            $("#righty").animate({
                 top: '43px',
                 left: "10px"
             }, 600);

            $('#drag').animate({
                 top: '-220px',
                 left: "315px"
             }, 600);

            $("#head").fadeOut();
            $('#buses').fadeIn();

            $('#n1').fadeIn().click(function() {
                cont.play();
                $('#n1').fadeOut();
                $("#head").fadeIn();
                $('#buses').fadeOut();
                $("#drag").hide();
                $("#arm").animate({  borderSpacing: +0 }, {
                    step: function(now,fx) {
                      $(this).css('transform','rotate('+now+'deg)');
                    },
                    duration:'slow'
                },'linear');
                $("#lefty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
                $("#righty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
            });
        }
    });

    $("#drop2").droppable({
        tolerance: "pointer",
        accept: "#drag2",
        drop: function () {

            try {
                slide.play();
                right.play();
                vo4.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#arm").animate({  borderSpacing: +18 }, {
                step: function(now,fx) {
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');

            $("#lefty").animate({
                 top: '-45px',
                 left: "-5px"
             }, 600);

            $("#righty").animate({
                 top: '43px',
                 left: "10px"
             }, 600);

            $('#drag2').animate({
                 top: '-220px',
                 left: "225px"
             }, 600);

            $("#head").fadeOut();
            $('#cars').fadeIn();

            $('#n2').fadeIn().click(function() {
                cont.play();
                $('#n2').fadeOut();
                $("#head").fadeIn();
                $('#cars').fadeOut();
                $("#drag2").hide();
                $("#arm").animate({  borderSpacing: +0 }, {
                    step: function(now,fx) {
                      $(this).css('transform','rotate('+now+'deg)');
                    },
                    duration:'slow'
                },'linear');
                $("#lefty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
                $("#righty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
            });
        }
    });

    $("#drop3").droppable({
        tolerance: "pointer",
        accept: "#drag3",
        drop: function () {
            try {
                slide.play();
                right.play();
                vo5.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#arm").animate({  borderSpacing: +18 }, {
                step: function(now,fx) {
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');

            $("#lefty").animate({
                 top: '-45px',
                 left: "-5px"
             }, 600);

            $("#righty").animate({
                 top: '43px',
                 left: "10px"
             }, 600);

            $('#drag3').animate({
                 top: '-220px',
                 left: "135px"
             }, 600);

            $("#head").fadeOut();
            $('#elephants').fadeIn();

            $('#n3').fadeIn().click(function() {
                cont.play();
                $('#n3').fadeOut();
                $("#head").fadeIn();
                $('#elephants').fadeOut();
                $("#drag3").hide();
                $("#arm").animate({  borderSpacing: +0 }, {
                    step: function(now,fx) {
                      $(this).css('transform','rotate('+now+'deg)');
                    },
                    duration:'slow'
                },'linear');
                $("#lefty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
                $("#righty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
            });
        }
    });

    $("#drop4").droppable({
        tolerance: "pointer",
        accept: "#drag4",
        drop: function () {
            try {
                slide.play();
                right.play();
                vo8.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#arm").animate({  borderSpacing: +18 }, {
                step: function(now,fx) {
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');

            $("#lefty").animate({
                 top: '-45px',
                 left: "-5px"
             }, 600);

            $("#righty").animate({
                 top: '43px',
                 left: "10px"
             }, 600);

            $('#drag4').animate({
                 top: '-220px',
                 left: "45px"
             }, 600);

            $("#head").fadeOut();
            $('#hippos').fadeIn();

            $('#n4').fadeIn().click(function() {
                cont.play();
                $('#n4').fadeOut();
                $("#head").fadeIn();
                $('#hippos').fadeOut();
                $("#drag4").hide();
                $("#arm").animate({  borderSpacing: +0 }, {
                    step: function(now,fx) {
                      $(this).css('transform','rotate('+now+'deg)');
                    },
                    duration:'slow'
                },'linear');
                $("#lefty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
                $("#righty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
            });
        }
    });

    $("#drop5").droppable({
        tolerance: "pointer",
        accept: "#drag5",
        drop: function () {
            try {
            	slide.play();
                right.play();
                vo7.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#arm").animate({  borderSpacing: +18 }, {
                step: function(now,fx) {
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');

            $("#lefty").animate({
                 top: '-45px',
                 left: "-5px"
             }, 600);

            $("#righty").animate({
                 top: '43px',
                 left: "10px"
             }, 600);

            $('#drag5').animate({
                 top: '-220px',
                 left: "-45px"
             }, 600);

            $("#head").fadeOut();
            $('#cats').fadeIn();

            $('#n5').fadeIn().click(function() {
                cont.play();
                $('#n5').fadeOut();
                $("#head").fadeIn();
                $('#cats').fadeOut();
                $("#drag5").hide();
                $("#arm").animate({  borderSpacing: +0 }, {
                    step: function(now,fx) {
                      $(this).css('transform','rotate('+now+'deg)');
                    },
                    duration:'slow'
                },'linear');
                $("#lefty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
                $("#righty").animate({
                    top: '0px',
                    left: "0px"
                }, 600);
            });
        }
    });

    //////// DIV4 /////////

$('.button-1').click(function (){
    on.load();
    on.play();
    right.load();
    right.play();
    setTimeout(function () {
        
    }, 1500);

four_btns.push(button_1);
if (four_btns.length == 4) {
    $('.next').fadeIn(500);
}
selectRandomListItem();

});

$('.button-2').click(function(){
    on.load();
    on.play();
    wrong.load();
    wrong.play();
});

// $('.landfill').click(function(){
//     on.load();
//     on.play();
//     vo11.load();
//     vo11.play();
//     setTimeout(function () {
//         vo19.play();
//     }, 1500);


// });

// $('.incineration').click(function(){
//     on.load();
//     on.play();
//     vo14.load();
//     vo14.play();
//     setTimeout(function () {
//         vo22a.play();
//     }, 1500);


// });


    ///////// DIV 5 ////////////

$('.answer1').click(function() {
    right.load();
    right.play();
    div_five_btns.push(div_5);
    if (div_five_btns.length == 4) {
        $('.next').fadeIn(500);
    }
selectRandomListItem();

});

$('.answer2').click(function() {
    wrong.load();
    wrong.play();
});
// $('.leachate').click(function (){
//     on.load();
//     on.play();
//     setTimeout(function () {
//         vo25.play();
//     }, 1500);
//     $(".leachate-text").fadeIn(500);
//     $(".methane-gas-text").hide();
//     $(".contamination-text").hide();
//     $(".pollution-text").hide();
// });

// $('.methane-gas').click(function(){
//     on.load();
//     on.play();
//     vo18.load();
//     vo18.play();
//     setTimeout(function () {
//         vo26.play();
//     }, 1500);
//     $(".contamination-text").hide();
//     $(".leachate-text").hide();
//     $(".pollution-text").hide();
//     $(".methane-gas-text").fadeIn(500);
// });

// $('.contamination').click(function(){
//     on.load();
//     on.play();
//     vo15.load();
//     vo15.play();
//     setTimeout(function () {
//         vo23.play();
//     }, 1500);
//     $(".contamination-text").fadeIn(500);
//     $(".leachate-text").hide();
//     $(".pollution-text").hide();
//     $(".methane-gas-text").hide();
// });

// $('.pollution').click(function(){
//     on.load();
//     on.play();
//     vo16.load();
//     vo16.play();
//     setTimeout(function () {
//         vo24.play();
//     }, 1500);
//     $(".pollution-text").fadeIn(500);
//     $(".methane-gas-text").hide();
//     $(".leachate-text").hide();
//     $(".contamination-text").hide();

// });

    //////// DIV6 /////////

$("#item").draggable({ cursor: 'move', revert: 'invalid' });
$("#item2").draggable({ cursor: 'move', revert: 'invalid' });
$("#item3").draggable({ cursor: 'move', revert: 'invalid' });
$("#item4").draggable({ cursor: 'move', revert: 'invalid' });
$("#item5").draggable({ cursor: 'move', revert: 'invalid' });
$("#item6").draggable({ cursor: 'move', revert: 'invalid' });
$("#item7").draggable({ cursor: 'move', revert: 'invalid' });
$("#item8").draggable({ cursor: 'move', revert: 'invalid' });
$("#item9").draggable({ cursor: 'move', revert: 'invalid' });


$(".droppable").droppable({
    tolerance: "pointer",
    accept: "#item",
    drop: function () {
        trash.load();
        trash.play();
        vo43.play();
        $("#item").css('opacity','0');
        $(".orange-text").fadeIn(500);
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(1);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable2").droppable({
    tolerance: "pointer",
    accept: "#item2",
    drop: function () {
        trash.load();
        trash.play();
        vo32.play();
        $("#item2").css('opacity','0');
        $(".shoe-text").fadeIn(500);
        $(".orange-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(2);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable3").droppable({
    tolerance: "pointer",
    accept: "#item3",
    drop: function () {
        trash.load();
        trash.play();
        vo37.play();
        $("#item3").css('opacity','0');
        $(".can-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(3);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable4").droppable({
    tolerance: "pointer",
    accept: "#item4",
    drop: function () {
        trash.load();
        trash.play();
        vo28.play();
        $("#item4").css('opacity','0');
        $(".shirt-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(4);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable5").droppable({
    tolerance: "pointer",
    accept: "#item5",
    drop: function () {
        trash.load();
        trash.play();
        milk.play();
        $("#item5").css('opacity','0');
        $(".milk-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(5);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable6").droppable({
    tolerance: "pointer",
    accept: "#item6",
    drop: function () {
        trash.load();
        trash.play();
        vo34.play();
        $("#item6").css('opacity','0');
        $(".bottle-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(6);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable7").droppable({
    tolerance: "pointer",
    accept: "#item7",
    drop: function () {
        trash.load();
        trash.play();
        vo45.play();
        $("#item7").css('opacity','0');
        $(".battery-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".paper-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(7);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable8").droppable({
    tolerance: "pointer",
    accept: "#item8",
    drop: function () {
        trash.load();
        trash.play();
        vo42.play();
        $("#item8").css('opacity','0');
        $(".paper-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".foil-text").hide();
        $("#frame").show();
        correct_items_trash.push(8);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

$(".droppable9").droppable({
    tolerance: "pointer",
    accept: "#item9",
    drop: function () {
        trash.load();
        trash.play();
        vo30.play();
        $("#item9").css('opacity','0');
        $(".foil-text").fadeIn(500);
        $(".orange-text").hide();
        $(".shoe-text").hide();
        $(".can-text").hide();
        $(".shirt-text").hide();
        $(".milk-text").hide();
        $(".bottle-text").hide();
        $(".battery-text").hide();
        $(".paper-text").hide();
        $("#frame").show();
        correct_items_trash.push(9);
        if (correct_items_trash.length === 9) {
            //pop or redirect your game complete screen
            // alert('hi');
            $('.next').fadeIn(500);
        }
    }
});

//////// DIV9 /////////
$(".cancel-btn").click(function(){
    vo57.pause();
    vo58.pause();
    vo59.pause();
    vo60.pause();
    $("#paper-towels").modal('hide');
    $("#plastic-bottles").modal('hide');
    $("#plastic-utensils").modal('hide');
    $("#plastic-bags").modal('hide');
});

$(".paper-towels").click(function(){
    items.load();
    items.play();
    vo57.play();
    $("#paper-towels").modal('show');
});

$(".plastic-bottles").click(function(){
    items.load();
    items.play();
    vo58.play();
    $("#plastic-bottles").modal('show');
});

$(".plastic-utensils").click(function(){
    items.load();
    items.play();
    vo60.play();
    $("#plastic-utensils").modal('show');
});

$(".plastic-bags").click(function(){
    items.load();
    items.play();
    vo59.play();
    $("#plastic-bags").modal('show');
});


//////// DIV10 /////////
$(".paper-towels1").click(function(){
    items.load();
    items.play();
    $("#plastic-bags1a img").hide();
    $("#plastic-bottles1a img").hide();
    $("#plastic-utensils1a img").hide();
    $("#paper-towels1a img").show();
    $('.next').fadeIn(500);
});

$(".plastic-bottles1").click(function(){
    items.load();
    items.play();
    $("#plastic-bags1a img").hide();
    $("#plastic-utensils1a img").hide();
    $("#paper-towels1a img").hide();
    $("#plastic-bottles1a img").show();
    $('.next').fadeIn(500);
});

$(".plastic-utensils1").click(function(){
    items.load();
    items.play();
    $("#paper-towels1a img").hide();
    $("#plastic-bags1a img").hide();
    $("#plastic-bottles1a img").hide();
    $("#plastic-utensils1a img").show();
    $('.next').fadeIn(500);
});

$(".plastic-bags1").click(function(){
    items.load();
    items.play();
    $("#paper-towels1a img").hide();
    $("#plastic-bottles1a img").hide();
    $("#plastic-utensils1a img").hide();
    $("#plastic-bags1a img").show();
    $('.next').fadeIn(500);
});


});

//////// DIV7 /////////
$(function() {

    var msa = [
            { name: "Use cloth towels <br/> instead of <br/> paper towels." },
            { name: "Use real plates<br/>  instead of <br/> paper or plastic." },
            { name: "Offer to wash the dishes <br/>  at home to avoid <br/> paper and plastic." },
            { name: "Get a re-usable <br/> shopping bag." },
            { name: "<b>Re-use things like:</b>  <br/> boxes, gift bags, gift wrap, <br/> clothing, furniture, toys." },
            { name: "Give away rather <br/>than throw away." },
            { name: "Sort your trash and <br/> remove anything that <br/> can be recycled." }
        ],
        $input = $('.input'),
        random_index;

    //make list for slots recursively and call spin when complete
    function makeSlotList(list){
        //could choose one random index and then populate with next 7 values instead, but need to account for looping at end
        if(list.length<20){//length chosen based on appearance of spin, can be changed
            var index = _.random(msa.length-1);
            if(list.length===1){
                /*
                    This index will be second item in the list, which is our winning number
                    Save this for future reference
                    Instead of saving it, we could get the index attribute from the list item we end on
                */

                random_index = index;
            }
            list.push( '<li index='+_.random(msa.length-1)+'>'+msa[index].name+'</li>' );
            return makeSlotList(list);
        } else {
            //slot list is complete
            //clear search field
            $input.html('');
            //attach list, show jslots, run animation
            $('#slot').html(list.join('')).parent().show().trigger('spin');
            return list;
        }
    }

    //before spinning, build out list to spin through and insert into the DOM
    function makeSlots(){
        //start with current value
        var list = ['<li>'+$input.html()+'</li>'];

        //call recursive list builder that won't spin slots until it's finished
        makeSlotList(list);
    }

    $('#slot').jSlots({
        number: 1,
        spinner : '.jSlots-wrapper',
        spinEvent: 'spin',
        time: 5500,
        loops: 25,
        endNum: 2,//spins backwards through the list. endNum 1 ends on the same value we started on
        onEnd: function(finalElement){
            //set result
            $input.html(msa[random_index].name);
            //hide spinner
            $(this.spinner).hide();
        }
    });

    //bind random button
    $('#random_location').on('click', makeSlots);
});