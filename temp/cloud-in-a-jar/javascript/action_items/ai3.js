
  $(document).ready(function () {
        $('#Btn-hide img').hide();
        $('#Btn-hide1 img').hide();
        $('#Btn-hide2 img').hide();
        $('#Btn-hide3 img').hide();


        $('#btn2').click(function () {
            $('#btn2').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("action_items/ai4.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

$('#btn2').hide();
            
            $("#next_btn").click(function () {
                $('#Btn-hide img').hide();
                $('#pop-up').modal('show');
                $('#Btn-hide img').fadeIn(25000);
                btn_click.play();
                correct_items.push(1);
                if (correct_items.length === 4) {
                    //pop or redirect your game complete screen
                    $('#btn2').show();
                }
            });
            
            $("#next_btn1").click(function () {
                $('#Btn-hide1 img').hide();
                $('#pop-up1').modal('show');
                $('#Btn-hide1 img').fadeIn(25000);
                btn_click.play();
                correct_items.push(2);
                if (correct_items.length === 4) {
                    //pop or redirect your game complete screen
                    $('#btn2').show();
                }
            });

           
            $("#next_btn2").click(function () {
                $('#Btn-hide2 img').hide();
                $('#pop-up2').modal('show');
                $('#Btn-hide2 img').fadeIn(25000);
                btn_click.play();
                correct_items.push(3);
                if (correct_items.length === 4) {
                    //pop or redirect your game complete screen
                    $('#btn2').show();
                }
            });

            $("#next_btn3").click(function () {
                $('#Btn-hide3 img').hide();
                $('#pop-up3').modal('show');
                $('#Btn-hide3 img').fadeIn(25000);
                btn_thunder.play();
                correct_items.push(4);
                if (correct_items.length === 4) {
                    //pop or redirect your game complete screen
                    $('#btn2').show();
                }
            });

            $("#Btn-hide").click(function () {
                $('#pop-up').modal('hide');

            });
            
            $("#Btn-hide1").click(function () {
                $('#pop-up1').modal('hide');

            });
            
            $("#Btn-hide2").click(function () {
                $('#pop-up2').modal('hide');

            });
            
            $("#Btn-hide3").click(function () {
                $('#pop-up3').modal('hide');

            });


    })