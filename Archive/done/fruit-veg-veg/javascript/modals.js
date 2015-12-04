$(document).ready(function () {

    $('.A').click(function () {

        $("#level-complete").modal('show');

    });

    $('.B').click(function () {

        $("#retry-level").modal('show');

    });



    // click quit button
    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');
    });

   // dismiss quit screen
    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });


});