
 $(document).ready(function () {

        try {
            yawn.play();
        }
        catch (err) {
            //no sound - log error
        }


        $('.last img').hide();
        $('.head4 img').hide();

        $('.last img').fadeIn(7000);
        $('.head4 img').fadeIn(4000);
$('.bkg-image').css('background-image','url(content/images/BKG_3.png)');

        $('.last3').click(function () {
            $('.last3').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai34.html");
            });
             try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        });

    });