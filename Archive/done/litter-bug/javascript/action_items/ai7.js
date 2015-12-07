$(document).ready(function () {
    sing.load();
    sing.play();
    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".next-4").hide().delay(1000).fadeIn(1000);

    $('.next-4').click(function(){
        click.load();
        click.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai8.html");
        },1000);
    });

});