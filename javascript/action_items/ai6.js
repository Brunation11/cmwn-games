$(document).ready(function () {

        $('#video-modal').modal('show');

        $('#close').click(function () {
            $('#game-close').modal('show');
        });

        $('.No-Btns').click(function () {
            $('#game-close').modal('hide');
        });

});