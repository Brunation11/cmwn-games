$(document).ready(function () {

    setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 500);
    $('#title').get(0).play();
    $('.btn-click, .next, .prev').click(function () {
        $('#btnClick').get(0).play();
    });
    
    $('#home .play').click(function () {
        $('#home').fadeOut(500);
        $('#noseWords').fadeIn(500);
        $('#title').get(0).pause();
        $('#mainSound').get(0).pause();
        $('#slide5').get(0).play();
        setTimeout(function () {
            $('#noseWords .text-box .headig-box:last-child').fadeIn(500);
            setTimeout(function () { $('#noseWords .arrows > .next').fadeIn();
                $('#noseWords .arrows > .next').addClass('open');
            }, 3000);
        }, 500);
        
    });
    $('#noseWords .next').click(function () {
        
        $('#noseWords').fadeOut(500);
        $('#step').fadeIn(500);
        $('#mainSound').get(0).play();
        
        /*slider*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/

        setTimeout(function () {
            $('#step .slider .slide').hide();

            $('#step .slider .slide').first().show();
            setTimeout(function () { $('#step .slider .slide:nth-child(' + 1 + ') .cs-buttons a').trigger('click'); }, 2500);
            
            $('#step .slider .slide').first().addClass('openslide');
            

            /*function makeNewPosition() {

                // Get viewport dimensions (remove the dimension of the div)
                /*var h = $('.openslide .bg .pointer').height();
                var w = $('.openslide .bg .pointer').width();

                var nh = Math.floor(Math.random() * 160);
                var nw = Math.floor(Math.random() * 290);

                return [nh, nw];

            }

            function animateDiv() {
                var newq = makeNewPosition();
                var oldq = $('.openslide .bg .pointer .point').offset();
               // var speed = calcSpeed([oldq.top, oldq.left], newq);

                $('.openslide .bg .pointer .point').animate({ top: newq[0], left: newq[1] }, 2000, function () {
                    animateDiv();
                });

            };

            function calcSpeed(prev, next) {

                var x = Math.abs(prev[1] - next[1]);
                var y = Math.abs(prev[0] - next[0]);

                var greatest = x > y ? x : y;

                var speedModifier = 0.1;

                var speed = Math.ceil(greatest / speedModifier);

                return speed;

            }
            animateDiv();*/
           // alert($('#step .slider .openslide').length);
            /*var reloadCSS = function () {
                $('#css').replaceWith('<link id="css" rel="stylesheet" href="/content/main.css"></link>');
            };
            reloadCSS();*/
            $('#step .slider  .pointer').remove();
            $('#step .slider .slide .img-hover').append('<div class="pointer"></div>')
            var num = $('#step .slider .slide').first().index() + 1;
             /*$('#step .slider  .pointer').css('animation-name', '');
           setTimeout(function () {
                $('#step .slider  .pointer').css('animation-name', 'moveX, moveY');
            }, 200);*/
            $('.arrows > .next').click(function (i) {
                $('#mainSound').get(0).play();
                $('.content-box .btn-hold .btn-hover').fadeOut(100);
                if ($('#step .slider .slide').hasClass('openslide')) {
                    if (num <= $('#step .slider .slide').length) {
                        $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut(10);
                        $('#step .slider .slide:nth-child(' + (num + 1) + ')').addClass('openslide').fadeIn(500);
                        $('#step .slider  .pointer').remove();
                        $('#step .slider .slide .img-hover').append('<div class="pointer"></div>')
                        /*$('#step .slider  .pointer').css('animation-name', '');
                        setTimeout(function () {
                            $('#step .slider  .pointer').css('animation-name', 'moveX, moveY');
                        }, 200);
                        */
                        num++;
                        $('.arrows > .next').fadeOut();
                        $('.arrows > .next').removeClass('open');
                        if ((num - 1) == ($('#step .slider .slide').length)) {
                            $('#step').fadeOut(500);
                            $('#flip').fadeIn(500);
                            setTimeout(function () {
                                $('#flip .inner .heading').fadeIn(500);
                                /*$('#flip .arrows > .next').fadeIn();
                                $('#flip .arrows > .next').addClass('open');*/
                            }, 1500);
                           
                            //$('#letsPlay').fadeIn(500);
                            $('#mainSound').get(0).pause();
                            $('#slide29').get(0).play();
                        }
                    }
                }
            });

        }, 200);
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
    
   
        $('.content-box .btn-hold a').click(function (e) {
           // console.log($(this));
            var parrentSlide = angular.element(e.target);
            var parrentSlideId = parrentSlide.parents().eq(4).get(0).id;
            parrentSlide.addClass('done');
            $('.content-box .btn-hold .btn-hover').fadeIn(100);
            
            setTimeout(function () { $(' #step .slider .next').fadeIn(500); }, 500);
            setTimeout(function () {
                 
                     $('.arrows > .next').fadeIn();
                     $('.arrows > .next').addClass('open');
                        }, 1000);
            
            $('#' + parrentSlideId + ' .correct-ansver img').css('visibility', 'visible');
            $('#' + parrentSlideId + ' .bg .pointer').fadeOut(1000);
          
            if ($(this).hasClass('correct')) {
                $(this).addClass('Correct1');
                parrentSlide.find(".correct-ansver").css('z-index', '10');
                $(' .arrows-inctive').css('z-index', '0');
                
                $('#incorrect').get(0).pause();
                $('#incorrect').get(0).currentTime = 0;
                $('#correct').get(0).pause();
                $('#correct').get(0).currentTime = 0;
                $('#correct').get(0).play();

                
                
                
            }
            else if ($(this).hasClass('incorrect')) {
                $(this).addClass('Incorrect1');
                $('#correct').get(0).pause();
                $('#correct').get(0).currentTime = 0;
                $('#incorrect').get(0).pause();
                $('#incorrect').get(0).currentTime = 0;
                $('#incorrect').get(0).play();
            }
        });
    });

    $('#flip .heading, #flip .next').click(function () {
        $('#flip').fadeOut(500);
        $('#quit').fadeIn(500);
    });

    

    /*//////////////////////// OLD scripts for purple box and popups /////////////////////////////*/
   // $('#pop-up').modal('show');

    //to use the close modal, use this function
    $('.modal .no').click(function () {
        $('.modal').modal('hide');
    });

    //to use the close modal, use this function

    $('.close-Btn').click(function () {
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
