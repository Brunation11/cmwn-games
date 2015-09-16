$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bkg_1.png)');

    $(".no-3").hide().delay(1000).fadeIn(100);

    $('.no-3').click(function(){
       $("#putcontenthere").load("action_items/ai7.html");
    });
    
});