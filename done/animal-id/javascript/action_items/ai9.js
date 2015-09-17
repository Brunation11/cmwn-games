 $(document).ready(function () {
        final.play();
$('.nextBtn9').click(function () {
            $('.nextBtn9').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai1.html");
            });
            $('.modal-backdrop fade in').css('display','none');
           
        });
    }) 