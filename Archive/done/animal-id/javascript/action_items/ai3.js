    
             $(document).ready(function () {
        other_screen.play();

$('.nextBtn3').click(function () {
            $('.nextBtn3').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });
            $('.modal-backdrop fade in').css('display','none');
            other_screen.play();
        });

        $('#next_btn').click(function () {

            btn_wrong.play();
        });

        $('#next_btn1').click(function () {

            btn_wrong.play();
        });

        $('#next_btn2').click(function () {

            btn_wrong.play();
        });

        $('#lion1').click(function () {

            lion.play();
        });

        $('#lion1').click(function () {
            $('#retry-level').modal('show')
        });


        $("#Btn-hide").click(function () {
            $('#pop-up').modal('hide');

        });

        $("#Btn-hide1").click(function () {
            $('#pop-up').modal('hide');

        });

    })