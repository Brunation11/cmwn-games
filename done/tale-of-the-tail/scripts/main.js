$(document).ready(function () {

    //setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 500);
    $('#mainSound').get(0).play();
    $('.btn-click, .next, .prev').click(function () {
        $('#btnClick').get(0).currentTime = 0;
        $('#btnClick').get(0).play();
        // alert('Hello');
    });
    $('.incorrect').click(function () {
        $('#correct').get(0).pause();
        $('#correct').get(0).currentTime = 0;
        $('#incorrect').get(0).pause();
        $('#incorrect').get(0).currentTime = 0;
        $('#incorrect').get(0).play();
    });
    $('.correct').click(function () {
        var parrent = $(this).parents().eq(3).get(0).id;
        $('#incorrect').get(0).pause();
        $('#incorrect').get(0).currentTime = 0;
        $('#correct').get(0).pause();
        $('#correct').get(0).currentTime = 0;
        $('#correct').get(0).play();
        $('#' + parrent + ' .content-box .img-box .correct-ansver').css('z-index', '10');
        $('#' + parrent + ' .content-box .img-box .correct-ansver').css('min-height', $('#' + parrent + '.content-box .img-box img').height() + "px");
        $('#' + parrent + ' .content-box .img-box img').css('visibility', 'hidden');
        $('#' + parrent + ' .img-hover.incorrect').css('background', 'rgba(0,0,0,0.5)');
        $(' .arrows-inctive').css('z-index', '0');
        setTimeout(function () { $(' #step .slider .next').fadeIn(500); }, 500);

    });
    $('#home .play').click(function () {
        $('#home').fadeOut(500);
        $('#video').fadeIn(500);
        $('#mainSound').get(0).pause();
        embed.videoPlayer.play();
    });
    /*slider*/
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/

    setTimeout(function () {
        $('#step .slider .slide').hide();


        $('#step .slider .slide').first().addClass('openslide');
        $('#easy .slider .slide').first().addClass('openslide');
        $('#hard .slider .slide').first().addClass('openslide');
        $('#step .slider .slide.openslide').show();
        var num = $('.slider .slide').first().index() + 1;

        $('#step .slider .arrows > .next').click(function (i) {
            $('#mainSound').get(0).play();
            if ($('#step .slider .slide').hasClass('openslide')) {

                if (num <= $('#step .slider .slide').length) {
                    $('#step .slider .slide:nth-child(' + num + ')').removeClass('openslide').fadeOut();
                    $('#step .slider .slide:nth-child(' + (num + 1) + ')').addClass('openslide').fadeIn();
                    num++;
                    $('#step .arrows > .next').fadeOut();
                    $('#step .arrows > .next').removeClass('open');
                    if ((num - 1) == ($('#step .slider .slide').length)) {
                        if (jQuery('#step').is(":visible")) {
                            jQuery('#step').fadeOut(500);
                            jQuery('#googjob').fadeIn(500);
                            jQuery('#mainSound').get(0).pause();
                            jQuery('#slide13').get(0).play();
                            jQuery('#step').addClass('innactive');
                            // alert('Hello');
                        }
                        /*else if (jQuery('#step').hasClass(".innactive") || (jQuery('#hard').is(":visible"))) {
                            jQuery('#hard').fadeOut(500);
                            jQuery('#showOff').fadeIn(500);
                            jQuery('#hard').addClass('innactive');
                        }
                        else if (jQuery('#step').hasClass(".innactive") || (jQuery('#easy').is(":visible"))) {
                            jQuery('#easy').fadeOut(500);
                            jQuery('#showOff').fadeIn(500);
                            jQuery('#easy').addClass('innactive');
                        }*/

                    }
                }

            }
        });

    }, 2000);
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/
    /*---------------------------------------------------*/
    $('#video .play').click(function () {
        setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 3000);
        $('#video').fadeOut(500);
        $('#step').fadeIn(500);
       // $(' #step .slider').height($(' #step .slider .film').height());
        $('#mainSound').get(0).play();
    });
    $('#googjob .easy').click(function () {

        $('#googjob').fadeOut(500);
        $('#easy').fadeIn(500);
        $('#mainSound').get(0).play();
        // alert('Hello');
    });
    $('#googjob .hard').click(function () {
        $('#googjob').fadeOut(500);
        $('#hard').fadeIn(500);
        $('#mainSound').get(0).play();
    });

    // $('#file').change(function () {
    //     //$('#target').submit();
    //     $('#showOff').fadeOut(500);
    //     $('#wellcome').fadeIn(500);
    // });
    $('#wellcome .next.arrow').click(function () {

        $('#wellcome').fadeOut(500);
        $('#flip').fadeIn(500);
        completeFlip(24316);
        $('#mainSound').get(0).pause();
        $('#slide27').get(0).play();
    });
    $('#flip .next.arrow').click(function () {

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



    /*---------------------------------------*/

    var embed = new ViddlerEmbed({
        videoId: '84963dec',
        width: '565px',
        height: '400px',
        target: '#my-player',
        wmode: "window",
        hideControls: true
    });


    embed.manager.events.on('videoPlayer:playerReady', function () {
        showEvent('videoPlayer:playerReady');
    });
    embed.manager.events.on('videoPlayer:mediaReadyy', function () {
        showEvent('videoPlayer:mediaReady');
    });
    embed.manager.events.on('videoPlayer:play', function () {
        showEvent('videoPlayer:play');
    });
    embed.manager.events.on('videoPlayer:pause', function () {
        showEvent('videoPlayer:pause');
    });

    embed.manager.events.on('videoPlayer:ended', function () {
        console.log('end');
        //setTimeout(function () { $('.hover-box .img-hover').height($('.sidebar .img-box img').height() * 1.065); }, 3000);
            $('#video').fadeOut(500);
            $('#step').fadeIn(500);
            // $(' #step .slider').height($(' #step .slider .film').height());
            $('#mainSound').get(0).play();
        showEvent('videoPlayer:ended');





    });

    embed.manager.events.on('interaction:clickPlay', function () {
        showEvent('interaction:clickPlay');
    });

   /* $('#play-start').click(function () {
        embed.videoPlayer.ended();

    });
    $('#play-20s').click(function () {
        embed.videoPlayer.ended();
    });
    $('#pause').click(function () {
        embed.videoPlayer.pause();
    });
    $('#resume').click(function () {
        embed.videoPlayer.resume();
    });
    $('#seek-20s').click(function () {
        embed.videoPlayer.seekTo(20000);
    });*/
});