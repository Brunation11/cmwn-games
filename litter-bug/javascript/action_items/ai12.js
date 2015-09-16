$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bkg_5.png)');

    $(".text").hide().delay(1000).fadeIn(90);

    $(".commit").hide().delay(1700).fadeIn(90);

    $('.commit').click(function(){
        $("#putcontenthere").load("action_items/ai13.html");
    });

});