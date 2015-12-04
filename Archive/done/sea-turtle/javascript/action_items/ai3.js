var full;
    var correct_items = new Array();

    $(document).ready(function () {
        //globe_game.load();
        //globe_game.play();
        //correct_globe_game.load();

        document.getElementById('globe_game').addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);

        $('.yellow img').fadeOut(3000);
        $('.yellow-fish img').fadeOut(3000);

        //$('#btn').hide();

        // $('#f1').hide();
        // $('#f2').hide();
        // $('#f3').hide();
        // $('#f4').hide();
        // $('#f5').hide();
        // $('#f6').hide();
        // $('#f7').hide();
        // $('#f8').hide();
        // $('#f9').hide();
        // $('#f10').hide();

        // $('#fish1').hide();
        // $('#shrimp1').hide();
        // $('#anchor1').hide();
        // $('#fish3').hide();
        // $('#black1').hide();
        // $('#crab1').hide();
        // $('#fish5').hide();
        // $('#safe1').hide();
        // $('#fish7').hide();
        // $('#dolphin1').hide();

        $('#btn').click(function () {
            $("#putcontenthere").load("action_items/ai4.html");
           click.play();
        });

        $('#fish').one("click", function () {

            $('#fish1').show();
            $('#f1').show();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game.play();
            correct_items.push(1);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        
            });
        
        $('#shrimp').one("click", function () {

            $('#shrimp1').show();
            $('#f1').hide();
            $('#f2').show();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game1.play();
            correct_items.push(2);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#anchor').one("click", function () {

            $('#anchor1').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').show();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game2.play();
            correct_items.push(3);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#fish2').one("click", function () {

            $('#fish3').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').show();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game3.play();
            correct_items.push(4);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#black').one("click", function () {

            $('#black1').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').show();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game4.play();
            correct_items.push (5);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#crab').one("click", function () {

            $('#crab1').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').show();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game5.play();
            correct_items.push(6);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#fish4').one("click", function () {

            $('#fish5').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').show();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game6.play();
            correct_items.push(7);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#safe').one("click", function () {

            $('#safe1').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').show();
            $('#f9').hide();
            $('#f10').hide();
            correct_globe_game7.play();
            correct_items.push(8);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#fish6').one("click", function () {

            $('#fish7').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').show();
            $('#f10').hide();
            correct_globe_game8.play();
            correct_items.push(9);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

        $('#dolphin').one("click", function () {

            $('#dolphin1').show();
            $('#f1').hide();
            $('#f2').hide();
            $('#f3').hide();
            $('#f4').hide();
            $('#f5').hide();
            $('#f6').hide();
            $('#f7').hide();
            $('#f8').hide();
            $('#f9').hide();
            $('#f10').show();
            correct_globe_game9.play();
            correct_items.push(10);
            if (correct_items.length === 10) {
                //pop or redirect your game complete screen
                $('#btn').show();
            }
        });

 });