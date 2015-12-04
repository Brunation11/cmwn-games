  $(document).ready(function () {
        completeFlip(24274);
        try {
            load_8.load();
            load_8.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai1.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

    })