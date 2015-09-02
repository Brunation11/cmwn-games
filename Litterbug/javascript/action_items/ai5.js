$(document).ready(function () {

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_1.png)');

    $(".No-2").hide().delay(1000).fadeIn(100);

    $('.No-2').click(function(){
       $("#putcontenthere").load("action_items/ai6.html");
    });
});