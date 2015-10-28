

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
    if (currentSlide == 11) {
    	$('.next').hide();
    }
    if (currentSlide == 10) {

    }

    if (currentSlide == 4) {
            $(".leachate-text").hide();
            $(".methane-gas-text").hide();
            $(".contamination-text").hide();
            $(".pollution-text").hide();

    }
    if (currentSlide == 3) {
            $(".recycling-text").hide();
            $(".composting-text").hide();
            $(".landfill-text").hide();
            $(".incineration-text").hide();

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

    $('#play').click(function () {
        background.pause();
    });

    $(".bkg-image2").hide();

    $('.next').on('click', function(){
        game.loadNextScreen();

        $('.next').hide();

        cont.play();

    });

    $('.prev').on('click', function(){
        game.loadPrevScreen();
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
                alert('wrong');
                // correct.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#head").fadeOut();
            $('#buses').fadeIn();

            $('#n1').fadeIn().click(function() {
                $('#n1').fadeOut();
                $("#head").fadeIn();
                $('#buses').fadeOut();
                $("#drag").hide();
            });
        }
    });

    $("#drop2").droppable({
        tolerance: "pointer",
        accept: "#drag2",
        drop: function () {
            try {
                alert('correct');
                // correct.play();
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
                 left: "230px"
             }, 600);

            $("#head").fadeOut();
            $('#cars').fadeIn();

            $('#n2').fadeIn().click(function() {
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
                alert('correct');
                // correct.play();
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
                 left: "130px"
             }, 600);

            $("#head").fadeOut();
            $('#elephants').fadeIn();

            $('#n3').fadeIn().click(function() {
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
                alert('correct');
                // correct.play();
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
                 left: "30px"
             }, 600);

            $("#head").fadeOut();
            $('#hippos').fadeIn();

            $('#n4').fadeIn().click(function() {
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
                alert('wrong');
                // correct.play();
            }
            catch (err) {
                //no sound - log error
            }
            $("#head").fadeOut();
            $('#cats').fadeIn();

            $('#n5').fadeIn().click(function() {
                $('#n5').fadeOut();
                $("#head").hide();
                $('#cats').fadeOut();
                $("#drag5").fadeOut();
            });
        }
    });

    //////// DIV4 /////////

$('.recycling').click(function (){
    $(".recycling-text").fadeIn(500);
    $(".composting-text").hide();
    $(".landfill-text").hide();
    $(".incineration-text").hide();
});

$('.composting').click(function(){
    $(".recycling-text").hide();
    $(".landfill-text").hide();
    $(".incineration-text").hide();
    $(".composting-text").fadeIn(500);
});

$('.landfill').click(function(){
    $(".recycling-text").hide();
    $(".composting-text").hide();
    $(".incineration-text").hide();
    $(".landfill-text").fadeIn(500);
});

$('.incineration').click(function(){
    $(".recycling-text").hide();
    $(".composting-text").hide();
    $(".landfill-text").hide();
    $(".incineration-text").fadeIn(500);
});

    ///////// DIV 5 ////////////
$('.leachate').click(function (){
    $(".leachate-text").fadeIn(500);
    $(".methane-gas-text").hide();
    $(".contamination-text").hide();
    $(".pollution-text").hide();
});

$('.methane-gas').click(function(){
    $(".contamination-text").hide();
    $(".leachate-text").hide();
    $(".pollution-text").hide();
    $(".methane-gas-text").fadeIn(500);
});

$('.contamination').click(function(){
    $(".contamination-text").fadeIn(500);
    $(".leachate-text").hide();
    $(".pollution-text").hide();
    $(".methane-gas-text").hide();
});

$('.pollution').click(function(){
    $(".pollution-text").fadeIn(500);
    $(".methane-gas-text").hide();
    $(".leachate-text").hide();
    $(".contamination-text").hide();

});

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
                }

            }
        });

 $(".droppable2").droppable({
            tolerance: "pointer",
            accept: "#item2",
            drop: function () {
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
                }
            }
        });

 $(".droppable3").droppable({
            tolerance: "pointer",
            accept: "#item3",
            drop: function () {
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
                }
            }
        });
 $(".droppable4").droppable({
            tolerance: "pointer",
            accept: "#item4",
            drop: function () {
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
                }
            }
        });
$(".droppable5").droppable({
            tolerance: "pointer",
            accept: "#item5",
            drop: function () {
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
                }
            }
        });
$(".droppable6").droppable({
            tolerance: "pointer",
            accept: "#item6",
            drop: function () {
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
                }
            }
        });

$(".droppable7").droppable({
            tolerance: "pointer",
            accept: "#item7",
            drop: function () {
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
                }
            }
        });
$(".droppable8").droppable({
            tolerance: "pointer",
            accept: "#item8",
            drop: function () {
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
                }
            }
        });
$(".droppable9").droppable({
            tolerance: "pointer",
            accept: "#item9",
            drop: function () {
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
                }
            }
        });

//////// DIV9 /////////
$(".cancel-btn").click(function(){
    $("#paper-towels").modal('hide');
    $("#plastic-bottles").modal('hide');
    $("#plastic-utensils").modal('hide');
    $("#plastic-bags").modal('hide');
});
$(".paper-towels").click(function(){
    $("#paper-towels").modal('show');
});
$(".plastic-bottles").click(function(){
    $("#plastic-bottles").modal('show');
});
$(".plastic-utensils").click(function(){
    $("#plastic-utensils").modal('show');
});
$(".plastic-bags").click(function(){
    $("#plastic-bags").modal('show');
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
        //could choose one random index and then populate with next 18 values instead, but need to account for looping at end
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




