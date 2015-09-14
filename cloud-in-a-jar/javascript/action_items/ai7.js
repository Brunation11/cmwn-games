
          $(document).ready(function () {
        load_8.play();

        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai17.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#btn1').click(function () {
            $('#btn1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai6.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    })