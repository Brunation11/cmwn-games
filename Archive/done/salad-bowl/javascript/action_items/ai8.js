$(document).ready(function () {
        $('.play8 img').hide();
        $('.play8 img').fadeIn(4000);

        $('.play8').click(function () {
            $('.play8').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai9.html");

            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    });