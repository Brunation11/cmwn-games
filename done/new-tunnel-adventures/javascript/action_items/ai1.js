  $(document).ready(function () {
    $('.bkg-image').css('background-image','url(content/images/background/bkg_1.png)');
        
        $('.nextBtn').click(function () {
            $('#slide_1 img').hide();
            $('#slide_2 img').fadeIn(2000);
            $('#slide_2 h2').fadeIn(2000);
            $('.bkg-image').css('background-image','url(content/images/background/bkg_2.png)');

        });
        
         $('.nextBtn1').click(function () {
            $('#slide_2 img').hide();
            $('#slide_2 h2').hide();
            $('#slide_3 img').fadeIn(2000);
            $('#slide_3 h2').fadeIn(2000);
            });

         $('.nextBtn2').click(function () {
            $('#slide_3 img').hide();
            $('#slide_3 h2').hide();
            $('#slide_4 img').fadeIn(2000);
            $('#slide_4 h2').fadeIn(2000);
            });



        $('.nextBtn3').click(function () {
            $('.nextBtn3').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai3.html");
            });
        });
    });