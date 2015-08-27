$( document ).ready(function() {
    $("#putcontenthere").load("/action_items/ai1.html");
    $("/action_items/ai1.html").load("/action_items/ai2.html");
});