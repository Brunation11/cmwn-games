$(document).ready(function () {
    bkmusic.load();
    bkmusic.play();
    bkmusic.volume = 0.4;

    $('.Play').hide().delay(3000).fadeIn(4000);

    $('.Play').click(function(){
        play.load();
        play.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai2.html");
        },1000);

    });


    $('.title').hide().delay(500).fadeIn(4000);
});