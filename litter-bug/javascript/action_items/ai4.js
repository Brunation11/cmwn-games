$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".no-1").hide().delay(1000).fadeIn(100);

    $('.no-1').click(function(){
       $("#putcontenthere").load("action_items/ai5.html");
    });

});