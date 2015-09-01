$(document).ready(function () {
    $(".Upload").hide().delay(1000).fadeIn(100);

    $('.Upload').click(function(){
        $("#putcontenthere").load("action_items/ai10.html");
    });
});