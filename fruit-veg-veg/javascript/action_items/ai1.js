$(document).ready(function () {
    $('.Play').hide().delay(3000).fadeIn(4000);

    $('.Play').click(function(){
       $("#putcontenthere").load("action_items/ai2.html");
    });


    $('.title').hide().delay(500).fadeIn(4000);
});