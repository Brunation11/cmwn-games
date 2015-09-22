
 $(document).ready(function () {


        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai19.html");
            });
            click.play();
            try {
                rac.pause();
            }
            catch (err) {
                //no sound - log error
            }
        });


        $('#btn1').click(function () {
            $('#btn1').delay(1000).delay(1000, function () {
               $("#putcontenthere").load("action_items/ai33.html");
            });
            click.play();
        });
    })