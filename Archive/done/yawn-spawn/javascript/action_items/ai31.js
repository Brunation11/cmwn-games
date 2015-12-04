 $(document).ready(function () {

        try {
            yawn.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('.last img').hide();
        $('.head2 img').hide();

        $('.last img').fadeIn(7000);
        $('.head2 img').fadeIn(4000);

$('.bkg-image').css('background-image','url(content/images/BKG_3.png)');

        $('.last1').click(function () {
            $('.last1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai32.html");
            });
            try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        });

    });