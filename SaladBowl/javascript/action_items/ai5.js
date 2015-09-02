$(document).ready(function () {
        $('.play').click(function () {
            $('.play').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai6.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    });