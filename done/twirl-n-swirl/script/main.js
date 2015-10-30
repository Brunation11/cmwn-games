$(document).ready(function () {

    $(".block-btn").show();
    setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 500);
    $('#mainSound').get(0).play();
    $('.btn-click, .next, .prev').click(function () {
        $('#btnClick').get(0).play();
    });

    $('#home .play').click(function () {
        // $('#wonder').get(0).play();
        $('#home').fadeOut(200);
        $('#proudly').fadeIn(200);
        $('#mainSound').get(0).pause();

        $('.shnose li').each(function (i) {
            var row = $(this);
            setTimeout(function () {
                row.addClass('flip');
                setTimeout(function () {
                    row.removeClass('flip');
                }, 400);
            }, 400 * i);
        });
        setTimeout(function () {
            $('#proudly .next').fadeIn(500);
        }, 2000);
    });

    $('#proudly .next').click(function () {
        $('#wonder').get(0).play();
        $('#noseWords').fadeIn(200);
        $('#mainSound').get(0).pause();
        $('#proudly').fadeOut(200);
    });

    $('#noseWords .next').click(function () {
        
        $('#wonder').get(0).pause();
        $('#whatever').get(0).play();;
        $('#flush').get(0).play();

        setTimeout(function () {
            $('#noseWords').fadeOut(500);
            $('#feelings').fadeIn(500);
            $('#feelings .next').fadeIn(500);
        }, 1000);
    });
    // $('.flush a').click(function () {
    //     $('#flush').get(0).currentTime = 0;
    //     $('#flush').get(0).pause();
    //     $('#flush').get(0).play();
    //     $('.drag').addClass("dragstarted");
    //     $('.correct-ansver').fadeIn(500).css('z-index', '10');
    //     $('.correct-ansver-hover').fadeIn(500);
    //     $('.sidebar-hover ').fadeOut();
    //      setTimeout(function () {$('.correct-ansver a').fadeIn(500);}, 1000);
    // });

    $('#feelings .next').click(function () {
        $('#whatever').get(0).pause();
        $('#feelings').fadeOut(500);
        $('#step').fadeIn(500);
        $('#drag').get(0).play();
    });

    $('#startGame .next , #googjob .again').click(function () {
        $('#drag').get(0).pause();
        $('#startGame').fadeOut(500);
        $('#step').fadeIn(500);
        $('#game').get(0).play();
        /*slider*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------

        setTimeout(function () {
            $('#step .slider .slide').hide();

            $('#step .slider .slide').first().show();
            $('#step .slider .slide').first().addClass('openslide');
            var num = $('#step .slider .slide').first().index() + 1;

            $(document).delegate('.arrows > .next', 'click', function () {

                //$('#game').get(0).play();
                if ($('#step .slider .slide').hasClass('openslide')) {
                    if (num <= $('#step .slider .slide').length) {
                        $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut();
                        $('#step .slider .slide:nth-child(' + (num + 1) + ')').addClass('openslide').fadeIn();
                        num++;
                        $('.arrows > .next').fadeOut();
                        $('.arrows > .next').removeClass('open');
                        if ((num - 1) == ($('#step .slider .slide').length)) {
                            $('#step').fadeOut(500);
                            $('#googjob').fadeIn(500);

                        }
                    }

                }

            });

        }, 500);
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
    });

    $('#step .slider > .arrows  a.next').click(function () {
        $('#step').fadeOut(500);
        $('#flusher').fadeIn(500);
        $('#mainSound').get(0).pause();
        // $('#slide14').get(0).play();
        $('#pref').get(0).play();
    });

    $('#googjob .again').click(function () {
        $('#googjob').fadeOut(500);
        $('#step').fadeIn(500);
        $('.triggerRelink').trigger('click');
    });

    $('#googjob .fliptime').click(function () {
        $('#googjob').fadeOut(500);
        $('#game').get(0).pause();
        $('#showOff').fadeIn(500);
        $('#showOff .next').fadeIn(500);

        $('#mainSound').get(0).play();
    });

    $('#flusher .next.arrow').click(function () {
        $('#pref').get(0).pause();
        $('#flusher').fadeOut(500);
        $('#flip').fadeIn(500);
        $('#slide14').get(0).play();
        $('#fli').get(0).play();
        completeFlip(11820);
    });

    $('#flip .next.arrow').click(function () {
        $('#fli').get(0).pause();
        $('#flip').fadeOut(500);
        $('#quit').fadeIn(500);
    });
    /*-----------------------------------------*/
        // Turn multiple selections on in IE

    /*//////////////////////// OLD scripts for purple box and popups /////////////////////////////*/
   // $('#pop-up').modal('show');


    //to use the close modal, use this function
    $('.modal .no').click(function () {
        $('.modal').modal('hide');
    });
    //to use the close modal, use this function
    /*$('.modal .yes').click(function () {
        function close_window(url) {
            var newWindow = window.open('', '_self', ''); //open the current window
            window.close(url);
        }
        });*/

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