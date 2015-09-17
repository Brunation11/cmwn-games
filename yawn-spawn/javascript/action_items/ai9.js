    $(document).ready(function () {

        try {
            slide17.play();
        }
        catch (err) {
            //no sound - log error
        }
        
$('.bkg-image').css('background-image','url(content/images/BKG_8.png)');

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
        
        });

    });