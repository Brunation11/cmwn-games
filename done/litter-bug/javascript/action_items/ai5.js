$(document).ready(function () {
    school.load();
    school.play();

    $('.bkg-image').css('background-image','url(content/images/background/bakg_1.png)');

    $(".no-2").hide().delay(1000).fadeIn(100);

    $('.no-2').click(function(){
        no.load();
        no.play();
        setTimeout(function(){
            $("#putcontenthere").load("action_items/ai6.html");
        },1000);
    });

});