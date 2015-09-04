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

        //end game modal with fail message
        setTimeout(function () {

            $('#game-fail').modal('show');
            $('.text-modal-start').hide();
            $('.main-title').hide();
            $('.text-modal').append("<h3>Try again!</h3>");
            $("h3").css({ "font-size": "160%", "margin-left": "40px" });
            $(".popup-image").css({ "margin-top": "79px", "margin-left": "118px" });
            $("#button-start").css({ "margin-left": "100px" });
            runout.load();
            runout.play();
            background.load();
            background.pause();
            $("#button-start").click(function () {
                $('#game-fail').modal('hide');
                //setTimeout(function () { location.reload(); }, 10);
                startGame.load();
                startGame();

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