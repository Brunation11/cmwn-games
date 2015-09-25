$(document).ready(function () {
        $('#slide_2 img').hide();
        $('#slide_3 img').hide();
        $('#slide_4 img').hide();
        
        $('.nextBtn').click(function () {
            $('#slide_1 img').fadeOut(2000);
            $('#slide_2 img').fadeIn(2000);
        });
        $('.nextBtn2').click(function () {
            $('#slide_2 img').fadeOut(2000);
            $('#slide_3 img').fadeIn(2000);
        });
        
        $('.nextBtn31').click(function () {
            $('#slide_2 img').fadeIn(2000);
            $('#slide_3 img').fadeOut(2000);
        });

        $('.nextBtn3').click(function () {
            $('#slide_3 img').fadeOut(2000);
            $('#slide_4 img').fadeIn(2000);

        });
       
        $('.nextBtn41').click(function () {
            $('#slide_3 img').fadeIn(2000);
            $('#slide_4 img').fadeOut(2000);

        });


        $('.nextBtn4').click(function () {
            $('.nextBtn4').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });

        });
    });