$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bkg_1.png)');

    $(".No-3").hide().delay(1000).fadeIn(100);

    $('.No-3').click(function(){
       $("#putcontenthere").load("action_items/ai7.html");
    });
    
});