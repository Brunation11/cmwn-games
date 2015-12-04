var bgMusic = $("#background")[0],
playing = true;

bgMusic.addEventListener('ended', function () {
    this.currentTime = 0;
    if (playing) {
        this.play();
    }
}, false);

background.play();

$(document).ready(function () {

    $("#close").click(function () {
        $('#quit').modal('show');
    });

    $("#no-button").click(function () {
        $("#quit").modal('hide');
    });

    $('#yes-button').click(function () {
        $("#putcontenthere").load("action_items/ai6.html");
    });

    $("#next").click(function () {
        $("#fox-mouse").modal('hide');
    });

    $("#next1").click(function () {
        $("#frog-lilypad").modal('hide');
    });

    $("#next2").click(function () {
        $("#robin-worm").modal('hide');
    });

    $("#next3").click(function () {
        $("#rhino-oxpecker").modal('hide');
    });

    $("#next4").click(function () {
        $("#dove-cactus").modal('hide');
    });

    $("#next5").click(function () {
        $("#cow-grass").modal('hide');
    });

    $("#next6").click(function () {
        $("#humming-honey").modal('hide');
    });
});

// Matching JQuery    

var memory_array = ['fox', 'mouse', 'frog', 'lilypad', 'robin', 'worm', 'rhino', 'oxpecker', 'dove', 'cactus', 'cow', 'grass', 'hummingbird', 'honeysuckle'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var file_prefix = 'content/images/squares/square_';
var file_suffix = '.png';
var matched;

Array.prototype.memory_tile_shuffle = function () {
            
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="title_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
    }
    
    $("#memory_board").html(output);

}
function memoryFlipTile(tile, val) {
    
    if (tile.innerHTML == "" && memory_values.length < 2) {
        tile.innerHTML = '<img src=' + file_prefix + val + file_suffix + ' alt=' + val + ' class="tile-style">';

        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);

            testValues(memory_values[0], memory_values[1]);


            if (matched == true) {
                tiles_flipped += 2;


                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];

                // Check to see if the whole board is cleared
                if (tiles_flipped == memory_array.length) {
                    // alert("Board cleared... generating new board");

                window.setTimeout(function () {
                    $("#putcontenthere").load("action_items/ai6.html");
                }, 6000);
                    
                    complete.load();
                    complete.play();
                   // document.getElementById('memory_board').innerHTML = "";
                    //newBoard();
                }
            } else {
                setTimeout(flip2Back, 700);
            }
        }
    }

    function showMatchedTiles()
    {
        var tile_1 = document.getElementById(memory_tile_ids[0]);
        var tile_2 = document.getElementById(memory_tile_ids[1]);

        //alert(tile_1);

        //tile_1.innerHTML = '<img src=' + file_prefix + val + file_suffix + ' alt=' + val + ' class="tile-style">';
        //tile_2.innerHTML = '<img src=' + file_prefix + val + file_suffix + ' alt=' + val + ' class="tile-style">';
    }

    function flip2Back() {
        // Flip the 2 tiles back over
        var tile_1 = document.getElementById(memory_tile_ids[0]);
        var tile_2 = document.getElementById(memory_tile_ids[1]);
        tile_1.style.background = 'url(content/images/squares/square_green.png) no-repeat cover';
        tile_1.innerHTML = "";
        tile_2.style.background = 'url(content/images/squares/square_green.png) no-repeat cover';
        tile_2.innerHTML = "";
        // Clear both arrays
        memory_values = [];
        memory_tile_ids = [];
    }

    function testValues(match1, match2) {
        matched = false;

        switch (match1) {
            case ("fox"):
                {
                    if (match2 === "mouse") {
                        // matched.load ();
                        matched = true;
                        $("#fox-mouse").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }

                    break;
                }
            case ("mouse"):
                {
                    if (match2 === "fox") {
                        matched = true;
                        $("#fox-mouse").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        switch (match1) {
            case ("frog"):
                {
                    if (match2 === "lilypad") {
                        matched = true;
                        $("#frog-lilypad").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
            case ("lilypad"):
                {
                    if (match2 === "frog") {
                        matched = true;
                        $("#frog-lilypad").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        switch (match1) {
            case ("robin"):
                {
                    if (match2 === "worm") {
                        matched = true;
                        $("#robin-worm").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
            case ("worm"):
                {
                    if (match2 === "robin") {
                        matched = true;
                        $("#robin-worm").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        switch (match1) {
            case ("rhino"):
                {
                    if (match2 === "oxpecker") {
                        matched = true;
                        $("#rhino-oxpecker").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
            case ("oxpecker"):
                {
                    if (match2 === "rhino") {
                        matched = true;
                        $("#rhino-oxpecker").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        switch (match1) {
            case ("dove"):
                {
                    if (match2 === "cactus") {
                        matched = true;
                        $("#dove-cactus").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }

            case ("cactus"):
                {
                    if (match2 === "dove") {
                        matched = true;
                        $("#dove-cactus").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        switch (match1) {
            case ("cow"):
                {
                    if (match2 === "grass") {
                        matched = true;
                        $("#cow-grass").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
            case ("grass"):
                {
                    if (match2 === "cow") {
                        matched = true;
                        $("#cow-grass").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        switch (match1) {
            case ("hummingbird"):
                {
                    if (match2 === "honeysuckle") {
                        matched = true;
                        $("#humming-honey").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
            case ("honeysuckle"):
                {
                    if (match2 === "hummingbird") {
                        matched = true;
                        $("#humming-honey").modal();
                        right.load();
                        right.play();
                    }
                    else {
                        matched = false;
                        wrong.load();
                        wrong.play();
                    }
                    break;
                }
        }
        
    }
}

$(document).ready(function () {
    newBoard();
});