$(document).ready(function () {

    $('.close-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('.no').click(function () {
        $('#quit-game').modal('hide');
    });

    $('.replay').click(function(){
        $("#putcontenthere").load("action_items/ai6.html");
    });
    
});