var AI2 = new Array();
var bulb_4 = new Array();
$(document).ready(function () {
headerone.load();
headerone.play();
headerone.volume = 1.0;

music.load();
music.play();
music.volume = 0.1,
$('.text_1').show();
$('.text_2').show();
$('.text_3').show();
$('.text_4').show();
$('.bulb_1').show();
$('.bulb_2').show();
$('.bulb_3').show();
$('.bulb_4').show();
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
        click.load();
        click.play();
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
        messageone.load();
        messageone.play();
        messageone.volume = 0.8;
        bulbtrack.load();
        bulbtrack.play();

        messagetwo.pause();
        messagethree.pause();
        messagefour.pause();


        $(".bulb_1 img:last").show();
        $(".bulb_1 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);

        // caption bow shows up
        $(".cap_frame").show();
        $(".text_1").show();
        $(".text_2").hide();
        $(".text_3").hide();
        $(".text_4").hide();

        setTimeout(function() {
                            arrows.load();
                            arrows.play();
                        },1000);

        // arrow animation
        $(".dismiss").hide().delay(1000).fadeIn(600);

        //bulb 2
        $(".bulb_2 img:first").click(function () {

            bulbtrack.load();
            bulbtrack.play();
            $(".bulb_2 img:last").show();
            $(".bulb_2 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);

            // caption bow shows up
            $(".cap_frame").show();
            $(".text_2").show();
            $(".text_1").hide();
            $(".text_3").hide();
            $(".text_4").hide();
              setTimeout(function() {
                        messagetwo.load();
                        messagetwo.play();
                        messagetwo.volume = 0.8;
                        },1000);
            messageone.pause();
            messagethree.pause();
            messagefour.pause();
             setTimeout(function() {
                            arrows.load();
                            arrows.play();
                        },1000);

            // arrow animation
            $(".dismiss").hide().delay(1000).fadeIn(600);

            //bulb 3messagethree

            $(".bulb_3 img:first").click(function () {
                 bulbtrack.load();
                 bulbtrack.play();
                $(".bulb_3 img:last").show();
                $(".bulb_3 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);

                // caption bow shows up
                $(".cap_frame").show();
                $(".text_3").show();
                $(".text_2").hide();
                $(".text_1").hide();
                $(".text_4").hide();
                setTimeout(function() {
                        messagethree.load();
                        messagethree.play();
                        messagethree.volume = 0.8;
                        },1000);
                messagetwo.pause();
                messageone.pause();
                messagefour.pause();
                 setTimeout(function() {
                            arrows.load();
                            arrows.play();
                        },1000);

                // arrow animationmessagefour
                $(".dismiss").hide().delay(1000).fadeIn(600);

                //bulb 4

                $(".bulb_4 img:first").click(function () {
                     bulbtrack.load();
                     bulbtrack.play();

                    // caption bow shows up
                    $(".cap_frame").show();
                    $(".text_4").show();
                    $(".text_2").hide();
                    $(".text_1").hide();
                    $(".text_3").hide();
                    setTimeout(function() {
                        messagefour.load();
                        messagefour.play();
                        messagefour.volume = 0.8;
                        },1000);
                    messagetwo.pause();
                    messagethree.pause();
                    messageone.pause();
                     setTimeout(function() {
                            arrows.load();
                            arrows.play();
                        },1000);

                    // arrow animation
                    $(".dismiss").hide().delay(1000).fadeIn(600);

                    // if bulb #4 is clicked once, then arrow will show up only once.
                     $(".dismiss").click(function () {
                        setTimeout(function() {
                            arrows.load();
                            arrows.play();
                        },1000);
                          var arrow = $(".bulb_4");

                        bulb_4.push(arrow);
                        if (bulb_4.length === 1) {
                            // show arrow
                            $(".Next").hide().delay(600).fadeIn(600);

                            $(".Next").click(function () {

                                var Next = $(".Next");

                                AI2.push(Next);

                                if (AI2.length === 1) {
                                    click.load();
                                    click.play();
                                    setTimeout(function(){
                                        $("#putcontenthere").load("action_items/ai3.html");
                                    },1000);
                                }


                            });
                        }

                     });


                    // turn off light bulb # 4
                    $(".bulb_4 img:last").show();
                    $(".bulb_4 img:first").hide().fadeOut(10).fadeIn(20).fadeOut(20).fadeIn(10).fadeOut(20).fadeIn(20).fadeOut(10);



                    // enable user to go back and click on light bulbs as many times they want.
                    $(".bulb_1 img:last").click(function () {
                        bulbtrack.load();
                        bulbtrack.play();
                        setTimeout(function() {
                        messageone.load();
                        messageone.play();

                        },600);
                        messagetwo.pause();
                        messagethree.pause();
                        messagefour.pause();
                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_1").show();
                        $(".text_2").hide();
                        $(".text_3").hide();
                        $(".text_4").hide();
                    });

                    $(".bulb_2 img:last").click(function () {
                        bulbtrack.load();
                        bulbtrack.play();
                        setTimeout(function() {
                        messagetwo.load();
                        messagetwo.play();
                        },1000);
                        messageone.pause();
                        messagethree.pause();
                        messagefour.pause();
                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_2").show();
                        $(".text_1").hide();
                        $(".text_3").hide();
                        $(".text_4").hide();
                    });

                    $(".bulb_3 img:last").click(function () {
                        bulbtrack.load();
                        bulbtrack.play();
                        setTimeout(function() {
                        messagethree.load();
                        messagethree.play();
                        },1000);
                        messagetwo.pause();
                        messageone.pause();
                        messagefour.pause();
                        // caption bow shows up
                        $(".cap_frame").show();
                        $(".text_3").show();
                        $(".text_2").hide();
                        $(".text_1").hide();
                        $(".text_4").hide();
                    });

                    $(".bulb_4 img:last").click(function () {
                        bulbtrack.load();
                        bulbtrack.play();

                        setTimeout(function() {
                        messagefour.load();
                        messagefour.play();
                        },1000);
                        messagetwo.pause();
                        messagethree.pause();
                        messageone.pause();
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