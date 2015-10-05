
    var full;
    var correct_items = new Array();


    $(document).ready(function () {

        $('.nextBtn').hide();
       
        $('.nextBtn').click(function () {
            $('.nextBtn').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai3.html");
            });

        });


        $('.ball1').one("click", function () {
            $('.flip-off1').hide();
            correct_items.push(1);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball2').one("click", function () {
            $('.flip-off2').hide();
            correct_items.push(2);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball3').one("click", function () {
            $('.flip-off3').hide();
            correct_items.push(3);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball4').one("click", function () {
            $('.flip-off4').hide();
            correct_items.push(4);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball5').one("click", function () {
            $('.flip-off5').hide();
            correct_items.push(5);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball6').one("click", function () {
            $('.flip-off6').hide();
            correct_items.push(6);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });

        $('.ball7').one("click", function () {
            $('.flip-off7').hide();
            correct_items.push(7);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball8').one("click", function () {
            $('.flip-off8').hide();
            correct_items.push(8);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball9').one("click", function () {
            $('.flip-off9').hide();
            correct_items.push(9);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });


        $('.ball10').one("click", function () {
            $('.flip-off10').hide();
            correct_items.push(10);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('.nextBtn').show();
            }
        });



    });