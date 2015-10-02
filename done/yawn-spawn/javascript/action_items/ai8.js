
 $(document).ready(function () {
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
$('.bkg-image').css('background-image','url(content/images/BKG_7.png)');

    });