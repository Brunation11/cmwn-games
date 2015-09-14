$(document).ready(function () {
    $('#title img').fadeIn(3000).delay(2500).fadeOut(2000, function () {
        $("#putcontenthere").load("action_items/ai2.html");
    });
})