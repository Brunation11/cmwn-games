$(document).ready(function () {
    $(".Clean-up").hide().delay(700).fadeIn(600);

    $(".Next-2").hide().delay(2000).fadeIn(1000);

    $('.Next-2').click(function(){
       $("#putcontenthere").load("action_items/ai3.html");
    });

    $('.bkg-image').css('background-image','url(/content/images/background/BKG_2.png)');
});