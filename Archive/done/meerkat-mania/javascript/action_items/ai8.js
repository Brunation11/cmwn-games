$(document).ready(function () {
        
    $('#btn2').click(function () {
        $('#btn2').delay(3000).delay(10000, function () {
            $("#putcontenthere").load("action_items/ai9.html");
        });
        btn_click.play();
    });

    $("#Btn-hide1").click(function () {
        $('#retry-level').modal('hide');
    });

    $("#btn1").click(function () {
        $('#btn1').delay(3000).delay(10000, function () {
            $("#putcontenthere").load("action_items/ai7.html");
        });
        btn_click.play();
    });

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });

})