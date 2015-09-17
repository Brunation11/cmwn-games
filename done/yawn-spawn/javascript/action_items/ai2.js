$(document).ready(function () {
    
        try {
            slide3.play();
        }
        catch (err) {
            //no sound - log error
        }
$('.bkg-image').css('background-image','url(content/images/BKG_2.png)');
        $('.play2').click(function () {
            $('.play2').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai3.html");
            });
            click.play();
            slide3.pause();
        });

    });