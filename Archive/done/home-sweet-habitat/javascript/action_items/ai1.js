$(document).ready(function () {

    background.load();
    background.play();
    $('.close-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('.no').click(function () {
        $('#quit-game').modal('hide');
    });

    $(".play-Btn").click(function (){
        $("#putcontenthere").load("action_items/ai2.html");
    });
    
});