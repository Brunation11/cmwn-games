$(document).ready(function () {



    $('.bkg-image').css('background-image','url(content/images/background/bkg_2.png)');

	$('.nextBtn1').click(function () {
        $('#slide_1 img').hide();
        $('#slide_1 h2').hide();
        $('#slide_2 h2').fadeIn(2000);
        $('#slide_2 ul').fadeIn(2000);
        $('#slide_2 img').fadeIn(2000);
    });

    $('.nextBtn2').click(function () {
        $('#slide_2 img').hide();
        $('#slide_2 h2').hide();
        $('#slide_2 ul').hide();
        $('#slide_3 img').fadeIn(2000);
        $('#slide_3 h2').fadeIn(2000);
        try {
       steps.play();
    }
    catch (err) {
       //no sound - log error
    }
        });

    $('.nextBtn3').click(function () {
        $('#slide_3 img').hide();
        $('#slide_3 h2').hide();
        $('#slide_4 img').fadeIn(2000);
        $('#slide_4 h2').fadeIn(2000);
    });

    $('.nextBtn4').click(function () {
        $('#slide_4 img').hide();
        $('#slide_4 h2').hide();
        $('#slide_5 img').fadeIn(2000);
        $('#slide_5 h2').fadeIn(2000);
    });

    $('.nextBtn5').click(function () {
        $('#slide_5 img').hide();
        $('#slide_5 h2').hide();
        $('#slide_6 img').fadeIn(2000);
        $('#slide_6 h2').fadeIn(2000);
    });

    $('.nextBtn6').click(function () {
        $('#slide_6 img').hide();
        $('#slide_6 h2').hide();
        $('#slide_7 img').fadeIn(2000);
        $('#slide_7 h2').fadeIn(2000);
    });

    $('.nextBtn7').click(function () {
        $('#slide_7 img').hide();
        $('#slide_7 h2').hide();
        $('#slide_8 img').fadeIn(2000);
        $('#slide_8 h2').fadeIn(2000);
    });

    $('.nextBtn8').click(function () {
        $('#slide_8 img').hide();
        $('#slide_8 h2').hide();
        $('#slide_9 img').fadeIn(2000);
        $('#slide_9 h2').fadeIn(2000);
    });

    $('.nextBtn9').click(function () {
        $('#slide_9 img').hide();
        $('#slide_9 h2').hide();
        $('#slide_10 img').fadeIn(2000);
        $('#slide_10 h2').fadeIn(2000);
    });

    $('.nextBtn10').click(function () {
        $('#slide_10 img').hide();
        $('#slide_10 h2').hide();
        $('#slide_11 img').fadeIn(2000);
        $('#slide_11 h2').fadeIn(2000);
         completeFlip(24317);
        try {
       steps.pause();
    }
    catch (err) {
       //no sound - log error
    }
        try {
       flip.play();
    }
    catch (err) {
       //no sound - log error
    }
    });

});