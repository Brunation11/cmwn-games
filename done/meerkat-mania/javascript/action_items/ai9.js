$(document).ready(function () {

    completeFlip(24310);

    flip.load();
    flip.play();

    $('#btn').click(function () {
        $('#btn').delay(3000).delay(10000, function () {
            $("#putcontenthere").load("action_items/ai1.html");
        });
        btn_click.play();
    });

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');
    });

})