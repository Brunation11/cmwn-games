$(document).ready(function () {

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_1.png)');

    $(".Next-4").hide().delay(1000).fadeIn(1000);

    $('.Next-4').click(function(){
       $("#putcontenthere").load("action_items/ai8.html");
    });
    
});