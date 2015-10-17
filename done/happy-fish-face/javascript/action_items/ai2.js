$(document).ready(function () {

    $("#next-button").hide();
    $("#next-button2").hide();
    $("#next-button3").hide();
    $("#next-button4").hide();

    // Quit screen function

    $('#close').click(function () {
        $('#game-close').modal('show');
        $(".current").each(function () {
            $(this).css("display", "none");
        });
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        $(".current").each(function () {
            $(this).show("display", "block");
        });

    });

    $('#happy').click(function () {
        happy1.load();
        happy1.play();
    });

    $('#sad').click(function () {
        sad1.load();
        sad1.play();
        $("#next-button").show();
    });

    $('#angry').click(function () {
        angry1.load();
        angry1.play();
        $("#next-button").show();
    });

    $('#confused').click(function () {
        con1.load();
        con1.play();
        $("#next-button").show();
    });

    $('#dirty').click(function () {
        dirt.load();
        dirt.play();
    });

    $('#cleans').click(function () {
        pure.load();
        pure.play();
        $("#next-button3").show();
    });

    // First modal
    $('#game-info').modal('show');
    $('#game-info2').modal('hide');

    // next and back button function

    $('#next-button').click(function () {
        $('#game-info').modal('hide');
        $('#game-info2').modal('show');
        $("#next-button2").show();

    });

    $('#next-button2').click(function () {
        $('#game-info2').modal('hide');
        $('#game-info3').modal('show');
        background.play();

    });

    $('#next-button3').click(function () {
        $('#game-info3').modal('hide');
        $('#game-info4').modal('show');
        $("#next-button4").show();
        background.play();

    });




    $('#next-button4').click(function () {
         $("#putcontenthere").load("action_items/ai3.html");
    });

});