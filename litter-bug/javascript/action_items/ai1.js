$(document).ready(function () {

$ ('.bkg-image').css('background-image','url(content/images/background/bkg_1.png)');

    $(".eco-logo").hide().delay(1000).fadeIn(500);

    $(".Next-1").hide().delay(2000).fadeIn(1000);

    $('.Next-1').click(function(){
       $("#putcontenthere").load("action_items/ai2.html");
    });
});