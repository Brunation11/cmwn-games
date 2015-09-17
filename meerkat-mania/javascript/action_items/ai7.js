$(document).ready(function () {

    $('#content2').hide();
    $('#content3').hide();

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');

    });

    $('#btn').click(function () {
        $('#content2').hide();
        $('#content3').show();
        btn_click.play();
    });

    $('#friends').click(function () {
        $('#content2').show();
        $('#content3').hide();
        btn_click.play();
    });

    $('#done').click(function () {
        $('#done').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai9.html");
        });
        btn_click.play();
    });

    $('#play').click(function () {
        $('#content').hide();
        btn_click.play();

            $('#content2').show();

    });

});