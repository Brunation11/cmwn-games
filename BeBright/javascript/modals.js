$(document).ready(function () {

    $('.A').click(function () {

        $("#level-complete").modal('show');

    });

    $('.B').click(function () {

        $("#retry-level").modal('show');

    });

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

});