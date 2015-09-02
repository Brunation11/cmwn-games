$(document).ready(function () {

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_1.png)');

    $(".No").hide().delay(2000).fadeIn(100);

    $('.No').click(function(){
       $("#putcontenthere").load("action_items/ai7.html");
    });
});