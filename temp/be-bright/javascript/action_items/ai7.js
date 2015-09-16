$(document).ready(function () {

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $(".Flip").show();
    $(".text_2_2").show();
    $(".Stamp").hide();

    setTimeout(function () {
        $(".Stamp").show();
    }, 2000);

});