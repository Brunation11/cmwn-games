 
$(document).ready(function () {
        $('#btn2').hide();

        $('#btn').click(function () {

            try {
                skip_btn.play();
            }
            catch (err) {
                //no sound - log error
            }
        });



        $('#btn1').click(function () {
            $('#btn2').show();
            try {
                btn_thunder.play();
            }
            catch (err) {
                //no sound - log error
            }
        });




        $('#btn2').click(function () {
            $('#btn2').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai21.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

    $("#close-Btn").click(function () {
        $('#pop-up').modal('show');

    });

    $("#Btn-hide").click(function () {
        $('#pop-up').modal('hide');

    });

    $("#Btn-hide1").click(function () {
        $('#pop-up').modal('hide');

    });

    $('#correct_btn').click(function () {
        $('#retry-level').modal('show')
    });

    })