$(document).ready(function () {

    background.load();
    background.play();

    $('.close-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('.no').click(function () {
        $('#quit-game').modal('hide');
    });

    $('.Next-1').click(function (){
        $("#putcontenthere").load("action_items/ai3.html");
    });
    
});