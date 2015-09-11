$(document).ready(function () {
        $('.s1').hide().fadeIn(2000);
        $('.s2').hide().fadeIn(4000);
        $('.s3').hide().fadeIn(6000);
        $('.s4').hide().fadeIn(8000);
        $('#btn').click(function () {
            $('#btn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai5.html");
            });
            try {
                btn_click.play();
            }
            catch (err) {
                //no sound - log error
            }
        });
    })