
   $(document).ready(function () {
        startGame();
    })
    
    function startGame() {
      startTimer();
      //start.loop = true;
      //start.play();

  }

    var $countdown;
    var $form;
    var incrementTime = 1000;
    var currentTime;

    var timer1 = new (function () {
        currentTime = '20000'; // 24 hours (in milliseconds)
    });

    function delayTimerStart(delayLength) {


        $('#counter').slideUp(300).delay(delayLength).queue(function () {

        });
    }


    function startTimer() {
        //alert('got here');
        $countdown = $('#counter');
        $countdown.show();

        timer1.Timer = $.timer(updateTimer, incrementTime, true);

    }
    
    function updateTimer() {

        // Output timer position
        var timeString = currentTime.toString();
        $countdown.html(displayTime(timeString));

        // If timer is complete, trigger alert
        if (currentTime == 0) {
            timer1.Timer.stop();
            //alert('Times up!');
            start.pause();
            start.currentTime = 0;

        }
        // Increment timer position
        currentTime -= incrementTime;
        if (currentTime < 0) currentTime = 0;
    }

    function displayTime(timeString) {
        var seconds = ~~((timeString / 1000) % 60);
        var minutes = ~~((timeString / (1000 * 60)) % 60);
        var hours = ~~((timeString / (1000 * 60 * 60)) % 24);

        //alert('hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds);

        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes + ":";
        if (hours < 10) hours = "0" + hours;

        //if (hours = 0) hours = "00";
        //if (minutes = 0) minutes = "00";

        return minutes.toString() + seconds.toString();

    }


   

    $(function () {
        $(".draggable").draggable({ revert: 'invalid' });
        $(".droppable").droppable({
            accept: function (drag) {
                var dropId = $(this).attr('data-id');
                var dragId = $(drag).attr('data-id');
                return dropId === dragId;
            }
        });
    });

    function handleDropEvent(event, ui) {
        var draggable = ui.draggable;
        alert('The square with ID "' + draggable.attr('id') + '" was dropped onto me!');
    }
