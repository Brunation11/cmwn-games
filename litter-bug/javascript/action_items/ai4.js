$(document).ready(function () {

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_1.png)');

    $(".No-1").hide().delay(1000).fadeIn(100);

    $('.No-1').click(function(){
       $("#putcontenthere").load("action_items/ai5.html");
    });
    
});