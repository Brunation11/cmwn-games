var done;
var correct_items = new Array();


$(document).ready(function () {
    //slide_4.play();

    /*play loop;*/
    document.getElementById('slide_4').addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);

    /*hide all elements for it to be called in later funtions*/
    $('#btn').hide();
    $("#Btn-hide1").hide();
    $("#Btn-hide2").hide();
    $("#Btn-hide3").hide();
    $("#Btn-hide4").hide();
    $("#Btn-hide5").hide();

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

    /*hover function for meerkat pair*/
   // $('#meerkat5').mouseover(function () {
   //    $('#m5').fadeIn(100);
   //}).mouseout(function () {
   //    $('#m5').fadeOut(100);
   //});

    /*This is after all modal have been shown*/
    $('#btn').click(function () {
        $('#btn').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai4.html");
        });
        btn_click.play();
    });

    /*hide close modal*/
    $("#Btn-hide").click(function () {
        $('#retry-level').modal('hide');
    });

    /*meerkat pair*/
    $("#meerkat5").click(function () {
        $('#banner').hide();
        $('#m5').css('opacity','1');
        $('#retry-level1').modal('show');
        $('#Btn-hide1').delay(6000).fadeIn(500);
        correct_items.push(1);
        if (correct_items.length === 5) {
            //pop or redirect your game complete screen
            $('#btn').show();
        }
    });
    $("#Btn-hide1").click(function () {
        $('#retry-level1').modal('hide');
        $('#banner').show();
    });

    /*meekat babysitter*/
    $("#meerkat4").click(function () {
        $('#banner').hide();
        $('#m4').css('opacity','1');
        $('#retry-level2').modal('show');
        $('#Btn-hide2').delay(6000).fadeIn(500);
        correct_items.push(2);
        if (correct_items.length === 5) {
            //pop or redirect your game complete screen
            $('#btn').show();
        }
    });

    $("#Btn-hide2").click(function () {
        $('#retry-level2').modal('hide');
        $('#banner').show();
    });

    /*meerkat foragers*/
    $("#meerkat3").click(function () {
        $('#banner').hide();
        $('#m3').css('opacity', '1');
        $('#retry-level3').modal('show');
        $('#Btn-hide3').delay(6000).fadeIn(500);
        correct_items.push(3);
        if (correct_items.length === 5) {
            //pop or redirect your game complete screen
            $('#btn').show();
        }
    });

    $("#Btn-hide3").click(function () {
        $('#retry-level3').modal('hide');
        $('#banner').show();
    });

    /*meerkat sentry*/
    $("#meerkat2").click(function () {
        $('#banner').hide();
        $('#m2').css('opacity', '1');
        $('#retry-level4').modal('show');
        $('#Btn-hide4').delay(6000).fadeIn(500);
        correct_items.push(4);
        if (correct_items.length === 5) {
            //pop or redirect your game complete screen
            $('#btn').show();
        }
    });

    $("#Btn-hide4").click(function () {
        $('#retry-level4').modal('hide');
        $('#banner').show();
    });

    /*meerkat pup*/
    $("#meerkat1").click(function () {
        $('#banner').hide();
        $('#m1').css('opacity', '1');
        $('#retry-level5').modal('show');
        $('#Btn-hide5').delay(6000).fadeIn(500);
        correct_items.push(5);
        if (correct_items.length === 5) {
            //pop or redirect your game complete screen
            $('#btn').show();
        }
    });

    $("#Btn-hide5").click(function () {
        $('#retry-level5').modal('hide');
        $('#banner').show();
    });

})