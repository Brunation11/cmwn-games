$(document).ready(function () {

    slide_3.play();

    $('#btn').hide();
    $('#btn').fadeIn(4000);
    $('#btn').click(function () {
        $('#btn').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai3.html");
        });
        btn_click.play();
    });

    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');
    });

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

})