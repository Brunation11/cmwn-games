$(document).ready(function () {
    $(".Upload-again").hide().delay(900).fadeIn(100);
    $(".post").hide().delay(1000).fadeIn(100);

    $('.post').click(function(){
        $("#putcontenthere").load("action_items/ai10.html");
    });
});