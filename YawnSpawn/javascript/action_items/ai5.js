 $(document).ready(function () {

        try {
            slide13.play();
        }
        catch (err) {
            //no sound - log error
        }
$('.bkg-image').css('background-image','url(/content/images/BKG_5.png)');

        $('.play').click(function () {
            $('.play').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai6.html");
            });
            click.play();
        });


    });