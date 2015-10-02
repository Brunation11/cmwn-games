$(document).ready(function () {
        load_15.play();
        try {
            load_15.load();
            load_15.play();
        }
        catch (err) {
            //no sound - log error
        }
        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai16.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });

    })