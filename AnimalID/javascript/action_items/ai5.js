$(document).ready(function () {
        other_screen.play();


        $('#next_btn').click(function () {

            btn_wrong.play();
        });

        $('#next_btn1').click(function () {

            btn_wrong.play();
        });

        $('#next_btn2').click(function () {

            btn_wrong.play();
        });

        $('#correct_btn').click(function () {

            btn_yes.play();
        });

        $('#correct_btn').click(function () {
            $('#retry-level').modal('show')
        });


        $("#Btn-hide").click(function () {
            $('#pop-up').modal('hide');

        });

        $("#Btn-hide1").click(function () {
            $('#pop-up').modal('hide');

        });

    })