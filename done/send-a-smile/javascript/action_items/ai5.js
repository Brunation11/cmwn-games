$(document).ready(function () {
        $('#slide_2 img').hide();
        $('#slide_2 h2').hide();
        $('#slide_3').hide();
        $('.nextBtn').click(function () {
            $('#slide_1 img').fadeOut(2000);
            $('#slide_1 h2').fadeOut(2000);
            $('#slide_2 img').fadeIn(2000);
            $('#slide_2 h2').fadeIn(2000);
            $('#slide_2 img').fadeOut(3000);
            $('#slide_2 h2').fadeOut(3000);
            $('#slide_3').show(4500);
        });
        $('.backBtn1').click(function () {
            $('.nextBtn2').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });

        });
        $('.backBtn').click(function () {
            $('.nextBtn2').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });

        });
        $('.nextBtn2').click(function () {
            $('.nextBtn2').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai6.html");
            });

        });
    });