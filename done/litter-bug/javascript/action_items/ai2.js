$(document).ready(function () {
    $(".clean-up").hide().delay(700).fadeIn(600);

    $(".next-2").hide().delay(2000).fadeIn(1000);

    $('.next-2').click(function(){
       $("#putcontenthere").load("action_items/ai3.html");
    });

    $('.bkg-image').css('background-image','url(content/images/background/bakg_2.png)');
});