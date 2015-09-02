 $(document).ready(function () {
        try {
            slides22.load();
            slides22.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('.play img').hide();
        $('.play img').fadeIn(4000);

        $('.play').click(function () {
            $('.play').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("/action_items/ai5.html");
            });
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    });