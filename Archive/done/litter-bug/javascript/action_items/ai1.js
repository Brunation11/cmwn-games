$(document).ready(function () {
bkgmusic.load();
bkgmusic.play();
$ ('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".eco-logo").hide().delay(1000).fadeIn(500);

    $(".next-1").hide().delay(2000).fadeIn(1000);

    $('.next-1').click(function(){
        click.load();
        click.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai2.html");
        },1000);

    });
});