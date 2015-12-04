$(document).ready(function () {
    steps.load();
    steps.play();
    $('.forward').hide();
    $('.tagit').hide();
    $('.forward1').click(function () {
        $('.forward1').hide();
        $('.forward').show();
        $('.tagit').fadeIn(3000);
    });
    $('.forward').click(function () {
        $('.forward').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai5.html");
        });
        nex.play();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai3.html");
        });
        nex.play();
    });
    $('.bkg-image').css('background-image','url(content/images/BKG_2.png)');

});