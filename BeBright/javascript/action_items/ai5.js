$(document).ready(function(){

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $(".Upload-again").click(function() {
            $("#putcontenthere").load("action_items/ai6.html");
        });

    $(".finished").click(function(){
            $("#putcontenthere").load("action_items/ai6.html");
    });
});