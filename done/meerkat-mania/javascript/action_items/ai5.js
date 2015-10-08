$(document).ready(function () {

    $('#btn').hide();
    $('#btn').delay(6000).fadeIn(500);
    $('#btn').click(function () {
        $('#btn').delay(1000).delay(1000, function () {
           $("#putcontenthere").load("action_items/ai6.html");
        });
        btn_click.play();
    });

    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');
        btn_click.play();
    });

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
        btn_click.play();
    });

    $("#safe").click(function () {
        $('.flip-off1').hide();
        btn_click.play();
    });

    $("#loved").click(function () {
        $('.flip-off2').hide();
        btn_click.play();
    });

    $("#support").click(function () {
        $('.flip-off3').hide();
        btn_click.play();

    });

    $("#important").click(function () {
        $('.flip-off4').hide();
        btn_click.play();
    });

    $("#included").click(function () {
        $('.flip-off5').hide();
        btn_click.play();
    });

    $("#valued").click(function () {
        $('.flip-off6').hide();
        btn_click.play();
    });

    $("#grateful").click(function () {
        $('.flip-off7').hide();
        btn_click.play();
    });

    $("#happy").click(function () {
        $('.flip-off8').hide();
        btn_click.play();
    });

    $("#secure").click(function () {
        $('.flip-off9').hide();
        btn_click.play();
    });

    $("#worthwhile").click(function () {
        $('.flip-off10').hide();
        btn_click.play();
    });

})