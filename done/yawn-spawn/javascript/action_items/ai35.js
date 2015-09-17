 $(document).ready(function () {

        try {
            yawn.play();
        }
        catch (err) {
            //no sound - log error
        }


        $('.last img').hide();
        $('.head6 img').hide();

        $('.last img').fadeIn(7000);
        $('.head6 img').fadeIn(4000);


$('.bkg-image').css('background-image','url(content/images/BKG_3.png)');
        $('.last5').click(function () {
            $('.last5').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai36.html");
            });
             try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
   
        });

    });