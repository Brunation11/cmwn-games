         $(document).ready(function () {


        $('.play').click(function () {
            $('.play').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai8.html");
            });
        });
        try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('.play1').click(function () {
            $('.play1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai8.html");
            });
        });
        try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }

    });