$(document).ready(function () {
    bkgmusic.pause();
    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

     $('.next-5').click(function(){
        click.load();
        click.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai12.html");
        },1000);
    });

});