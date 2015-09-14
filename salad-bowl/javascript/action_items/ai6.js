$(document).ready(function () {


        $('.play5').click(function () {
            $('.play5').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai7.html");
            });
        });
        try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
    });