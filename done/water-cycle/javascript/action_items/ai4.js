var correct_items = new Array();
$(document).ready(function () {
    vo17.play();
    setTimeout(function(){ vo18.play(); }, 3000);

$ ('.bkg-image').css('background-image','url(content/images/background/BKG_5.png)');

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $("#fact_1").modal('show');
    $("#fact_2").modal('hide');
    $("#fact_3").modal('hide');
    $("#fact_4").modal('hide');
    $("#fact_5").modal('hide');
    $("#fact_6").modal('hide');
    $("#fact_7").modal('hide');
    $("#fact_8").modal('hide');
    $("#fact_9").modal('hide');
    $("#fact_10").modal('hide');
    $("#fact_11").modal('hide');
    $("#fact_12").modal('hide');

    $(".next-Btn-3").hide().delay(1000).fadeIn(400);

    $(".next-Btn-3").click(function () {
        click.load();
        click.play();
    });

    $(".prev-Btn").click(function () {
        click.load();
        click.play();
    });
    $(".b1").click(function () {
        $("#fact_1").modal('hide');
        $("#fact_2").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b2").click(function () {
        $("#fact_2").modal('hide');
        $("#fact_3").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b3").click(function () {
        $("#fact_3").modal('hide');
        $("#fact_4").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b4").click(function () {
        $("#fact_4").modal('hide');
        $("#fact_5").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b5").click(function () {
        $("#fact_5").modal('hide');
        $("#fact_6").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b6").click(function () {
        $("#fact_6").modal('hide');
        $("#fact_7").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b7").click(function () {
        $("#fact_7").modal('hide');
        $("#fact_8").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b8").click(function () {
        $("#fact_8").modal('hide');
        $("#fact_9").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b9").click(function () {
        $("#fact_9").modal('hide');
        $("#fact_10").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b10").click(function () {
        $("#fact_10").modal('hide');
        $("#fact_11").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".b11").click(function () {
        $("#fact_11").modal('hide');
        $("#fact_12").modal('show');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);

    });

    $(".b12").click(function () {
       $("#putcontenthere").load("action_items/ai5.html");

    });

    /// back button ///

    $(".prev1").click(function () {
        $("#fact_1").modal('show');
        $("#fact_2").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev2").click(function () {
        $("#fact_2").modal('show');
        $("#fact_3").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev3").click(function () {
        $("#fact_3").modal('show');
        $("#fact_4").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev4").click(function () {
        $("#fact_4").modal('show');
        $("#fact_5").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev5").click(function () {
        $("#fact_5").modal('show');
        $("#fact_6").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev6").click(function () {
        $("#fact_6").modal('show');
        $("#fact_7").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev7").click(function () {
        $("#fact_7").modal('show');
        $("#fact_8").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev8").click(function () {
        $("#fact_8").modal('show');
        $("#fact_9").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev9").click(function () {
        $("#fact_9").modal('show');
        $("#fact_10").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev10").click(function () {
        $("#fact_10").modal('show');
        $("#fact_11").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);
    });

    $(".prev11").click(function () {
        $("#fact_11").modal('show');
        $("#fact_12").modal('hide');

        $(".next-Btn-3").hide().delay(1000).fadeIn(400);
        $(".prev-Btn").hide().delay(1000).fadeIn(400);


    });


});