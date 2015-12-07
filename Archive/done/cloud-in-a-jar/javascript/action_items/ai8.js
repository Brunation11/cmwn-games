
  $(document).ready(function () {
        load_12.play();
        try {
            load_12.load();
            load_12.play();
        }
        catch (err) {
            //no sound - log error
        }
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