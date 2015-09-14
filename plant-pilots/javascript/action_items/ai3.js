background.load();
background.play();
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

$('#button-replay').click(function () {
    $("#putcontenthere").load("action_items/ai2.html");
});

//set the game functions up once the screen loads
$(document).ready(function () { //  Here is when "Next" button is clicked, timer starts to count down

        //initalize the drag and drop features for the game items
        init();

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

})

//initalize the backdrop for the modal windows
$('#game-info').modal({
    backdrop: true
});

//start all of the game functions
function startGame() {
    startTimer();
    start.loop = true;
    start.play();

}

//create a new time object
var timer1 = new (function () {
    currentTime = '30000'; // 20 seconds (in milliseconds)
});

//start the timer and assign the counter location
function startTimer() {
    $countdown = $('#counter');
    $countdown.show();

    timer1.Timer = $.timer(updateTimer, incrementTime, true);

}

//update the display of the counter in the proper interval
function updateTimer() {

    // Output timer position
    var timeString = currentTime.toString();
    $countdown.html(displayTime(timeString));

    // If timer is complete, trigger correct action
    if (currentTime == 0) {
        timer1.Timer.stop();
        //alert('Times up!');
        start.pause();
        start.currentTime = 0;

        runout.play();
        background.pause();
        //end game modal with fail message
        setTimeout(function () {
            runout.load();
            runout.play();
            background.load();
            background.pause();
            $("#button-start").click(function () {
                $('#game-info').modal('hide');
                $("#putcontenthere").load("action_items/ai3.html");
                //setTimeout(function () { location.reload(); }, 10);
                //startGame.load();
                //startGame();

            });

        });
    }

    // Increment timer position
    currentTime -= incrementTime;
    if (currentTime < 0) currentTime = 0;
}

//format the time so that is display correctly in the counter display
function displayTime(timeString) {
    var seconds = ~~((timeString / 1000) % 60);
    var minutes = ~~((timeString / (1000 * 60)) % 60);
    var hours = ~~((timeString / (1000 * 60 * 60)) % 24);

    //alert('hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds);

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    //if (hours = 0) hours = "00";
    //if (minutes = 0) minutes = "00";

    return minutes.toString() + seconds.toString();
}

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
            background.pause();
            //stop the timer
            timer1.Timer.pause();

            //show the popup screen for game complete and send to bloom boom game
            $('#game-complete').modal('show');
            $('#game-info').modal('hide');
            $('.main-title').hide();
            $('.text-modal-start').hide();// HIDE Remember your hints from Level one.  Drag your food choices and feed each pollinator!  You can only feed each pollinator once

            $("#button-next").click(function () {
                $('#game-success').modal('hide');

                //document.location.href = "/ActionItem/Game";
            });

            $('.purple-button').click(function () {
                $('#game-complete').modal('hide');

                $("#putcontenthere").load("action_items/ai3.html");
            })
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