var correct_items = new Array();
var clicked_item = $(this).attr("#yes");

$(document).ready(function () {

    $('#close').click(function () {
        $('#game-close').modal('show');
    });
     
    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');                      
    });

    // Hide Map
    $('.Map').hide();

    // Hide text
    $('.Hit-areas').hide();

    //When document loads show modal
    $('#game-info').modal('show');
    $('#game-info2').modal('hide');
    $('#game-info3').modal('hide');
    $('#game-info4').modal('hide');

    // hide text 2 for now
    $('.Msg_2').hide();
    //hide text 3 for now
    $('.Msg_3').hide();
    // Bear family
    $('.bear-family').hide();

    // Hidden check boxes
    $('.Check_box').hide();
    $('.Check_box').hide();
    $('.Check_box').hide();


    //Hidden checkbox text
    $('.White').hide();
    $('.Plaid').hide();
    $('.Clear').hide();
    // when next-arrow button is clicked, content
    $('.Next-arrow').click(function () {

        //Hide first message
        $('.Msg_1').hide();
        //Show second message
        $('.Msg_2').show();

        $('#game-info').modal('hide');
        $('#game-info2').modal('show');
        $('.Check_box').show();

        //Hide arrow
        $('.Next-arrow').hide();

        //Now show checkboxes text
        $('.White').show();
        $('.Plaid').show();
        $('.Clear').show();

        $('.White').append("<p>White</p>");
        $('.Plaid').append("<p>Plaid</p>");
        $('.Clear').append("<p>Clear</p>");

        // Hidden check boxes
        $('.Check_box').show();

        $('.Next-arrow').click(function () {

            // show modal2
            $('#game-info3').modal('show');

            $('#game-info2').modal('hide');
            //Show second message
            $('.Msg_2').show();

            //Hide arrow
            $('.Next-arrow').show();

            //Now hide checkboxes text

            $('.White').hide();
            $('.Plaid').hide();
            $('.Clear').hide();

            // Now hide checkboxes
            $('.Check_box').hide();

            // Hidden check boxes
            $('.Check_box').show();

            $('.Next-arrow').click(function () {

                $('#game-info3').modal('hide');

                $('#game-info4').modal('show');
                //show arrow
                $('.Next-arrow').show();
                //show family
                $('.bear-family').show();
                //show text 3
                $('.Msg_3').show();
                //hide second message
                $('.Msg_2').hide();

                $('.Next-arrow').click(function () {
                    // hide modal
                    $('#game-info4').modal('hide');

                    //hide arrow
                    $('.Next-arrow').hide();

                    // Show Map
                    $('.Map').hide().fadeIn(800);

                    // Show text
                    $('.Hit-areas').hide().fadeIn(800);
                });
            });

        });
    });


    // This is a separate click function for the checkboxes

    $('.On_1 img').hide();
    $('.On_2 img').hide();
    $('.On_3 img').hide();

    $(function () { // DOM ready shorthand

        $(".Off_1").click(function () {
            $(".On_2 img").hide();
            $(".On_3 img").hide();
            $(".On_1 img").show();
            Incorrect.load();
            Incorrect.play();

        });

        $(".Off_2").click(function () {
            $(".On_1 img").hide();
            $(".On_3 img").hide();
            $(".On_2 img").show();
            Incorrect.load();
            Incorrect.play();

        });

        $(".Off_3").click(function () {
            $(".On_1 img").hide();
            $(".On_2 img").hide();
            $(".On_3 img").show();
            correct.load();
            correct.play();
            $(".Next-arrow").show();

        });

    });


    $('.canada_active').hide();
    $('.denmark_active').hide();
    $('.finland_active').hide();
    $('.greenland_active').hide();
    $('.iceland_active').hide();
    $('.northpole_active').hide();
    $('.norway_active').hide();
    $('.russia_active').hide();
    $('.sweden_active').hide();
    $('.usa_active').hide();

    // show correct maps
    $('.canada').one("click", function () {
        $('.canada_active').show();

        // play correct sound
        correct.load();
        correct.play();
        correct_items.push(clicked_item);

        if (correct_items.length === 1) {
            correct.load();
            correct.play();

        } else if (correct_items.length === 5) {
            Completed.load();
            Completed.play();
            $('.canada').delay(3000).delay(3000, function () {
                 $("#putcontenthere").load("action_items/ai5.html");
            });

            // alert("You Won!!");
        }

    });

    $('.denmark').one("click", function () {
        $('.denmark_active').show();

        // play incorrect sound
        Incorrect.load();
        Incorrect.play();

        $(".denmark_active").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0).delay(3000).fadeOut("fast");
    });

        $('.finland').click(function () {
            $('.finland_active').show();

            // play incorrect sound
            Incorrect.load();
            Incorrect.play();

            $(".finland_active").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0).delay(3000).fadeOut("fast");
        });

        $('.greenland').one("click", function () {
            $('.greenland_active').show();

            //play correct sound
            correct.load();
            correct.play();

            correct_items.push(clicked_item);
            if (correct_items.length === 1) {

                correct.load();
                correct.play();
            } else if (correct_items.length === 5) {
                Completed.load();
                Completed.play();

                $('.greenland').delay(3000).delay(3000, function () {
                    $("#putcontenthere").load("action_items/ai5.html");
                });
                //alert("You Won!!");
            }
        });

        $('.iceland').click(function () {
            $('.iceland_active').show();

            // play incorrect sound
            Incorrect.load();
            Incorrect.play();

            $(".iceland_active").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0).delay(3000).fadeOut("fast");
        });

        $('.northpole').one("click", function () {
            $('.northpole_active').show();

            //play correct sound
            correct.load();
            correct.play();

            correct_items.push(clicked_item);

            if (correct_items.length === 1) {

                correct.load();
                correct.play();
            } else if (correct_items.length === 5) {
                Completed.load();
                Completed.play();

                $('.northpole').delay(3000).delay(3000, function () {
                   $("#putcontenthere").load("action_items/ai5.html");
                });
                //alert("You Won!!");
            }

        });

    $('.norway').one("click", function () {
            $('.norway_active').show();

            //play correct sound
            correct.load();
            correct.play();

            correct_items.push(clicked_item);

            if (correct_items.length === 1) {
                correct.load();
                correct.play();

            } else if (correct_items.length === 5) {
                Completed.load();
                Completed.play();

                $('.norway').delay(3000).delay(3000, function () {
                    $("#putcontenthere").load("action_items/ai5.html");
                });
                //alert("You Won!!");
            }
        });

    $('.russia').one("click", function () {
            $('.russia_active').show();

            //play correct sound
            correct.load();
            correct.play();

            correct_items.push(clicked_item);

            if (correct_items.length === 1) {
                correct.load();
                correct.play();

            } else if (correct_items.length === 5) {
                Completed.load();
                Completed.play();

                $('.russia').delay(3000).delay(3000, function () {
                    $("#putcontenthere").load("action_items/ai5.html");
                });
                //alert("You Won!!");
            }
        });

        $('.sweden').click(function () {
            $('.sweden_active').show();

            // play incorrect sound
            Incorrect.load();
            Incorrect.play();

            $(".sweden_active").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0).delay(3000).fadeOut("fast");
        });

        $('.usa').click(function () {
            $('.usa_active').show();

            // play incorrect sound
            Incorrect.load();
            Incorrect.play();

            $(".usa_active").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0).delay(3000).fadeOut("fast");
        });

    }); // edn document.ready()