$(document).ready(function () {
    $('.header-fruit').hide().delay(500).fadeIn(2000);

    $('.Next').hide().delay(2000).fadeIn(2000);

    $('.Next').click(function(){
        $("#putcontenthere").load("action_items/ai4.html");
    });

    $(".header-text").hide();
        setTimeout(function () {
    $('.header-text').hide().delay(1000).fadeIn(600);
},1000);
});
