 $(document).ready(function () {

        try {
            yawn.play();
        }
        catch (err) {
            //no sound - log error
        }


        $('.last img').hide();
        $('.head5 img').hide();

        $('.last img').fadeIn(7000);
        $('.head5 img').fadeIn(4000);
$('.bkg-image').css('background-image','url(/content/images/BKG_3.png)');
        $('.last').click(function () {
            $('.last').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai35.html");

            });
            click.play();
        });

    });