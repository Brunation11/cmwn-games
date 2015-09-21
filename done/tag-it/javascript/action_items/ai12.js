$(document).ready(function () {
    $('.forward').click(function () {
        $('.forward').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai1.html");
        });
        try {
           click.play();
        }
        catch (err) {
           //no sound - log error
        }
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai11.html");
        });
        try {
           click.play();
        }
        catch (err) {
           //no sound - log error
        }
    });
});