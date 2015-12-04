$(document).ready(function () {

    setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 500);
    $('#mainSound').get(0).play();
    $('.btn-click, .next, .prev').click(function () {
        $('#btnClick').get(0).play();
    });
    
    $('#home .play').click(function () {
        $('#home').fadeOut(200);
        $('#noseWords').fadeIn(200);
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
            $('#noseWords .next').fadeIn(500);
        }, 2000);
    });

    $('#noseWords .next').click(function () {
        $('#noseWords').fadeOut(500);
        $('#feelings').fadeIn(500);
    });

    $('#feelings .card').click(function () {
        $(this).addClass('flipped');
        $('#cardFlip').get(0).play();
        if ($('#feelings #Taste > .card').hasClass('flipped') && $('#feelings #Smell > .card').hasClass('flipped') && $('#feelings #Breathe > .card').hasClass('flipped')) {
            setTimeout(function () { $(' #feelings .next').fadeIn(500); }, 1000);
        };
    });

    $('#feelings .next').click(function () {
        $('#feelings').fadeOut(500);
        $('#startGame').fadeIn(500);
    });

    $('#startGame .next , #googjob .again').click(function () {
        $('#startGame').fadeOut(500);
        $('#step').fadeIn(500);
        $('#game').get(0).play();
        /*slider*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/

        setTimeout(function () {
            $('#step .slider .slide').hide();

            $('#step .slider .slide').first().show();
            $('#step .slider .slide').first().addClass('openslide');
            var num = $('#step .slider .slide').first().index() + 1;

            $(document).delegate('.arrows > .next', 'click', function () {
            
                $('#game').get(0).play();
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
                            $('#game').get(0).pause();
                            $('#slide14').get(0).play();
                        }
                    }
                }
            });

        }, 500);
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
        /*---------------------------------------------------*/
    });

    $('#googjob .again').click(function () {
        $('#googjob').fadeOut(500);
        $('#step').fadeIn(500);
        $('.triggerRelink').trigger('click');
    });

    $('#googjob .fliptime').click(function () {
        $('#mainSound').get(0).pause();
        $('#googjob').fadeOut(500);
        $('#game').get(0).pause();
        $('#slide15').get(0).play();
        $('#showOff').fadeIn(500);
        $('#showOff .next').fadeIn(500);   
    });

    $('#showOff .next.arrow').click(function () {
        $('#game').get(0).pause();
        $('#mainSound').get(0).pause();
        $('#slide15').get(0).pause();
        /*$('#showOff').fadeOut(500);
        $('#quit').fadeIn(500);*/
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