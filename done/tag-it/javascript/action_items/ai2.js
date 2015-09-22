$(document).ready(function () {
    sl3.load();
    sl3.play();
    // $('.header2').hide();
    $('.forward1').hide();
    $('.forward').click(function () {
        $('.header2 h1').show();
        $('.header1').hide();
        $('.forward1').show();

    });
    $('.forward1').click(function () {
        $('.forward1').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai3.html");
        });
        nex.play();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai1.html");
        });
        nex.play();
    });
     $('.bkg-image').css('background-image','url(content/images/BKG_1.png)');
});