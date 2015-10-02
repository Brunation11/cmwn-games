          $(document).ready(function () {
        try {
            title_screen.load();
            title_screen.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai2.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    })