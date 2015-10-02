var AI2 = new Array();

$(document).ready(function () {
music.load();
music.play();
    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

setTimeout(function() {
    arrows.load();
    arrows.play();
},1200);

    $(".Video-frame-1").hide();

    $(".Next").hide().delay(1000).fadeIn(600);

    $(".Next").click(function () {
        click.load();
        click.play();

        music.pause();
        var Next = $(".Next");

        AI2.push(Next);

        if (AI2.length === 1) {

            $(".Title").hide();
            $(".Video-frame-1").hide().delay(100).fadeIn(1000);
        }
        if (AI2.length === 2) {
            click.load();
            click.play();

            setTimeout(function(){
                $("#putcontenthere").load("action_items/ai2.html");
            },1000);


        }

    });
});