$(document).ready(function () {
    cleanup.load();
    cleanup.play();
    bkgmusic.volume = 0.2;
    $(".clean-up").hide().delay(700).fadeIn(600);

    $(".next-2").hide().delay(2000).fadeIn(1000);

    $('.next-2').click(function(){
        cleanup.pause();
        click.load();
        click.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai3.html");
        },1000);
    });

    $('.bkg-image').css('background-image','url(content/images/background/bakg_2.png)');
});