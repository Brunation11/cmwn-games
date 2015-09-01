$(document).ready(function () {
        $('.forward').click(function () {
            $('.forward').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai1.html");
            });
            click.play();
        });
        $('.back').click(function () {
            $('.back').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("/action_items/ai11.html");
            });
            click.play();
        });
    });