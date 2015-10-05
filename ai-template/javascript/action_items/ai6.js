 $(document).ready(function () {
        $('#slide_2 img').hide();
        $('#slide_2 h2').hide();
        $('.nextBtn').click(function () {
            $('#slide_1 img').fadeOut(2000);
            $('#slide_2 img').fadeIn(2000);
            $('#slide_2 h2').fadeIn(2000);
        });

        $('.back').click(function () {
           $("#putcontenthere").load("action_items/ai5.html");
        });

        $('.back2').click(function () {
            $('#slide_1 img').fadeIn(2000);
            $('#slide_2 img').fadeOut(2000);
            $('#slide_2 h2').fadeOut(2000);
        });

        $('.nextBtn1').click(function () {
            $('.nextBtn1').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai1.html");
            });

        });
    });