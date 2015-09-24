    $(document).ready(function () {



    // $('#pop-up').modal('show');



    //to use the close modal, use this function

    $('.close-Btn').click(function () {
        $('#game-info').modal('show');
    });

    /* Exp: <div id="close">
    <div class="col-sm-4 content-box">
    <img src="~/content/images/btn_close.png" class="img-responsive" alt="Responsive image">
    </div>*/

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