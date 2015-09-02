var AI3 = new Array();
var switch_5 = new Array();

$(document).ready(function () {

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $ ('.cap_frame').css('background-image','url(/content/images/background/frame_2.png)');

    $(".Next").hide();
    $(".Header_3").hide();
    $(".Switch").hide();
    $(".last-text").hide();
    $(".Video-frame-2").hide();
    $(".cap_frame").hide();

    $(".text_1").hide();
    $(".text_2").hide();
    $(".text_3").hide();
    $(".text_4").hide();
    $(".text_5").hide();
    // dismiss arrow
    $(".dismiss").click(function () {
        $(".cap_frame").hide();
    });

    // bulb

    $(".light-saver img:first").click(function () {
        $(".light-saver img:last").show();
        $(".light-saver img:first").hide();

        setTimeout(function () {
            $('.Header_2').hide();
            $('.Energy-hog').hide();
            $('.light-saver').hide();

            $(".Header_3").show();
            $(".Switch").show();
        }, 2000);

    });



    $(".Next").click(function () {

        var Next = $(".Next");

        AI3.push(Next);

        if (AI3.length === 1) {
            $(".Header_3").hide();
            $(".Switch").hide();
            $(".last-text").show();
        }
        if (AI3.length === 2) {
            $(".last-text").hide();
            $(".Video-frame-2").show();
            //document.location.href = "/ActionItem/AI4";
        }
        if (AI3.length === 3) {

            $("#putcontenthere").load("action_items/ai4.html");
        }
    });

    // turn on and off switch

    $(".switch_1 img:first").click(function () {

        $(".cap_frame").show();
        // arrow animation
        $(".dismiss").hide().delay(1000).fadeIn(600);

        $(".text_1").show();
        $(".text_2").hide();
        $(".text_3").hide();
        $(".text_4").hide();
        $(".text_5").hide();

        $(".switch_1 img:last").show();
        $(".switch_1 img:first").hide();

        $(".switch_2 img:first").click(function () {

            $(".cap_frame").show();
            // arrow animation
            $(".dismiss").hide().delay(1000).fadeIn(600);

            $(".text_1").hide();
            $(".text_2").show();
            $(".text_3").hide();
            $(".text_4").hide();
            $(".text_5").hide();

            $(".switch_2 img:last").show();
            $(".switch_2 img:first").hide();

            $(".switch_3 img:first").click(function () {

                $(".cap_frame").show();
                // arrow animation
                $(".dismiss").hide().delay(1000).fadeIn(600);

                $(".text_1").hide();
                $(".text_2").hide();
                $(".text_3").show();
                $(".text_4").hide();
                $(".text_5").hide();

                $(".switch_3 img:last").show();
                $(".switch_3 img:first").hide();

                $(".switch_4 img:first").click(function () {

                    $(".cap_frame").show();
                    // arrow animation
                    $(".dismiss").hide().delay(1000).fadeIn(600);

                    $(".text_1").hide();
                    $(".text_2").hide();
                    $(".text_3").hide();
                    $(".text_4").show();
                    $(".text_5").hide();

                    $(".switch_4 img:last").show();
                    $(".switch_4 img:first").hide();

                    $(".switch_5 img:first").click(function () {

                        $(".cap_frame").show();
                        // arrow animation
                        $(".dismiss").hide().delay(1000).fadeIn(600);

                        $(".text_1").hide();
                        $(".text_2").hide();
                        $(".text_3").hide();
                        $(".text_4").hide();
                        $(".text_5").show();

                        $(".switch_5 img:last").show();
                        $(".switch_5 img:first").hide();

                        var arrow = $(".switch_5");

                        switch_5.push(arrow);
                        if (switch_5.length === 1) {

                            // show arrow
                            $(".Next").hide().delay(1000).fadeIn(600);
                        }


                        // enable user to go back and click on light bulbs as many times they want.
                        $(".switch_1 img:last").click(function () {


                            $(".cap_frame").show();
                            $(".text_1").show();
                            $(".text_2").hide();
                            $(".text_3").hide();
                            $(".text_4").hide();
                            $(".text_5").hide();
                        });

                        $(".switch_2 img:last").click(function () {


                            $(".cap_frame").show();
                            $(".text_1").hide();
                            $(".text_2").show();
                            $(".text_3").hide();
                            $(".text_4").hide();
                            $(".text_5").hide();
                        });

                        $(".switch_3 img:last").click(function () {


                            $(".cap_frame").show();
                            $(".text_1").hide();
                            $(".text_2").hide();
                            $(".text_3").show();
                            $(".text_4").hide();
                            $(".text_5").hide();
                        });

                        $(".switch_4 img:last").click(function () {


                            $(".cap_frame").show();
                            $(".text_1").hide();
                            $(".text_2").hide();
                            $(".text_3").hide();
                            $(".text_4").show();
                            $(".text_5").hide();
                        });

                        $(".switch_5 img:last").click(function () {



                            $(".cap_frame").show();
                            $(".text_1").hide();
                            $(".text_2").hide();
                            $(".text_3").hide();
                            $(".text_4").hide();
                            $(".text_5").show();
                        });
                    });
                });
            });
        });
    });

});