$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

$( document ).ready(function() {
    $("#putcontenthere").load("action_items/ai4.html");
});