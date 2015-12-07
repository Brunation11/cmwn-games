
 $(document).ready(function () {

        try {
            yawn.play();
        }
        catch (err) {
            //no sound - log error
        }


        $('.last img').hide();
        $('.head7 img').hide();

        $('.last img').fadeIn(7000);
        $('.head7 img').fadeIn(4000);

$('.bkg-image').css('background-image','url(content/images/BKG_3.png)');
        $('.last6').click(function () {
            $('.last6').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });
             try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        });

    });