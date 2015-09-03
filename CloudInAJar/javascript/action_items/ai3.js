
  $(document).ready(function () {
        $('#Btn-hide img').hide();
        $('#Btn-hide1 img').hide();
        $('#Btn-hide2 img').hide();
        $('#Btn-hide3 img').hide();


        $('#btn2').click(function () {
            $('#btn2').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("/action_items/ai4.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


    })