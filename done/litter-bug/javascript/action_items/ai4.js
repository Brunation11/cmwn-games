$(document).ready(function () {
    trashroom.load();
    trashroom.play();
    $(".no-2 img").css({'display':'none'});
     $(".no-3 img").css({'display':'none'});
    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".no-1").hide().delay(1000).fadeIn(100);

    $('.no-1').click(function(){
        no.load();
        no.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai5.html");
        },1000);
    });

});