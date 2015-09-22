$(document).ready(function () {
    sl6.load();
    sl6.play();
    // $('#header2').hide();
    $('.forward1').hide();
    $('.back1').hide();
    $('.forward').click(function () {
        $('#header2 h1').show();
        $('#header2 img').show();
        $('#header1').hide();
        $('.forward1').show();
        $('.forward').hide();
        $('.back1').show();
        $('.back').hide();
    });
    $('.forward1').click(function () {
        $('.forward1').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai4.html");
        });
        nex.play();
    });
    $('.back1').click(function () {
        $('#header1').show();
        $('#header2').hide();
        $('.forward').show();
        $('.forward1').hide();
        $('.back').show();
        $('.back1').hide();
    });
    $('.back').click(function () {
        $('.back').delay(1000).delay(1000, function () {
            $("#putcontenthere").load("action_items/ai2.html");
        });
        nex.play();
    });
        $('.bkg-image').css('background-image','url(content/images/BKG_3.png)');

});