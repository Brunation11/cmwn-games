var correct_items = new Array();

$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bakg_3.png)');

    $(".sunshine").hide();

    $(".next-3").hide().delay(2000).fadeIn(1000);

    $(".next-3").click(function () {
        click.load();
        click.play();
        $(".message-window").addClass("bounceOut");

        setTimeout(function () {
            $(".next-3").addClass("rotateOut");
        },800);


    $(".cardboard").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".coke-can").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".broken-glass").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".trash-paper-1").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".trash-bag").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".batteries").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".glass-bottle").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".news-paper").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".water-bottle").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".tires").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".can").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".trash-paper-2").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".tuna-can").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".banana").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    $(".trash-paper-3").click(function () {
        select.load();
        select.play();
        $(this).hide();
    });

    }); // end next btn click event
    // After removing all items show arrow


    $(".remove").one('click',function () {

        correct_items.push(15);
        if (correct_items.length === 15) {

            $(".next-3").removeClass("rotateOut");
            $(".next-3").addClass("rotateIn");
            $(".sunshine").fadeIn(3000);
            $(".next-3").click(function () {
                click.load();
                click.play();
                setTimeout(function(){
                    $("#putcontenthere").load("action_items/ai4.html");
                },1000);
            });
        }

    });
});