 $(document).ready(function () {
        try {
            slides22.load();
            slides22.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('.play3 img').hide();
        $('.play3 img').fadeIn(4000);

        $('.play3').click(function () {
            $('.play3').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("action_items/ai8.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    });