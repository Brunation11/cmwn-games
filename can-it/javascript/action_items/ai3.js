var correct_objects = new Array();
var cans_array = new Array();
$(document).ready(function(){
    //this varible stores the correct matches for the item being shown
    var item_correct_matches = new Array();
    //this varible stores the data correct
    var matches_correctly = new Array();
    var selected_item;
    var match_set_1 = new Array();

    $('.win').hide();
    $('.loose').hide();

    //initalize game and find the selected item and it's matches
    selectRandomListItem();
    findSelectedMatches();

    $('#Big-btn').dblclick(function(event) {
        /////////// swap images ///////////////////////////////////////////////////////////////////
        var backImg = $('.Main-slides li:first').css({ 'list-style': 'none' });
        backImg.hide();
        backImg.remove();
        $('.Main-slides').append(backImg);
        backImg.fadeIn();

         //reset items
        resetMatchArrays();
        selectRandomListItem();
        findSelectedMatches();

        //which item is showing in the selector?
        var correct_objects = $(this).attr('data-correct');
        console.log('clicked object: ' + $(this).attr('id'));

//////////////make sure the items_correct_matches has values///////////////////////////////////////////////
        if (item_correct_matches.length > 0) {
            console.log(item_correct_matches.length);

            if (correct_objects.indexOf(selected_item) >= 0) {
                //this is a correct item
                matches_correctly.push(1);
                console.log(matches_correctly);

                //check to see if you have the correct number of matches for the selected item
                if (matches_correctly.length === 1) {
                    console.log('all done');
                    //end of this set
                    // alert('Working');




                    Correct.load();
                    Correct.play();
                }
            }
            else {
                //this is an incorrect match - do incorrect actions
                Wrong.load();
                Wrong.play();
            }
        }
        return;

    }); /// end click state////////////////////////////////////////////////////////////////////////



$("#click-me").dblclick(function(){
    // alert("Helllloooooo");
    var click_item = $(this).attr('id');
     console.log('target object: ' + $(this).attr('id'));
    var click_objects = $(this).attr('data-cans');
    var item_animate = click_item  + "#"
    var current = $('.object');

      var can_this = $("#carousel_ul a")[2].id;
      can_this = can_this.replace("-li", "");

     if (correct_objects === can_this) {

        cans_array.push(can_this);

         if (cans_array.length === 1) {
            alert("Helloooo World");
         }
         else {
            alert("Nooo");
         }
    }
});

        // find selected matches
    function findSelectedMatches() {
        match_set_1.push($('#Big-btn').attr('data-correct').split(","));

        console.log(match_set_1);

        console.log('in findSelectedMatches: ' + selected_item);

        //find out how many correct items this should have
        findMatch(match_set_1, selected_item);

        console.log('number of correct items : ' + item_correct_matches.length);
    }

     function resetMatchArrays() {
        match_set_1.length = 0;

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
        $('#match ul').each(function () {
            // get current ul
            var $ul = $(this);
            // get array of list items in current ul
            var $liArr = $ul.children('#match li');
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

        selected_item = $("#match li")[0].id;

        console.log('randomly selected item: ' + selected_item);
    }
}); //end document ready

//options( 1 - ON , 0 - OFF)
var auto_slide = 1;



//speed of auto slide(
var auto_slide_seconds = 1300;

/*move the last list item before the first item. The purpose of this is
if the user clicks to slide left he will be able to see the last item.*/
$('#carousel_ul li:first').before($('#carousel_ul li:last'));

//check if auto sliding is enabled
if (auto_slide == 1) {
    /*set the interval (loop) to call function slide with option 'right'
    and set the interval time to the variable we declared previously */
    var timer = setInterval('slide("right")', auto_slide_seconds);

    /*and change the value of our hidden field that hold info about
    the interval, setting it to the number of milliseconds we declared previously*/
    $('#hidden_auto_slide_seconds').val(auto_slide_seconds);

}

function slide(where) {

    //get the item width
    var item_width = $('#carousel_ul li').outerWidth() + 10;


    if (where == 'left') {
        //...calculating the new left indent of the unordered list (ul) for left sliding
        var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
    } else {
        //...calculating the new left indent of the unordered list (ul) for right sliding
        var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;

    }

    ////make the sliding effect using jQuery's animate function... '
    $('#carousel_ul:not(:animated)').animate({ 'left': left_indent }, 450, function () {

        /* when the animation finishes use the if statement again, and make an ilussion
        of infinity by changing place of last or first item*/
        if (where == 'left') {
            //...and if it slided to left we put the last item before the first item
            $('#carousel_ul li:first').before($('#carousel_ul li:last'));
        } else {
            //...and if it slided to right we put the first item after the last item
            $('#carousel_ul li:last').after($('#carousel_ul li:first'));
        }

        //...and then just get back the default left indent
        $('#carousel_ul').css({ 'left': '-210px' });
    });

}






