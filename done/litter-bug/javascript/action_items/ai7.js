$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".next-4").hide().delay(1000).fadeIn(1000);

    $('.next-4').click(function(){
       $("#putcontenthere").load("action_items/ai8.html");
    });

});