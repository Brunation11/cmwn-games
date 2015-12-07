$(document).ready(function () {
        title_screen.play();
$('.nextBtn1').click(function () {
            $('.nextBtn1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai2.html");
            });
        });
    })