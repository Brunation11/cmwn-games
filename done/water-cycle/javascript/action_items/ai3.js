var correct_items = new Array();

$(document).ready(function () {

    vo5.play();


    $ ('.bkg-image').css('background-image','url(content/images/background/BKG_4.png)');

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    $(".Intro").delay(900).fadeIn(500);
    $(".last-text").hide();
    $(".next-Btn-2").hide();

    var favorites = [];
    var counter = 0;

    $('.animated').one('click', function () {

        favorites.push($(this).clone())

        //$('.favorite').append(favorites);

        correct_items.push(10);
        if (correct_items.length === 10) {
            reveal.load();
            reveal.play();


            //     //if the number of pushed items are equal to 10, reveal arrow
            $(".next-Btn-2").hide().delay(300).fadeIn(500);


            $(".next-Btn-2").click(function () {
                click.load();
                click.play();
                vo5.pause();
                vo6.pause();
                vo7.pause();
                vo8.pause();
                vo9.pause();
                vo10.pause();
                vo11.pause();
                vo12.pause();
                vo13.pause();
                vo14.pause();
                vo15.pause();

                $(".next-Btn-2").show();
                $(".last-text").hide().delay(700).fadeIn(500);
                vo16.play();
                $("#pop_1,#pop_2,#pop_3,#pop_4,#pop_5,#pop_6,#pop_7,#pop_8,#pop_9,#pop_10").click(function () {

                    // remove intro text when any of these buttons are pressed
                    $(".last-text").addClass('bounceOut', 100);


                });
                $(".modal").modal('hide');

                $(".next-Btn-2").click(function () {
                    $("#putcontenthere").load("action_items/ai4.html");
                    vo16.pause();

                });
            });
        }
    });


        // bubble 1
        $(".plus_1").click(function () {
            vo12.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("show");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_1").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_1").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 2
        $(".plus_2").click(function () {
            vo11.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("show");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_2").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_2").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 3
        $(".plus_3").click(function () {
            vo6.play();
            vo5.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("show");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_3").remove();

            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_3").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 4
        $(".plus_4").click(function () {
            vo7.play();
            vo5.pause();
            vo6.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("show");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_4").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_4").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 5

        $(".plus_5").click(function () {
            vo13.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("show");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_5").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_5").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 6

        $(".plus_6").click(function () {
            vo10.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("show");

            $(".removeMe_6").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_6").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 7
        $(".plus_7").click(function () {
            vo14.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("show");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_7").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_7").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 8

        $(".plus_8").click(function () {
            vo8.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("show");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_8").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_8").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 9

        $(".plus_9").click(function () {
            vo15.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo9.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("show");
            $("#fact_9").modal("hide");
            $("#fact_10").modal("hide");

            $(".removeMe_9").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_9").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });

        // bubble 10

        $(".plus_10").click(function () {
            vo9.play();
            vo5.pause();
            vo6.pause();
            vo7.pause();
            vo8.pause();
            vo10.pause();
            vo11.pause();
            vo12.pause();
            vo13.pause();
            vo14.pause();
            vo15.pause();
            click.load();
            click.play();
            $("#fact_1").modal("hide");
            $("#fact_2").modal("hide");
            $("#fact_3").modal("hide");
            $("#fact_4").modal("hide");
            $("#fact_5").modal("hide");
            $("#fact_6").modal("hide");
            $("#fact_7").modal("hide");
            $("#fact_8").modal("hide");
            $("#fact_9").modal("show");
            $("#fact_10").modal("hide");

            $(".removeMe_10").remove();
            $(".active").css({ 'opacity': '100' });

            var el = $(".plus_10").addClass("bounce");
            setTimeout(function () {
                el.removeClass("bounce");
            }, 1000);
        });



        $("#pop_1,#pop_2,#pop_3,#pop_4,#pop_5,#pop_6,#pop_7,#pop_8,#pop_9,#pop_10").click(function () {

            // remove intro text when any of these buttons are pressed
            $(".Intro").addClass('bounceOut', 100);


        });
});