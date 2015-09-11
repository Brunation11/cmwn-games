var correct_items = new Array();
var completed_sets = new Array();
var correct_stuff = new Array();
$(document).ready(function () {
    //this varible stores the correct matches for the item being shown
    var item_correct_matches = new Array();
    //this varible stores the data correct
    var matches_correctly = new Array();
    var selected_item;
    var match_set_1 = new Array();


   //initalize game and find the selected item and it's matches
    selectRandomListItem();
    findSelectedMatches();



    $('#Big-btn').click(function () {
///////// swaps images/////////////////////////////////////////////////////////////////////////
        var backImg = $('.Main-slides li:first').css({ 'list-style': 'none' });
        backImg.hide();
        backImg.remove();
        $('.Main-slides').append(backImg);
        backImg.fadeIn();

////////// reset items after swaping them ///////////////////////////////////////////////
        resetMatchArrays();
        selectRandomListItem();
        findSelectedMatches();

////////// which item is showing in the selector? ///////////////////////////////////
        var correct_items = $(this).attr('data-correct');

        console.log('clicked home: ' + $(this).attr('id'));

////////// make sure the items_correct_matches has values //////////////
        if (item_correct_matches.length > 0) {
            console.log(item_correct_matches.length);

            if (correct_items.indexOf(selected_item) >= 0) {
                //this is a correct item
                matches_correctly.push(1);

                console.log(matches_correctly);

/////////check to see if you have the correct number of matches for the selected item//
                if (matches_correctly.length === 1) {
                    console.log('all done');
                    //end of this set

                    Correct.load();
                    Correct.play();
                }
            }
            else {
//////////this is an incorrect match - do incorrect actions ///////////////////////
                Wrong.load();
                Wrong.play();
            }
        }
        return;

    });///end click function


///////// find selected matches//////////////////////////////////////////////////////////////////
    function findSelectedMatches() {
        match_set_1.push($('#Big-btn').attr('data-correct').split(","));


        console.log(match_set_1);


        console.log('in findSelectedMatches: ' + selected_item);

        //find out how many correct items this should have
        findMatch(match_set_1, selected_item);


        console.log('number of correct items : ' + item_correct_matches.length);
    }

///////// reset array ///////////////////////////////////////////////////////////////////////////////////////
    function resetMatchArrays() {
        match_set_1.length = 0;

        item_correct_matches.length = 0;
        matches_correctly.length = 0;
    }

//////// find match and push to array ///////////////////////////////////////////////////////////
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


/////////////// randomize list///////////////////////////////////////////////////////////////////////

    function selectRandomListItem() {
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

});