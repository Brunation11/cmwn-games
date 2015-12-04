var correct_items = new Array();
var completed_sets = new Array();

$(document).ready(function () {
    //this varible stores the correct matches for the item being shown
    var item_correct_matches = new Array();
    //this varible stores the data correct
    var matches_correctly = new Array();
    var selected_item;
    var match_set_1 = new Array();
    var match_set_2 = new Array();
    var match_set_3 = new Array();
    var match_set_4 = new Array();

    Music.load();
    Music.play();

    // hide next arrow
    $('.Next-4').hide();

    // exit screen
    $('.close-Btn').click(function () {
        $('#quit-game').modal('show');
    });

    $('.no').click(function () {
        $('#quit-game').modal('hide');

    });

    //initalize game and find the selected item and it's matches
    selectRandomListItem();
    findSelectedMatches();

    // click next to show next image
    $('.Next-4').click(function () {
        var backImg = $('.Main-slides li:first').css({ 'list-style': 'none' });
        backImg.hide();
        backImg.remove();
        $('.Main-slides').append(backImg);
        backImg.fadeIn();

        $('.Main-slides h2').css({ 'font-family': 'Source Sans Pro', 'font-size': '35px', 'font-weight': '700' });

        $('.Next-4').hide();

        //reset items
        resetMatchArrays();
        selectRandomListItem();
        findSelectedMatches();

        // if next btn is clicked 10 times game is over.
        var win_total = $(".Next-4");

        completed_sets.push(win_total);


        if (completed_sets.length === 10) {
            $("#match").hide();
            $("#putcontenthere").load("action_items/ai7.html");
        }
    });

    $('#homes-burrow,#homes-birdnest,#homes-brushpile,#homes-wet').click(function () {
        //which item is showing in the selector?
        var correct_items = $(this).attr('data-correct');

        console.log('clicked home: ' + $(this).attr('id'));

        //make sure the items_correct_matches has values
        if (item_correct_matches.length > 0) {
            console.log(item_correct_matches.length);

            if (correct_items.indexOf(selected_item) >= 0) {
                //this is a correct item
                matches_correctly.push(1);

                console.log(matches_correctly);

                //check to see if you have the correct number of matches for the selected item
                if (matches_correctly.length === 1) {
                    console.log('all done');
                    //end of this set
                    $('.Next-4').show();
                    correct.load();
                    correct.play();
                }
            }
            else {
                //this is an incorrect match - do incorrect actions
                wrong.load();
                wrong.play();
            }
        }
        return;
    })


    // find selected matches
    function findSelectedMatches() {
        match_set_1.push($('#homes-burrow').attr('data-correct').split(","));
        match_set_2.push($('#homes-birdnest').attr('data-correct').split(","));
        match_set_3.push($('#homes-brushpile').attr('data-correct').split(","));
        match_set_4.push($('#homes-wet').attr('data-correct').split(","));

        console.log(match_set_1);
        console.log(match_set_2);
        console.log(match_set_3);
        console.log(match_set_4);

        console.log('in findSelectedMatches: ' + selected_item);

        //find out how many correct items this should have
        findMatch(match_set_1, selected_item);
        findMatch(match_set_2, selected_item);
        findMatch(match_set_3, selected_item);
        findMatch(match_set_4, selected_item);

        console.log('number of correct items : ' + item_correct_matches.length);
    }
    // reset array
    function resetMatchArrays() {
        match_set_1.length = 0;
        match_set_2.length = 0;
        match_set_3.length = 0;
        match_set_4.length = 0;
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
    // randomize function for li
    function selectRandomListItem() {
        // randomize list
        $('ul').each(function () {
            // get current ul
            var $ul = $(this);
            // get array of list items in current ul
            var $liArr = $ul.children('li');
            // sort array of list items in current ul randomly
            $liArr.sort(function (a, b) {
                // Get a random number between 0 and 10
                var temp = parseInt(Math.random() * 10);
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

        selected_item = $("#match li")[0].id

        console.log('randomly selected item: ' + selected_item);
    }
});// end doc ready