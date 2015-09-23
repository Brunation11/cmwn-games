$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".no-3").hide().delay(1000).fadeIn(100);

    $('.no-3').click(function(){
        click.load();
        click.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai7.html");
        },1000);
    });

});