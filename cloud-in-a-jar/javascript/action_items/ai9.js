
  $(document).ready(function () {


        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai10.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });



    })