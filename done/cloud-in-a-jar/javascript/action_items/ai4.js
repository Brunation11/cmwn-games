$(document).ready(function () {
        $('.s1').fadeIn(2000);
        $('.s2').fadeIn(4000);
        $('.s3').fadeIn(6000);
        $('.s4').fadeIn(8000);
        $('#btn').fadeIn(9000);


        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai5.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    })