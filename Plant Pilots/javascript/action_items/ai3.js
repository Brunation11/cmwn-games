//global variables
var start = document.getElementById("start1");
var correct = document.getElementById("correct");
var complete = document.getElementById("complete3");
var runout = document.getElementById("runout4");
var wrong = document.getElementById("wrong5");
var rand_item;
var correct_matches = new Array();
var hint_item;
var $countdown;
var $form;
var incrementTime = 1000;
var currentTime;


//set the game functions up once the screen loads
$(document).ready(function () {

    background.load();
    background.play();

    $('#second-modal').modal("hide");

    $('.modal-backdrop').css({"display":"none"});

     $(".reply-game").click( function(){
                 $("#putcontenthere").load("action_items/ai3.html");

            });

    // blinkung arrow shows first
    $(".pointing-arrow").hide().fadeIn(600).fadeOut(600).fadeIn(600).fadeOut(600).fadeIn(600).fadeOut(600);

    // hide try again modal

    $('#try-modal').modal('hide');

        setTimeout( function() {
                //start the game functions
            startGame();

            //initalize the drag and drop features for the game items
            init();
        },4000);

    //Provide Hint when Clicked
    $('.hint').click(function () {

        findHint();

        //check to make sure that the hint item has not already been found
        for (var i = 0; i < correct_matches.length; i++) {
            var item = correct_matches[i];

            if (item === hint_item) {
                findHint();
                break;
            }
        }

        //animation sequences
        /**
         * when button is clicked we fade to 10% opacity
         * and after 100 ms we fade the box back to 100%
         */
        $("#" + hint_item + "").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0);
        $("#" + rand_item + "").fadeTo(100, 0.1).fadeTo(200, 1.0).fadeTo(100, 0.1).fadeTo(200, 1.0);

    });

});



//finds the hint by randomizing the potential items available
function findHint() {
    //available correct items
    var available_drags = new Array();
    available_drags = "milkweed,passion-flower,morning-glory,sacred-datura,aphid,juniper,bergmot,cactus".split(",");

    findRandomItem(available_drags);

    //check to see if the value of the randomitem has any matches
    if (rand_item === "cactus") {
        //this is a dummy item with not matches find another
        findRandomItem(available_drags);
    }

    var available_drops = new Array();
    var potential_matches = $("#" + rand_item + "").attr('data-correct-drops');

    //check to see if more than 1 match exists
    if (potential_matches.length === 1) {
        available_drops[0] = potential_matches;
        hint_item = available_drops[0];
    }
    else {
        available_drops = potential_matches.split(',');
        hint_item = available_drops[Math.floor(Math.random() * available_drops.length)];
    }
}

//take a list of items and randomly find one of those items
function findRandomItem(available_drags) {
    //must move the array item over 1 place
    rand_item = available_drags[Math.floor(Math.random() * available_drags.length)];
}

//initalize the drag and drop features for the game
function init() {
    var dropped_item;

    setDraggable();
    setDroppable();

    function setDraggable() {
        $('.drag-item').draggable({
            helper: 'clone',
            greedy: true
        });
    }

    function setDroppable() {
        $('.drop-zone').droppable({
            drop: handleDrop,
            greedy: true
        });
    }

    function handleDrop(event, ui) {
        var draggable = ui.draggable;
        var dragged_item = draggable.attr('id');
        var dropped_zone = $(this).attr('id');
        var dragged_correct_drops = draggable.attr('data-correct-drops');

        //take strings and build array
        var list_correct = new Array();
        list_correct = dragged_correct_drops.split(",");

        //loop through the correct items and see if works
        for (var i = 0; i < list_correct.length; i++) {
            var item = list_correct[i];

            if (item === dropped_zone) {
                displayItem(dropped_zone);

                //add the correct items to the array
                if (correct_matches.indexOf(dropped_zone) === -1) {
                    correct_matches.push(dropped_zone);
                }

                break;
            }
        }

        //remove any potential duplicates
        correct_matches = eliminateDuplicates(correct_matches);

        //test to see which sound should be played
        if (correct_matches.indexOf(dropped_zone) > -1) {
            correct.load();
            correct.play();
        }

        //check to see if the game is over - all matches are found
        if (correct_matches.length === 6) {
            //stop the sound
            start.pause();
            complete.play();

            //stop the timer
            timer1.Timer.pause();
            background.load();
            background.pause();
            $('#first-modal').modal("show");

            $(".start-game").click( function(){
                $('#first-modal').modal("hide");
                $("#putcontenthere").load("action_items/ai4.html");

            });

        }
    }

    function eliminateDuplicates(arr) {
        var i,
            len = arr.length,
            out = [],
            obj = {};

        for (i = 0; i < len; i++) {
            obj[arr[i]] = 0;
        }
        for (i in obj) {
            out.push(i);
        }
        return out;
    }

    function displayItem(correct) {
        correct_matches.push(correct);

        switch (correct) {
            case ("bat-drop"):
                {
                    $("#bat-drop > img").attr('src', '/content/images/findpollinators/bat_found.png');
                    break;
                }
            case ("monarch-drop"):
                {
                    $('#monarch-drop > img').attr('src', '/content/images/findpollinators/monarch_butterfly_found.png');
                    break;
                }
            case ("hummingbird-drop"):
                {
                    $("#hummingbird-drop > img").attr('src', '/content/images/findpollinators/hummingbird_found.png');
                    break;
                }
            case ("soliderfly-drop"):
                {
                    $("#soliderfly-drop > img").attr('src', '/content/images/findpollinators/soliderfly_found.png');
                    break;
                }
            case ("swallowtail-drop"):
                {
                    $("#swallowtail-drop > img").attr('src', '/content/images/findpollinators/swallowtail_butterfly_found.png');
                    break;
                }
            case ("honey-drop"):
                {
                    $("#honey-drop > img").attr('src', '/content/images/findpollinators/honeybee_found.png');
                    break;
                }
            case ("bee-drop"):
                {
                    $("#bee-drop > img").attr('src', '/content/images/findpollinators/bumblebee_found.png');
                    break;
                }
            case ("moth-drop"):
                {
                    $("#moth-drop > img").attr('src', '/content/images/findpollinators/moth_found.png');
                    break;
                }
            case ("ladybug-drop"):
                {
                    $("#ladybug-drop > img").attr('src', '/content/images/findpollinators/ladybug_found.png');
                    break;
                }
            case ("golden-tortoise-drop"):
                {
                    $("#golden-tortoise-drop > img").attr('src', '/content/images/findpollinators/golden_tortoise_beetle_found.png');
                    break;
                }
            case ("scarab-drop"):
                {
                    $("#scarab-drop > img").attr('src', '/content/images/findpollinators/scarab_beetle_found.png');
                    break;
                }
            case ("ant-drop"):
                {
                    $("#ant-drop > img").attr('src', '/content/images/findpollinators/ant_found.png');
                    break;
                }
            case ("white-dove-drop"):
                {
                    $("#white-dove-drop > img").attr('src', '/content/images/findpollinators/dove_found.png');
                    break;
                }

        }
    }
}