$(document).ready(function () {

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $(".Next7").click(function() {

            click.load();
            click.play();
    });
    $(".Flip").show();
    $(".text_2_2").show();
    $(".Stamp").hide();

    setTimeout(function () {
        stamp.load();
        stamp.play();
    },2200);
    setTimeout(function () {

        $(".Stamp").show();
    }, 2000);

});