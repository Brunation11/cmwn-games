$(document).ready(function () {

    $(".text").hide().delay(1000).fadeIn(90);

    $(".Commit").hide().delay(1700).fadeIn(90);

    $('.Commit').click(function(){
        $("#putcontenthere").load("action_items/ai13.html");
    });

});