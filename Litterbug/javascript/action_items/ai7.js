$(document).ready(function () {

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_1.png)');

    $(".Next").hide().delay(1000).fadeIn(1000);

    $('.Next').click(function(){
       $("#putcontenthere").load("action_items/ai8.html");
    });
});