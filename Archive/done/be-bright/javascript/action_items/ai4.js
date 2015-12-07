$(document).ready(function () {
     music.load();
     music.play();
      music.volume = 0.3;
    $(".Next1").hide();
    setTimeout(function() {
        arrows.load();
        arrows.play();
        $(".Next1").hide().delay(200).fadeIn(600);
    },1200);
    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $(".Next1").click(function () {
            click.load();
            click.play();
	setTimeout(function(){
                $("#putcontenthere").load("action_items/ai7.html");
            },1000);

    });

    $(".upload-btn").hide().delay(1000).fadeIn(600);

    $(".upload-btn ").click(function(){

        $("#putcontenthere").load("action_items/ai7.html");
    });

});