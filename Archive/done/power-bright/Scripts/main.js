$(document).ready(function () {

    setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 500);
    $('#homeSound').get(0).play();
    $('.btn-click, .next, .prev').click(function () {
        $('#btnClick').get(0).play();
    });

    $('#home .play').click(function () {
        $('#home').fadeOut(500);
        $('#whatIs').fadeIn(500);
        $('.bkg-image').css('background-image', 'url("content/_assets/background/bkg_2.png")');

        $('#homeSound').get(0).pause();
        $('#whatSound').get(0).play();

    });
    $('#whatIs .play').click(function () {
        $('#whatIs').fadeOut(500);
        $('#noseWords').fadeIn(500);
        $('.bkg-image').css('background-image', 'url("content/_assets/background/bkg_2.png")');
        $('#mainSound').get(0).pause();
        $('#slide4').get(0).play();
        setTimeout(function () {
            $('#noseWords .inner img:first-child').removeClass('open');
        }, 1500);
        setTimeout(function () {
            $('#noseWords .inner img:last-child').addClass('open');
            setTimeout(function () {
                $('#noseWords .play-btn').fadeIn(500);
            }, 1000);
        }, 1500);


    });
    $('#noseWords .play').click(function () {

        $('#noseWords').fadeOut(500);
        $('#stikers').fadeIn(500);
        $('.bkg-image').css('background-image', 'url("content/_assets/background/bkg_3.png")');
    });
    $('#stikers .stiker-hold > div .play-btn a').click(function () {
        var box = $(this).parent().parent();
        console.log($(this).parent().parent());
        box.animate({ top: -500 }, 800, function () {});
        box.next().find('.stiker-hover').fadeOut(500);
        $('#whatSound').get(0).currentTime = 0;
        $('#whatSound').get(0).play();
    });
    $('#stikers .stiker-hold > div.stiker3 .play-btn a').click(function () {

        $('#stikers').fadeOut(500);
        $('#farm').fadeIn(500);
    });
    $('#farm a').click(function () {
        if ($(this).hasClass('farm')) {
            $('#farm').fadeOut(500);
            $('#right').fadeIn(500);
            $('#stikercorrect').get(0).currentTime = 0;
            $('#stikercorrect').get(0).play();

        }
        else {
            $('#stikerincorrect').get(0).currentTime = 0;
            $('#stikerincorrect').get(0).play();
        }
    });

    $('#right .play-btn a').click(function () {
        $('#right').fadeOut(500);
        $('#sources').fadeIn(500);
        $('#mainSound').get(0).currentTime = 0;
        $('#mainSound').get(0).play();
        $('.bkg-image').css('background-image', 'url("content/_assets/background/bkg_4.png")');
    });
    $('#sources .play-btn a').click(function () {
        $('#sources').fadeOut(500);
        $('#step').fadeIn(500);

        /*slider*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/

        setTimeout(function () {
            $('#step .slider .slide').hide();

            $('#step .slider .slide').first().show();
            $('#step .slider .slide').first().addClass('openslide');
            var num = $('#step .slider .slide').first().index() + 1;

            $('.arrows > .next').click(function (i) {
                $('#mainSound').get(0).play();
                if ($('#step .slider .slide').hasClass('openslide')) {
                    if (num <= $('#step .slider .slide').length) {
                        $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut();
                        $('#step .slider .slide:nth-child(' + (num + 1) + ')').addClass('openslide').fadeIn();
                        num++;
                         $('.arrows > .next').fadeOut();
                         $('.arrows > .next').removeClass('open');
                         if ((num - 1) == ($('#step .slider .slide').length)) {
                             $('#step').fadeOut(500);
                             // $('#letsPlay').fadeIn(500);
                              $('#flip').fadeIn(500);
                                completeFlip(12923);
                             $('#mainSound').get(0).pause();
                             $('#slide20').get(0).play();
                         }
                    }

                }

            });

        }, 2000);
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
    });
    $('#stikers .stiker-hold > div .play-btn a').click(function () {
        var box = $(this).parent().parent();
        console.log($(this).parent().parent());
        box.fadeOut(500);
        box.next().find('.stiker-hover').fadeOut(500);
    });

    $(document).delegate('#step .btn-hold a', 'click', function () {

        console.log($(this));
        var parrentSlideId = $(this).parents().eq(5).get(0).id;
        if ($(this).hasClass('correct')) {
            $(this).addClass('Correct');
            //parrentSlide.find(".correct-ansver").css('z-index', '10');
            $(' .arrows-inctive').css('z-index', '0');
            setTimeout(function () { $(' #step .slider .next').fadeIn(500); }, 500);
            $('#incorrect').get(0).pause();
            $('#correct').get(0).currentTime = 0;
            $('#correct').get(0).play();
            $('.img-hover').addClass('view');
            //$('#' + parrentSlideId + ' .correct-ansver img').css('visibility','visible');
             setTimeout(function () {

                 $('.arrows > .next').fadeIn();
                 $('.arrows > .next').addClass('open');
                    }, 300);
        }
        else if ($(this).hasClass('incorrect')) {
            $(this).addClass('Incorrect');
            $('#correct').get(0).pause();
            $('#incorrect').get(0).currentTime = 0;
            $('#incorrect').get(0).play();
        }
    });
    $('#letsPlay .heading, #letsPlay .play').click(function () {
        $('#letsPlay').fadeOut(500);
        $('#flip').fadeIn(500);

    });

    /*$('#flip .heading, #flip .play').click(function () {
        $('#flip').fadeOut(500);
        $('#quit').fadeIn(500);
    });

    */



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