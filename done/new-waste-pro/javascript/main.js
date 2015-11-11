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
    if (currentSlide == 13) {
    	$('.next').hide();
    }
    if (currentSlide == 12) {
        setTimeout(function () {
            vo61.play();
        }, 1000);
    }
    if (currentSlide == 11) {
        setTimeout(function () {
            vo56.play();
        }, 1000);
    }
    if (currentSlide == 10) {
        setTimeout(function () {
            // vo56.play();
        }, 8000);
    }

    if (currentSlide == 9) {
        pledges.volume = 0.2
        pledges.play();
        vo55.play();
        setTimeout(function(){
            $('.next').fadeIn(2000);
        },5500);
    }
    if (currentSlide == 8) {
        $('.next').hide();
        setTimeout(function () {
            vo46.play();
        }, 1000);
    }
    if (currentSlide == 7) {
        setTimeout(function () {
            vo27.play();
        }, 1000);
        vo22b.pause();
    }
    if (currentSlide == 6) {

        background.pause();

        var sound6 = document.getElementById('vo25');
        var sound7 = document.getElementById('vo26');
        var sound8 = document.getElementById('vo23');
        var sound9 = document.getElementById('vo24');

        var matched_item   = new Array();
        var picked_item;

        function multypleChoice() {
            var swap = 1;
            var allContent = [
                {
                    description:'<div class="leachate-text del">This is the water that<br/>trickles through toxic<br/>substances in landfills.<br/>Its harmful and enters<br/>water and soil.</div>',
                    called:'<div class="called1 del">Its called...</div>',
                    audio: sound6,
                    button:'btn5'
                },

                {
                    description:'<div class="methane-gas-text del">Food waste in a landfill<br/>produces 34% of this<br/>in the US. Its 21 times<br/>more environmentally<br/>damaging than carbon dioxide.</div>',
                    called:'<div class="called2 del">Its called...</div>',
                    audio: sound7,
                    button: 'btn6'
                },

                {
                    description:'<div class="contamination-text del">Waste changes the<br/>chemistry of the water.<br/>Hazardous chemicals<br/>get into the soil.<br/>Both harm plants, animals,<br/>humans and ecosystems.</div>',
                    called:'<div class="called3 del">Its called...</div>',
                    audio: sound8,
                    button: 'btn7'
                },

                {
                    description:'<div class="pollution-text del">Bad waste management<br/>leads to dirty land and air.<br/>It causes respiratory and<br/>other health problems.</div>',
                    called:'<div class="called4 del">Its called...</div>',
                    audio: sound9,
                    button: 'btn8'
                }
            ];


            function getRandom() {
                swap = allContent [ Math.floor(Math.random() * allContent.length) ];
                document.getElementById('message').innerHTML = '<p>' + swap.description + swap.called + '</p>' ;
                swap.audio.play();

                picked_item = swap.description;

                if (matched_item.length >= 4) {
                    // alert("All done");
                    setTimeout(function () {
                        vo22b.play();
                    }, 1000);
                    $(".bclick").unbind("click");
                    swap.audio.pause();
                    $(".del").hide();
                    $('.next').delay(4000).fadeIn(500);
                    return swap;
                }
                if (matched_item.indexOf(picked_item) >= 0) {
                        //alert('already matched');
                        swap.audio.pause();
                        getRandom();
                }
                matched_item.push(picked_item);
                return swap;

            }
            getRandom();

            $('.bclick').on('click', function(event) {
                    if($(this).hasClass(swap.button)) {
                        // alert('it matches');
                        swap.audio.pause();
                        getRandom();

                    } else {
                        // alert('Try again');
                        wrong.load();
                        wrong.play();
                    }

            });
        }
        multypleChoice();
    }
    if (currentSlide == 5) {
        ////// div 5 multyple choice game ////////////////////////
        var sound1 = document.getElementById('vo20z');
        var sound2 = document.getElementById('vo21z');
        var sound3 = document.getElementById('vo19z');
        var sound4 = document.getElementById('vo22z');
        var sound5 = document.getElementById('incorrect');
        var name1 = document.getElementById('vo12');
        var name2 = document.getElementById('vo13');
        var name3 = document.getElementById('vo11');//landfill
        var name4 = document.getElementById('vo14');


        var already_matched   = new Array();
        var selected_item;

        $('.goodJob').hide();

        function gamer() {

            var rand = 1;
            var match = [
                 {
                    texter: '<div class="Rec-text delete">This is how you<br/>manage the decay of<br/>organic material.<br/>Its used to improve soil.</div>',
                    sound: sound2,
                    button: 'btn1',
                    name: name1
                } ,

                 {
                    texter: '<div class="comp-text delete">This means to convert<br/>waste into usable material.<br/>75% of what we waste can<br/>be converted but in the US<br/>only 30% is used.</div>',
                    sound: sound1,
                    button: 'btn2',
                    name: name2
                },

                 {
                    texter: '<div class="land-text delete">This is a place<br/>to bury solid waste.<br/>Its lined and covered.<br/>It is not a dump.</div>',
                    sound: sound3,
                    button: 'btn3',
                    name: name3
                },

                 {
                    texter: '<div class="Ins-text delete">This is the burning<br/>of waste at high heat.</div>',
                    sound: sound4,
                    button: 'btn4',
                    name: name4
                }
            ];


          function newItem() {
                rand = match [ Math.floor(Math.random() * match.length) ];
                document.getElementById('texter').innerHTML = '<p>' + rand.texter + '</p>' ;
                rand.sound.play();

                selected_item = rand.texter;
                console.log('randomly selected item: ' + selected_item);

                if (already_matched.length >= 4) {
                        // alert("All done");
                        background.load();
                        background.play();
                        $(".button").unbind("click");
                        $('.goodJob').fadeIn(500);
                        rand.sound.pause();
                        $(".delete").hide();
                        $('.next').fadeIn(500);
                        return rand;
                }

                 if (already_matched.indexOf(selected_item) >= 0) {
                        //alert('already matched');
                        rand.sound.pause();
                        newItem();
                }
                already_matched.push(selected_item);
                return rand;
            }

           newItem();

            $('.button').on('click', function(event) {

                    console.log('already_matched: ' + already_matched);

                    rand.name.play();

                    if($(this).hasClass(rand.button)) {
                        // alert('it matches');
                        rand.sound.pause();

                        setTimeout(function () {
                        newItem();
                        }, 1800);

                    } else {
                        // alert('Try again');
                        wrong.load();
                        wrong.play();
                    }

            });

        }

        gamer();

    }
    if (currentSlide == 4) {
        $('.next').delay(5000).fadeIn();
        setTimeout(function () {
            vo10.play();
        }, 1000);
    }
    if (currentSlide == 3) {
        setTimeout(function () {
            vo3.play();
        }, 1000);
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
var good_items = new Array();
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
        setTimeout(function () {
            vo1.play();
        }, 1000);
    });

    $(".bkg-image2").hide();

    /// balance conditional statement ////
    $('.toNext').click(function() {

        balance.push(selected_one);

        if (balance.length == 5) {
            game.loadNextScreen();
            if($('#b1').is(':visible')) {
                setTimeout(function () {
                    vo21.play();
                }, 6000);
            }
            if($('#b2').is(':visible')) {
                // vo21.play();
            }
            if($('#b3').is(':visible')) {
                setTimeout(function () {
                    vo19.play();
                }, 6000);
            }
            if($('#b4').is(':visible')) {
                setTimeout(function () {
                    vo22a.play();
                }, 6000);
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
    // $('.spin').click(function() {
    //     pull.play();
    //     spins.play();
    //     setTimeout(function () {
    //         stops.play();
    //     }, 3600);

    //     spin.push(spin_btn);

    //     if (spin.length == 7) {
    //         setTimeout(function(){
    //             $('.next').fadeIn(500);
    //             endslot.play();
    //         },5500);
    //     }
    // });

    // feed array to go to next screen //
    $('.pledge').click(function() {
        pledge.push(pledge_btn);

        if (pledge.length == 4) {
            $('.next').fadeIn(500);
        }
    });

    $('#plastic').click(function() {
        setTimeout(function () {
            vo62.play();
        }, 5000);
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
        setTimeout(function () { $('.next').fadeIn(500); }, 6000);
        cards.play();
        setTimeout(function () {
            vo2.play();
        }, 1000);
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

            $("#drag2").css('z-index', -1);
            $("#drag3").css('z-index', -1);
            $("#drag4").css('z-index', -1);
            $("#drag5").css('z-index', -1);
            $("#head").fadeOut();
            $('#buses').fadeIn();

            $('#n1').delay(8000).fadeIn().click(function() {
                cont.play();
                $('#n1').fadeOut();
                $("#drag2").css('z-index', 2);
                $("#drag3").css('z-index', 2);
                $("#drag4").css('z-index', 2);
                $("#drag5").css('z-index', 2);
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
            good_items.push(1);
            if (good_items.length === 5) {
                setTimeout(function () {
                    vo9.play();
                }, 8000);
            }
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

            $("#drag").css('z-index', -1);
            $("#drag3").css('z-index', -1);
            $("#drag4").css('z-index', -1);
            $("#drag5").css('z-index', -1);
            $("#head").fadeOut();
            $('#cars').fadeIn();

            $('#n2').delay(6000).fadeIn().click(function() {
                cont.play();
                $('#n2').fadeOut();
                $("#drag").css('z-index', 2);
                $("#drag3").css('z-index', 2);
                $("#drag4").css('z-index', 2);
                $("#drag5").css('z-index', 2);
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
            good_items.push(2);
            if (good_items.length === 5) {
                setTimeout(function () {
                    vo9.play();
                }, 6000);
            }
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

            $("#drag").css('z-index', -1);
            $("#drag2").css('z-index', -1);
            $("#drag4").css('z-index', -1);
            $("#drag5").css('z-index', -1);
            $("#head").fadeOut();
            $('#elephants').fadeIn();

            $('#n3').delay(6000).fadeIn().click(function() {
                cont.play();
                $('#n3').fadeOut();
                $("#drag").css('z-index', 2);
                $("#drag2").css('z-index', 2);
                $("#drag4").css('z-index', 2);
                $("#drag5").css('z-index', 2);
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
            good_items.push(3);
            if (good_items.length === 5) {
                setTimeout(function () {
                    vo9.play();
                }, 6000);
            }
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

            $("#drag").css('z-index', -1);
            $("#drag2").css('z-index', -1);
            $("#drag3").css('z-index', -1);
            $("#drag5").css('z-index', -1);
            $("#head").fadeOut();
            $('#hippos').fadeIn();

            $('#n4').delay(13000).fadeIn().click(function() {
                cont.play();
                $('#n4').fadeOut();
                $("#drag").css('z-index', 2);
                $("#drag2").css('z-index', 2);
                $("#drag3").css('z-index', 2);
                $("#drag5").css('z-index', 2);
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
            good_items.push(4);
            if (good_items.length === 5) {
                setTimeout(function () {
                    vo9.play();
                }, 13000);
            }
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

            $("#drag").css('z-index', -1);
            $("#drag2").css('z-index', -1);
            $("#drag3").css('z-index', -1);
            $("#drag4").css('z-index', -1);
            $("#head").fadeOut();
            $('#cats').fadeIn();

            $('#n5').delay(7000).fadeIn().click(function() {
                cont.play();
                $('#n5').fadeOut();
                $("#drag").css('z-index', 2);
                $("#drag2").css('z-index', 2);
                $("#drag3").css('z-index', 2);
                $("#drag4").css('z-index', 2);
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
            good_items.push(5);
            if (good_items.length === 5) {
                setTimeout(function () {
                    vo9.play();
                }, 7000);
            }
        }
    });

    //////// DIV4 /////////




    ///////// DIV 5 ////////////


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

    //////// DIV8 /////////

    $('#open2').hide();
    $('#open3').hide();
    $('#open4').hide();
    $('#open5').hide();
    $('#open6').hide();
    $('#open7').hide();

    $('#door').hide();
    $('#door2').hide();
    $('#door3').hide();
    $('#door4').hide();
    $('#door5').hide();
    $('#door6').hide();
    $('#door7').hide();

    $('#first').hide();
    $('#second').hide();
    $('#third').hide();
    $('#fourth').hide();
    $('#fifth').hide();
    $('#sixth').hide();
    $('#seventh').hide();

    $('#door-c').hide();
    $('#door-c2').hide();
    $('#door-c3').hide();
    $('#door-c4').hide();
    $('#door-c5').hide();
    $('#door-c6').hide();
    $('#door-c7').hide();

    $('#open1').click(function () {
        vo47.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(5000).fadeIn();
        $('#open1').hide();
        $('#open2').delay(5500).fadeIn();
        $('#door').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#first').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open2').click(function () {
        vo49.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(5000).fadeIn();
        $('#open2').hide();
        $('#open3').delay(5500).fadeIn();
        $('#door2').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#second').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c2').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open3').click(function () {
        vo50.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(5000).fadeIn();
        $('#open3').hide();
        $('#open4').delay(5500).fadeIn();
        $('#door3').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#third').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c3').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open4').click(function () {
        vo51.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(5000).fadeIn();
        $('#open4').hide();
        $('#open5').delay(5500).fadeIn();
        $('#door4').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#fourth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c4').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open5').click(function () {
        vo52.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(9000).fadeIn();
        $('#open5').hide();
        $('#open6').delay(9500).fadeIn();
        $('#door5').show().delay(9000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#fifth').fadeIn(2000).delay(7000).fadeOut();
        $('#door-c5').hide().delay(9000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open6').click(function () {
        vo53.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(5000).fadeIn();
        $('#open6').hide();
        $('#open7').delay(5500).fadeIn();
        $('#door6').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#sixth').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c6').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open7').click(function () {
        vo54.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(5000).fadeIn();
        $('#open7').fadeOut();
        $('.next').delay(5500).fadeIn();
        $('#door7').show().delay(5000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#seventh').fadeIn(2000).delay(3000).fadeOut();
        $('#door-c7').hide().delay(5000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

});