
    // This variable goes inside $('.Next').click
    var completed_sets = new Array();

    $(document).ready(function () {
        $("ul").css({ 'margin-left': '-37px' });
        $("li").css({ 'margin-top': '11px' });
        $('.Veggies').show();
        $('.Fruit').show();
        //this varible stores the correct matches for the item being shown
        var item_correct_matches = new Array();

        //this varible stores the data correct
        var matches_correctly = new Array();
        var already_matched   = new Array();
        var selected_item;
        var match_set_1       = new Array();
        var match_set_2       = new Array();

        // hide next arrow
        $('.Next').hide();

        // Hide hole image animation
        $(".hole").show();

        // On
        $(".Fruit-On").hide();
        $(".Veg-On").hide();

        //off
        $(".Fruit-off").hide();
        $(".Veg-off").hide();
        // hide facts

        $(".lettuce-header img").hide();// hide header
        $("#lettuce-fact").hide();
        $("#lettuce-fact p").hide();

        $(".cauliflower-header img").hide();// hide header
        $("#cauliflower-fact").hide();
        $("#cauliflower-fact p").hide();

        $(".celery-header img").hide();// hide header
        $("#celery-fact").hide();
        $("#celery-fact p").hide();

        $(".eggplant-header img").hide();// hide header
        $("#eggplant-fact").hide();
        $("#eggplant-fact p").hide();

        $(".avocado-header img").hide();// hide header
        $("#avocado-fact").hide();
        $("#avocado-fact p").hide();

        $(".cucumber-header img").hide();// hide header
        $("#cucumber-fact").hide();
        $("#cucumber-fact p").hide();

        $(".carrot-header img").hide();// hide header
        $("#carrot-fact").hide();
        $("#carrot-fact p").hide();

        $(".pumpkin-header img").hide();// hide header
        $("#pumpkin-fact").hide();
        $("#pumpkin-fact p").hide();

        $(".potato-header img").hide();// hide header
        $("#potato-fact").hide();
        $("#potato-fact p").hide();

        $(".peper-header img").hide();// hide header
        $("#pepper-fact").hide();
        $("#pepper-fact p").hide();

        $(".beet-header img").hide();// hide header
        $("#beet-fact").hide();
        $("#beet-fact p").hide();

        $(".zucchini-header img").hide();// hide header
        $("#zucchini-fact").hide();
        $("#zucchini-fact p").hide();



        // random items function
        function selectRandomListItem() {
            // who's the seen object
            var seen = {};
            // randomize list
            $('ul').each(function () {
                // get current ul
                var $ul = $(this);
                // get array of list items in current ul
                var $liArr = $ul.children('li');

                // sort array of list items in current ul randomly
                $liArr.sort(function (a, b) {
                    // Get a random number between 0 and 10
                    var temp = parseInt(Math.random() * 12);
                    // Get 1 or 0, whether temp is odd or even
                    var isOddOrEven = temp % 2;
                    // Get +1 or -1, whether temp greater or smaller than 5
                    var isPosOrNeg = temp > 5 ? 1 : -1;
                    // Return -1, 0, or +1
                    return (isOddOrEven * isPosOrNeg);


                })
                // append list items to ul
                .appendTo($ul);
            });

            selected_item = $("#match li")[0].id;

            console.log('already_matched: ' + already_matched);
            console.log('randomly selected item: ' + selected_item);

            if (already_matched.length > 10)
            {
                // alert('go to the nex page');
                $("#putcontenthere").load("action_items/ai7.html");
            }

            // testing if the the selected item is in the already_matched array
            // if it is, then call selectRandomListItem again until we find a new selected item.
            if (already_matched.indexOf(selected_item) >= 0) {
                //alert('already matched');
                selectRandomListItem();
            }

            // adding the selected item to the already_matched array
            already_matched.push(selected_item);

        }

        // function for food vegies
        $("#food-Veggies").click(function () {

            //which item is showing in the selector?
            var correct_items = $(this).attr('data-correct');

            console.log(correct_items);
            console.log('clicked Food: ' + $(this).attr('id'));

            //make sure the items_correct_matches has values
            if (item_correct_matches.length > 0) {
                console.log(item_correct_matches.length);

                if (correct_items.indexOf(selected_item) >= 0) {
                    //this is a correct item
                    matches_correctly.push(1);

                    console.log(matches_correctly);

                    //check to see if you have the correct number of matches for the selected item
                    if (matches_correctly.length === 1) {
                        correct.load();
                        correct.play();
                        console.log('all done');
                        //end of this set
                        $('.Next').show();

                        // Hide hole image animation
                        $(".hole").hide();

                        //On live
                        $(".Veg-On").show();

                        //off
                        $(".Fruit-off").show();

                        // right arrow animation
                        $(".right-arrow").animate({ height: "93px" }, 1000);

                        // Show facts background
                        $(".White-bkg").show();

                    }
                }
                else {
                    //this is an incorrect match - do incorrect actions
                    incorrect.load();
                    incorrect.play();


                }
            }
            return;


        });

        // function for food fruits

        $("#food-Fruits").click(function () {


            //which item is showing in the selector?
            var correct_items = $(this).attr('data-correct');

            console.log('clicked Food: ' + $(this).attr('id'));

            //make sure the items_correct_matches has values
            if (item_correct_matches.length > 0) {
                console.log(item_correct_matches.length);

                if (correct_items.indexOf(selected_item) >= 0) {
                    //this is a correct item
                    matches_correctly.push(1);

                    console.log('matches_correctly' +  matches_correctly);

                    //check to see if you have the correct number of matches for the selected item
                    if (matches_correctly.length === 1) {
                        correct.load();
                        correct.play();
                        console.log('all done');
                        //end of this set
                        $('.Next').show();

                         // Hide hole image animation
                        $(".hole").hide();

                        // On live
                        $(".Fruit-On").show();

                        //off
                        $(".Veg-off").show();
                        // left arrow animation
                        $(".left-arrow").animate({ height: "93px" }, 1000);

                        // Show facts background
                        $(".White-bkg").show();

                    }
                }
                else {
                    //this is an incorrect match - do incorrect actions
                    incorrect.load();
                    incorrect.play();
                }
            }
            return;


        });
        // find selected matches
        function findSelectedMatches() {
            match_set_1.push($('#food-Veggies').attr('data-correct').split(","));
            match_set_2.push($('#food-Fruits').attr('data-correct').split(","));


            console.log(match_set_1);
            console.log(match_set_2);


            console.log('in findSelectedMatches: ' + selected_item);

            //find out how many correct items this should have
            findMatch(match_set_1, selected_item);
            findMatch(match_set_2, selected_item);


            console.log('number of correct items : ' + item_correct_matches.length);



        }

        // reset array
        function resetMatchArrays() {
            match_set_1.length = 0;
            match_set_2.length = 0;

            item_correct_matches.length = 0;
            matches_correctly.length = 0;


        }

        // find match and push to array
        function findMatch(myArray, match) {
            console.log('array length: ' + myArray[0].length);

            for (index = 0; index < myArray[0].length; ++index) {
                console.log('array value: ' + myArray[0][index]);

                if (myArray[0][index] === match) {
                    item_correct_matches.push(1);
                    console.log('found it');

                }


            }
        }

        // Reset game
        selectRandomListItem();
        findSelectedMatches();

        // next button
        $('.Next').click(function () {

            var backImg = $('.bg li:first').css({ 'list-style': 'none' });
            backImg.hide();
            backImg.remove();
            $('.bg-background').append(backImg);
            backImg.fadeIn();
            play.load();
            play.play();
            //reset items
            resetMatchArrays();
            selectRandomListItem();
            findSelectedMatches();

            $('.Next').hide();

            //On
            $(".Veg-On").hide();

            $(".Fruit-On").hide();

            //off
            $(".Fruit-off").hide();
            $(".Veg-off").hide();

            //arrows
            $(".right-arrow").animate({ height: "0px" }, 0);

            $(".left-arrow").animate({ height: "0px" }, 0);

             // Show facts background
            $(".White-bkg").hide();

             // Hide show image animation
            $(".hole").show();

            // if next btn is clicked 10 times game is over.
            var win_total = $(".Next");

            completed_sets.push(win_total);


            // if (completed_sets.length === 10) {
            //     $("#match").hide();
            //     $("#putcontenthere").load("action_items/ai7.html");
            // }
        });


        // message popups here
        $("#food-Veggies").click(function () {

            // lettuce
            if ($('li:first').hasClass('img-hover-1')) {
                $(".lettuce-header img").show();
                $("#lettuce-fact").show();
                $("#lettuce-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#lettuce-fact").hide();
                    $("#lettuce-fact p").hide();
                    $(".lettuce-header img").hide();

                });
            }


            // cauliflower

            if ($('#cauliflower').hasClass('img-hover-3')) {

                $(".cauliflower-header img").show();
                $("#cauliflower-fact").show();
                $("#cauliflower-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#cauliflower-fact").hide();
                    $("#cauliflower-fact p").hide();
                    $(".cauliflower-header img").hide();
                });
            }

            //celery

            if ($('#celery').hasClass('img-hover-4')) {

                $(".celery-header img").show();
                $("#celery-fact").show();
                $("#celery-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#celery-fact").hide();
                    $("#celery-fact p").hide();
                    $(".celery-header img").hide();
                });
            }

            // carrot
            if ($('#carrot').hasClass('img-hover-7')) {

                $(".carrot-header img").show();
                $("#carrot-fact").show();
                $("#carrot-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#carrot-fact").hide();
                    $("#carrot-fact p").hide();
                    $(".carrot-header img").hide();
                });
            }

            //potato
            if ($('#potato').hasClass('img-hover-9')) {

                $(".potato-header img").show();
                $("#potato-fact").show();
                $("#potato-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#potato-fact").hide();
                    $("#potato-fact p").hide();
                    $(".potato-header img").hide();
                });
            }

            // beet

            if ($('#beet').hasClass('img-hover-11')) {

                $(".beet-header img").show();
                $("#beet-fact").show();
                $("#beet-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#beet-fact").hide();
                    $("#beet-fact p").hide();
                    $(".beet-header img").hide();
                });
            }


        });


        $("#food-Fruits").click(function () {

            // Eggplant

            if ($('#eggplant').hasClass('img-hover-2')) {

                $(".eggplant-header img").show();
                $("#eggplant-fact").show();
                $("#eggplant-fact p").show();



                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#eggplant-fact").hide();
                    $("#eggplant-fact p").hide();
                    $(".eggplant-header img").hide();
                });
            }

            //Avocado
            if ($('#avocado').hasClass('img-hover-5')) {

                $(".avocado-header img").show();
                $("#avocado-fact").show();
                $("#avocado-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#avocado-fact").hide();
                    $("#avocado-fact p").hide();
                    $(".avocado-header img").hide();
                });
            }

            //Cucumber
            if ($('#cucumber').hasClass('img-hover-6')) {

                $(".cucumber-header img").show();
                $("#cucumber-fact").show();
                $("#cucumber-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#cucumber-fact").hide();
                    $("#cucumber-fact p").hide();
                    $(".cucumber-header img").hide();
                });
            }

            //pumpkin
            if ($('#pumpkin').hasClass('img-hover-8')) {

                $(".pumpkin-header img").show();
                $("#pumpkin-fact").show();
                $("#pumpkin-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#pumpkin-fact").hide();
                    $("#pumpkin-fact p").hide();
                    $(".pumpkin-header img").hide();
                });
            }

            //pepper

            if ($('#pepper').hasClass('img-hover-10')) {

                $(".peper-header img").show();
                $("#pepper-fact").show();
                $("#pepper-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#pepper-fact").hide();
                    $("#pepper-fact p").hide();
                    $(".peper-header img").hide();
                });
            }

            //zucchini
            if ($('#zucchini').hasClass('img-hover-12')) {

                $(".zucchini-header img").show();
                $("#zucchini-fact").show();
                $("#zucchini-fact p").show();


                $('.Next').click(function () {
                    $(".hole img").show();
                    $("#zucchini-fact").hide();
                    $("#zucchini-fact p").hide();
                    $(".zucchini-header img").hide();
                });
            }

        });



    });