
         $(document).ready(function () {

        try {
            slide12.play();
        }
        catch (err) {
            //no sound - log error
        }
$('.bkg-image').css('background-image','url(content/images/BKG_4.png)');

        $('.play4').click(function () {
            $('.play4').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai5.html");
            });
             try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        });


    });