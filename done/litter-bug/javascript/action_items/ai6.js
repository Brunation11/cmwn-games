$(document).ready(function () {
    ground.load();
    ground.play();
    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".no-3").hide().delay(1000).fadeIn(100);

    $('.no-3').click(function(){
        no.load();
        no.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai7.html");
        },1000);
    });

});