var AI2 = new Array();
var bulb_4 = new Array();
$(document).ready(function () {

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $ ('.cap_frame').css('background-image','url(content/images/background/frame_2.png)');

    // hide arrow
    $(".Next").hide();
    $(".Meter img").hide().delay(1000).fadeIn(3000);
    $(".cap_frame").hide();

    // dismiss arrow
    $(".dismiss").click(function () {
        $(".cap_frame").hide();
    });


    $(".text_1").hide();
    $(".text_2").hide();
    $(".text_3").hide();
    $(".text_4").hide();

    // turn off lightbulb first
    // All click states are nested inside of eachother
    // bulb 1
    $(".bulb_1 img:first").click(function () {
        $(".bulb_1 img:last").show();
        $(".bulb_1 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);

        // caption bow shows up
        $(".cap_frame").show();
        $(".text_1").show();
        $(".text_2").hide();
        $(".text_3").hide();
        $(".text_4").hide();

        // arrow animation
        $(".dismiss").hide().delay(1000).fadeIn(600);

        //bulb 2
        $(".bulb_2 img:first").click(function () {
            $(".bulb_2 img:last").show();
            $(".bulb_2 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);

            // caption bow shows up
            $(".cap_frame").show();
            $(".text_2").show();
            $(".text_1").hide();
            $(".text_3").hide();
            $(".text_4").hide();

            // arrow animation
            $(".dismiss").hide().delay(1000).fadeIn(600);

            //bulb 3

            $(".bulb_3 img:first").click(function () {
                $(".bulb_3 img:last").show();
                $(".bulb_3 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);

                // caption bow shows up
                $(".cap_frame").show();
                $(".text_3").show();
                $(".text_2").hide();
                $(".text_1").hide();
                $(".text_4").hide();

                // arrow animation
                $(".dismiss").hide().delay(1000).fadeIn(600);

                //bulb 4

                $(".bulb_4 img:first").click(function () {

                    // caption bow shows up
                    $(".cap_frame").show();
                    $(".text_4").show();
                    $(".text_2").hide();
                    $(".text_1").hide();
                    $(".text_3").hide();

                    // arrow animation
                    $(".dismiss").hide().delay(1000).fadeIn(600);

                    // if bulb #4 is clicked once, then arrow will show up only once.
                    var arrow = $(".bulb_4");

                    bulb_4.push(arrow);
                    if (bulb_4.length === 1) {
                        // show arrow
                        $(".Next").hide().delay(1000).fadeIn(600);
                        $(".Next").click(function () {

                            var Next = $(".Next");

                            AI2.push(Next);

                            if (AI2.length === 1) {

                                $("#putcontenthere").load("action_items/ai3.html");
                            }


                        });
                    }

                    // turn off light bulb # 4
                    $(".bulb_4 img:last").show();
                    $(".bulb_4 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);



                    // enable user to go back and click on light bulbs as many times they want.
                    $(".bulb_1 img:last").click(function () {


                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_1").show();
                        $(".text_2").hide();
                        $(".text_3").hide();
                        $(".text_4").hide();
                    });

                    $(".bulb_2 img:last").click(function () {


                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_2").show();
                        $(".text_1").hide();
                        $(".text_3").hide();
                        $(".text_4").hide();
                    });

                    $(".bulb_3 img:last").click(function () {


                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_3").show();
                        $(".text_2").hide();
                        $(".text_1").hide();
                        $(".text_4").hide();
                    });

                    $(".bulb_4 img:last").click(function () {


                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_4").show();
                        $(".text_2").hide();
                        $(".text_1").hide();
                        $(".text_3").hide();
                    });

                });
            });

        });
    });


});