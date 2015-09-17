$(document).ready(function () {
        try {
            load_15.load();
            load_15.play();
        }
        catch (err) {
            //no sound - log error
        }
        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai14.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

    })