
  try
    {
        correct.load();
        correct.play();
    }
    catch(err)
    {
        //no sound - log error
    }

    $(document).ready(function () {

        $('#bkg2 img').hide();

        $('#bkg2 img').fadeIn(6000);

        $('#next_btn').click(function () {
            $('#next_btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai3.html");
            });
            try {
                btn_click.load();
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }

            try {
                correct.pause();
            }
            catch (err) {
                //no sound - log error
            }

        });





    })