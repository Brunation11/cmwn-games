      $(document).ready(function () {

        completeFlip(24321);

        try {
            flip.load();
            flip.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('.play9 img').hide();
        $('.play9 img').fadeIn(4000);

        $('.play9').click(function () {
            $('.play9').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai1.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
            flip.pause();
        });
    });