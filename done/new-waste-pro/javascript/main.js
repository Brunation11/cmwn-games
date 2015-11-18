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
        try {
            flip.pause(); // Stop playing
            flip.currentTime = 0; // Reset time
            vo62.pause(); // Stop playing
            vo62.currentTime = 0; // Reset time
        }
        catch (err) {
            //no sound - log error
        }
    }
    if (currentSlide == 11) {
        setTimeout(function () {
            vo56.play();
        }, 1000);
        try {
            vo61.pause(); // Stop playing
            vo61.currentTime = 0; // Reset time
        }
        catch (err) {
            //no sound - log error
        }
    }
    if (currentSlide == 10) {
        setTimeout(function () {
            // vo56.play();
        }, 8000);
        try {
            vo56.pause(); // Stop playing
            vo56.currentTime = 0; // Reset time
        }
        catch (err) {
            //no sound - log error
        }
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
        $('.prev').click( function(){
            $('.next').show();
        });
        try {
            vo55.pause(); // Stop playing
            vo55.currentTime = 0; // Reset time
            pledges.pause(); // Stop playing
            pledges.currentTime = 0; // Reset time
        }
        catch (err) {
            //no sound - log error
        }
    }
    if (currentSlide == 7) {
        setTimeout(function () {
            vo27.play();
        }, 1000);
        vo22b.pause();
        try {
            // vo27.pause(); // Stop playing
            // vo27.currentTime = 0; // Reset time
            // vo28.pause();
            // vo28.currentTime = 0; // Reset time
            // vo30.pause();
            // vo30.currentTime = 0; // Reset time
            // vo32.pause();
            // vo32.currentTime = 0; // Reset time
            // vo34.pause();
            // vo34.currentTime = 0; // Reset time
            // vo42.pause();
            // vo42.currentTime = 0; // Reset time
            // vo43.pause();
            // vo43.currentTime = 0; // Reset time
            // vo45.pause();
            // vo45.currentTime = 0; // Reset time
            // milk.pause();
            // milk.currentTime = 0; // Reset time
            vo46.pause(); // Stop playing
            vo47.pause();
            vo49.pause();
            vo50.pause();
            vo51.pause();
            vo52.pause();
            vo53.pause();
            vo54.pause();
        }
        catch (err) {
            //no sound - log error
        }
    }
    if (currentSlide == 6) {
        vo22b.play();
        background.pause();
            $('.goodJob').hide();
            var sound6 = document.getElementById('vo25');
            var sound7 = document.getElementById('vo26');
            var sound8 = document.getElementById('vo23');
            var sound9 = document.getElementById('vo24');
            var btnName1 = document.getElementById('vo17');
            var btnName2 = document.getElementById('vo18');
            var btnName3 = document.getElementById('vo15'); //contamination
            var btnName4 = document.getElementById('vo16');


            var matched_item   = new Array();
            var picked_item;

        setTimeout(function () {
            function multypleChoice() {
                var swap = 1;
                var allContent = [
                    {
                        description:'<div class="leachate-text del">This is the water that<br/>trickles through toxic<br/>substances in landfills.<br/>It\'s harmful and enters<br/>water and soil.</div>',
                        called:'<div class="called1 del">It\'s called...</div>',
                        audio: sound6,
                        button:'btn5',
                        name: btnName1
                    },

                    {
                        description:'<div class="methane-gas-text del">Food waste in a<br/>landfill produces 34%<br/>of this in the US.<br/>It\'s 21 times more<br/>environmentally damaging<br/>than carbon dioxide.</div>',
                        called:'<div class="called2 del">It\'s called...</div>',
                        audio: sound7,
                        button: 'btn6',
                        name: btnName2
                    },

                    {
                        description:'<div class="contamination-text del">Waste changes the<br/>chemistry of the water.<br/>Hazardous chemicals<br/>get into the soil.<br/>Both harm plants, animals,<br/>humans and ecosystems.</div>',
                        called:'<div class="called3 del">It\'s called...</div>',
                        audio: sound8,
                        button: 'btn7',
                        name: btnName3
                    },

                    {
                        description:'<div class="pollution-text del">Bad waste<br/>management leads<br/>to dirty land and air.<br/>It causes respiratory and<br/>other health problems.</div>',
                        called:'<div class="called4 del">It\'s called...</div>',
                        audio: sound9,
                        button: 'btn8',
                        name: btnName4
                    }
                ];


                function getRandom() {
                    swap = allContent [ Math.floor(Math.random() * allContent.length) ];
                    document.getElementById('message').innerHTML = '<p>' + swap.description + swap.called + '</p>' ;
                    swap.audio.play();

                    picked_item = swap.description;

                    if (matched_item.indexOf(picked_item) >= 0) {
                            //alert('already matched');
                            swap.audio.pause();
                            getRandom();
                    }
                    matched_item.push(picked_item);
                    return swap;

                }
                getRandom();

                var j = 0;

                $('.bclick').on('click', function(event) {
                        if($(this).hasClass(swap.button)) {
                            // alert('it matches');
                            j++;

                            swap.name.play();
                            swap.audio.pause();
                            setTimeout(function () {
                                    if (j == 4) {
                                    swap.audio.pause();
                                    setTimeout(function () {
                                        // vo22b.play();
                                    }, 500);
                                    $('.goodJob').fadeIn(500);
                                    $(".bclick").unbind("click");
                                    $(".del").hide();
                                    $('.next').delay(4000).fadeIn(500);
                                    return swap;
                                }

                            getRandom();
                            }, 2000);

                        } else {
                            // alert('Try again');
                            wrong.load();
                            wrong.play();
                        }

                });
            }
            multypleChoice();
        }, 7000);
    }
    if (currentSlide == 5) {
        background.pause();
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

        $('.moveOn').hide();

        function gamer() {

            var rand = 1;
            var match = [
                 {
                    texter: '<div class="Rec-text delete">This means to<br/>convert waste into<br/>usable material. 75% of<br/> what we waste can be converted<br/>but in the US only 30% is used.</div>',
                    sound: sound1,
                    button: 'btn1',
                    names: name1
                } ,

                 {
                    texter: '<div class="comp-text delete">This is how you<br/>manage the decay<br/>of organic material.<br/>It\'s used to improve soil.</div>',
                    sound: sound2,
                    button: 'btn2',
                    names: name2
                },

                 {
                    texter: '<div class="land-text delete">This is a place<br/>to bury solid waste.<br/>Its lined and covered.<br/>It is not a dump.</div>',
                    sound: sound3,
                    button: 'btn3',
                    names: name3
                },

                 {
                    texter: '<div class="Ins-text delete">This is the burning<br/>of waste at high heat.</div>',
                    sound: sound4,
                    button: 'btn4',
                    names: name4
                }
            ];


          function newItem() {
                rand = match [ Math.floor(Math.random() * match.length) ];
                document.getElementById('texter').innerHTML = '<p>' + rand.texter + '</p>';
                rand.sound.play();

                selected_item = rand.texter;
                console.log('randomly selected item: ' + selected_item);

                if (already_matched.indexOf(selected_item) >= 0) {
                        //alert('already matched');
                        rand.sound.pause();
                        newItem();
                }
                already_matched.push(selected_item);

                return rand;
            }

           newItem();

           var i = 0;
            $('.button').on('click', function(event) {

                    console.log('already_matched: ' + already_matched);
                    if($(this).hasClass(rand.button)) {
                        // alert('it matches');
                        i++;
                        rand.names.play();
                        rand.sound.pause();

                        setTimeout(function () {
                                if (i == 4) {
                                background.load();
                                background.play();
                                $(".button").unbind("click");
                                $('.moveOn').fadeIn(500);
                                rand.sound.pause();
                                $(".delete").hide();
                                $('.next').fadeIn(500);
                                return rand;
                            }

                        newItem();
                        }, 2000);

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
        background.play();
        $('.next').delay(5000).fadeIn();
        setTimeout(function () {
            vo10.play();
        }, 1000);
    }
    if (currentSlide == 3) {
        setTimeout(function () {
            vo3.play();
        }, 1000);
        vo22b.pause(); // Stop playing
        vo22b.currentTime = 0; // Reset time
        try {
            background.pause(); // Stop playing
            background.currentTime = 0; // Reset time
            vo10.pause(); // Stop playing
            vo10.currentTime = 0; // Reset time
        }
        catch (err) {
            //no sound - log error
        }
    }
    if (currentSlide == 2) {
        $('.arrows').fadeIn(500);
        $('.next').hide();
        $('.card').removeClass('flipped');
        try {
            vo3.pause(); // Stop playing
            vo4.pause(); // Stop playing
            vo5.pause(); // Stop playing
            vo6.pause(); // Stop playing
            vo7.pause(); // Stop playing
            vo8.pause(); // Stop playing
            vo9.pause(); // Stop playing
        }
        catch (err) {
            //no sound - log error
        }
    }
    if (currentSlide == 1) {
        $('#play, .next').fadeIn(500);
        $('.arrows').fadeOut(100);
        try {
            background.play();
            background.currentTime = 0; // Reset time
            vo1.pause(); // Stop playing
            vo1.currentTime = 0; // Reset time
            vo2.pause(); // Stop playing
            vo2.currentTime = 0; // Reset time
        }
        catch (err) {
            //no sound - log error
        }
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

        vo9.pause();

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
        vo1.pause();
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
                vo3.pause();
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
                vo3.pause();
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
                vo3.pause();
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
                vo3.pause();
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
                vo3.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo43.play();
            vo28.pause();
            vo30.pause();
            vo32.pause();
            vo34.pause();
            vo37.pause();
            vo42.pause();
            vo45.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo32.play();
            vo43.pause();
            vo28.pause();
            vo30.pause();
            vo34.pause();
            vo37.pause();
            vo42.pause();
            vo45.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo37.play();
            vo43.pause();
            vo28.pause();
            vo30.pause();
            vo32.pause();
            vo34.pause();
            vo42.pause();
            vo45.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo28.play();
            vo43.pause();
            vo30.pause();
            vo32.pause();
            vo34.pause();
            vo37.pause();
            vo42.pause();
            vo45.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            milk.play();
            vo43.pause();
            vo28.pause();
            vo30.pause();
            vo32.pause();
            vo34.pause();
            vo37.pause();
            vo42.pause();
            vo45.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo34.play();
            vo43.pause();
            vo28.pause();
            vo30.pause();
            vo32.pause();
            vo37.pause();
            vo42.pause();
            vo45.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo45.play();
            vo43.pause();
            vo28.pause();
            vo30.pause();
            vo32.pause();
            vo34.pause();
            vo37.pause();
            vo42.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo42.play();
            vo43.pause();
            vo28.pause();
            vo30.pause();
            vo32.pause();
            vo34.pause();
            vo37.pause();
            vo45.pause();
            milk.pause();
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
            vo27.pause();
            trash.load();
            trash.play();
            vo30.play();
            vo43.pause();
            vo28.pause();
            vo32.pause();
            vo34.pause();
            vo37.pause();
            vo42.pause();
            vo45.pause();
            milk.pause();
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
        vo57.currentTime = 0; // Reset time
        $("#paper-towels").modal('show');
    });

    $(".plastic-bottles").click(function(){
        items.load();
        items.play();
        vo58.play();
        vo58.currentTime = 0; // Reset time
        $("#plastic-bottles").modal('show');
    });

    $(".plastic-utensils").click(function(){
        items.load();
        items.play();
        vo60.play();
        vo60.currentTime = 0; // Reset time
        $("#plastic-utensils").modal('show');
    });

    $(".plastic-bags").click(function(){
        items.load();
        items.play();
        vo59.play();
        vo59.currentTime = 0; // Reset time
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
        vo46.pause();
        vo47.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(4000).fadeIn();
        $('#open1').hide();
        $('#open2').delay(6000).fadeIn();
        $('#door').show().delay(6000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#first').delay(700).fadeIn(300).delay(4000).fadeOut();
        $('#door-c').hide().delay(6000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open2').click(function () {
        vo49.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(4000).fadeIn();
        $('#open2').hide();
        $('#open3').delay(6000).fadeIn();
        $('#door2').show().delay(6000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#second').delay(700).fadeIn(300).delay(4000).fadeOut();
        $('#door-c2').hide().delay(6000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open3').click(function () {
        vo50.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(4000).fadeIn();
        $('#open3').hide();
        $('#open4').delay(6000).fadeIn();
        $('#door3').show().delay(6000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#third').delay(700).fadeIn(300).delay(4000).fadeOut();
        $('#door-c3').hide().delay(6000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open4').click(function () {
        vo51.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(4000).fadeIn();
        $('#open4').hide();
        $('#open5').delay(6000).fadeIn();
        $('#door4').show().delay(6000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#fourth').delay(700).fadeIn(300).delay(4000).fadeOut();
        $('#door-c4').hide().delay(6000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open5').click(function () {
        vo52.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(8000).fadeIn();
        $('#open5').hide();
        $('#open6').delay(10000).fadeIn();
        $('#door5').show().delay(10000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#fifth').delay(700).fadeIn(300).delay(8000).fadeOut();
        $('#door-c5').hide().delay(10000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open6').click(function () {
        vo53.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(4000).fadeIn();
        $('#open6').hide();
        $('#open7').delay(6000).fadeIn();
        $('#door6').show().delay(6000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#sixth').delay(700).fadeIn(300).delay(4000).fadeOut();
        $('#door-c6').hide().delay(6000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

    $('#open7').click(function () {
        vo54.play();
        $('#main').hide();
        $('#head1').fadeOut().delay(4000).fadeIn();
        $('#open7').fadeOut();
        $('.next').delay(6000).fadeIn();
        $('#door7').show().delay(6000).fadeOut().css("background-image", "url('content/images/open_door.gif" + "?a=" + Math.random() + "')");
        $('#seventh').delay(700).fadeIn(300).delay(4000).fadeOut();
        $('#door-c7').hide().delay(6000).fadeIn().css("background-image", "url('content/images/closed_door.gif" + "?a=" + Math.random() + "')");
    });

});