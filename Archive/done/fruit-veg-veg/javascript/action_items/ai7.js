$(document).ready(function () {
    bkmusic.volume = 0.2;
    done.load();
    done.play();
    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        play.load();
        play.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai8.html");
        },1000);
        
    });

    $(".second-last").hide();
    setTimeout(function () {
        $('.second-last').hide().delay(100).fadeIn(600);
    }, 1000);

});