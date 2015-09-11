//////// these variables control the button, the current item and the dropping animation of the current item /////
        var click_item = $(this).attr('id');
        var click_correct = $(this).attr('data-correct');
        var item_animate = click_item + "#"
        var current = $('.item');

//////check to see where the carousel paused and find the selected item id /////

        var selected_item = $("#carousel_ul li")[2].id;
        selected_item = selected_item.replace("-li", "");


         if (click_correct === selected_item) {

            //remove the correct item so ite does not diplay again
            // $(this).remove();
            if (correct_stuff.length === 1) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top : -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 10);

                }

                if (correct_stuff.length === 2) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 3) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 4) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 5) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15});
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 6) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);
                    $('.carousel-inner').carousel({ pause: true, interval: false });
                }

                if (correct_stuff.length === 7) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 8) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 9) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 10) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 11) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 12) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 13) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 14) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 15) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 16) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 17) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 18) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 19) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 20) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 21) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 22) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 23) {
                   Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 24) {
                    Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 25) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 26) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 27) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 28) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 29) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 30) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 31) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 32) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 33) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 34) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 35) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 36) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 37) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 38) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 39) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

                if (correct_stuff.length === 40) {
                     Correct.play();
                    $('#score p').html(function (i, val) { return val * 1 + 15 });
                    $('.win').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }
            }

              else {
                    //play incorrect sound
                    Wrong.play();
                    $('#score p').html(function (i, val) { return val * 1 - 30 });
                    $('.loose').show().animate({ top: -10 }, 800).hide(1000);
                    $('.carousel-inner').parent().carousel('next', 1);

                }

        $("#" + click_item + "1").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "2").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "3").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "4").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "5").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "6").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "7").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "8").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "9").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "10").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "11").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "12").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "13").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "14").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "15").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "16").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "17").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "18").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "19").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "20").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "21").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "22").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "23").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "24").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "25").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "26").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "27").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "28").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "29").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "30").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "31").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "32").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "33").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "34").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "35").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "36").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "37").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "38").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "39").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        $("#" + click_item + "40").animate({
            'marginTop': "+=220px"  //moves down
        }, 800).hide(1);

        // $('#myCarousel').carousel().animate();

        });

        $('#carousel_ul').carousel().animate();