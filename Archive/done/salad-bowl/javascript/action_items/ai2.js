$(document).ready(function () {
        $('.play1 img').hide();
        $('.play1 img').fadeIn(4000);

        $('.play1').click(function () {
            $('.play1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai3.html");
            });
         
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    });            