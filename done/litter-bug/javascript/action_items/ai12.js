$(document).ready(function () {
    pledge.load();
    pledge.play();
    bkgmusic.load();
    bkgmusic.play();
    bkgmusic.volume = 0.2;
    $('.bkg-image').css('background-image','url(content/images/background/bakg_5.png)');

    $(".text").hide().delay(1000).fadeIn(90);

    $(".commit").hide().delay(1700).fadeIn(90);

    $('.commit').click(function(){
        pledge.pause();
        commit.load();
        commit.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai13.html");

        },1000);
    });

});