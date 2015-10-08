$(document).ready(function(){

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $('.Next').click(function(){
            $("#putcontenthere").load("action_items/ai7.html");

        });
});