  $(document).ready(function () {
        $('.play6').click(function () {
            $('.play6').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("action_items/ai7.html");
            });
             try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        });

$('.bkg-image').css('background-image','url(content/images/BKG_1.png)');
    });