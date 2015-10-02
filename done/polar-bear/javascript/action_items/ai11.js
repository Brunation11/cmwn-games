$(document).ready(function () {

    $('#game-close').modal('hide');

    $('#close').click(function () {
        $('#game-close').modal('show');
        $('.bear-info').modal('hide');
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        $('.bear-info').modal('show');
    });

    $('.Next-Ai').click(function () {
        $("#putcontenthere").load("action_items/ai12.html");
    });

});

$(function () { // DOM ready shorthand

    $("#select1").hide();

    $("#select2").hide();

    $("#select3").hide();

    $(".Next-Ai").hide();

    $("#left").click(function () {
        click.load();
        click.play();
        $("#select1").show();
        $("#select2").hide();
        $("#select3").hide();
        $("#box1").hide();
    });

    $("#center").click(function () {
        click.load();
        click.play();
        $("#select1").hide();
        $("#select2").show();
        $("#select3").hide();
        $("#box2").hide();
    });

    $("#right").click(function () {
        click.load();
        click.play();
        $("#select1").hide();
        $("#select2").hide();
        $("#select3").show();
        $("#box3").hide();

        setTimeout(function() {
            $('.Next-Ai').show();
        },1000);

    });

});