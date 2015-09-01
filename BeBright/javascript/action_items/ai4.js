$(document).ready(function () {

    $(".upload-btn").hide().delay(1000).fadeIn(600);

    $(".upload-btn ").click(function(){

        $("#putcontenthere").load("action_items/ai5.html");
    });

    $ ('.upload-btn').css('background-image','url(/content/images/buttons/btn_upload.png) 0 0 no-repeat');

});