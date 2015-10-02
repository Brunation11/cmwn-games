$(document).ready(function () {

$('#pop-up').modal('show');



//to use the close modal, use this function
$('.close-Btn').click(function () {
    $('#game-info').modal('show');
});

$('.A').click(function () {

    $("#level-complete").modal('show');

});

$('.B').click(function () {

    $("#retry-level").modal('show');

});

$('.purple-button').click(function () {
    $('#retry-level').modal('hide')
});

$('.close-Btn').click(function () {

    $("#retry-level").modal('show');

});

$('.close-Btn').click(function () {

    $("#game-info").modal('hide');
});

});