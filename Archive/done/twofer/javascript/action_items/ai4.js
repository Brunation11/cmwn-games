// Fade-in & out JQuery

$(document).ready(function () {
    $('#horse-clues').fadeIn(3000).delay(1500).fadeOut(1500, function () {
        $("#putcontenthere").load("action_items/ai5.html");
    });
});