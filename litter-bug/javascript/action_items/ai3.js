var correct_items = new Array();

$(document).ready(function () {

    $('.bkg-image').css('background-image','url(content/images/background/bkg_3.png)');

    $(".Sunshine").hide();

    $(".next-3").hide().delay(2000).fadeIn(1000);

    $(".next-3").click(function () {
        $(".message-window").addClass("bounceOut");

        setTimeout(function () {
            $(".next-3").addClass("rotateOut");
        },800);


    $(".cardboard").click(function () {
        $(this).hide();
    });

    $(".coke-can").click(function () {
        $(this).hide();
    });

    $(".broken-glass").click(function () {
        $(this).hide();
    });

    $(".trash-paper-1").click(function () {
        $(this).hide();
    });

    $(".trash-bag").click(function () {
        $(this).hide();
    });

    $(".batteries").click(function () {
        $(this).hide();
    });

    $(".glass-bottle").click(function () {
        $(this).hide();
    });

    $(".news-paper").click(function () {
        $(this).hide();
    });

    $(".water-bottle").click(function () {
        $(this).hide();
    });

    $(".tires").click(function () {
        $(this).hide();
    });

    $(".can").click(function () {
        $(this).hide();
    });

    $(".trash-paper-2").click(function () {
        $(this).hide();
    });

    $(".tuna-can").click(function () {
        $(this).hide();
    });

    $(".banana").click(function () {
        $(this).hide();
    });

    $(".trash-paper-3").click(function () {
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
                $("#putcontenthere").load("action_items/ai4.html");
            });
        }

    });
});