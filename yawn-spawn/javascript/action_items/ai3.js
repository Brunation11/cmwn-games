 $(document).ready(function () {
       
        try {
            yawn.play();
        }
        catch (err) {
            //no sound - log error
        }

$('.bkg-image').css('background-image','url(content/images/BKG_3.png)');
        $('.last img').hide();
        $('.head1 img').hide();


        $('.last img').fadeIn(7000);
        $('.head1 img').fadeIn(4000);
       
        
        $('.last').click(function () {
            $('.last').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai31.html");
            });
             try {
            click.play();
        }
        catch (err) {
            //no sound - log error
        }
        
        });

    });