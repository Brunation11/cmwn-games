        $(document).ready(function () {
        try {
            slide2.play();
        }
        catch (err) {
            //no sound - log error
        }

    $('.play').click(function () {
        $('.play').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("/action_items/ai2.html");
        });
        click.play();
        slide2.pause();
    });
    });