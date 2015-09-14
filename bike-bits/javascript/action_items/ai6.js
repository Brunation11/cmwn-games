$("#putcontenthere").load("action_items/ai1.html");
     $(document).ready(function () {
        startGame();
        $(".draggable").click (function(){
           
        })
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
        $(".draggable").draggable({ revert: 'invalid', containment: '.container',
        cursor: 'move',
        snap: '.container' });
        $(".droppable").droppable({
            accept: function (drag) {
                snap: '.container'
                var dropId = $(this).attr('data-id');
                var dragId = $(drag).attr('data-id');
                return dropId === dragId;

            }
        });
    });

   
 

    $(init);
    function init() {


        $("#picture").click(function () {
            $("#picture").attr("src", "content/images/slider_bike/bikeparts_handlebars_complete.png");
            $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);
        });
            $("#picture1").click(function () {
                $("#picture1").attr("src", "content/images/slider_bike/bikeparts_wheel_complete.png");
            });
                $("#picture2").click(function () {
                    $("#picture2").attr("src", "content/images/slider_bike/bikeparts_wheel_complete.png");
                });
                $("#picture4").click(function () {
                    $("#picture4").attr("src", "content/images/slider_bike/bikeparts_chain_complete.png");
                });
                    $("#picture3").click(function () {
                        $("#picture3").attr("src", "content/images/slider_bike/bikeparts_seat_complete.png");
                        $(this).removeClass("#origin img");
                    });
                    $("#picture5").click(function () {
                        $("#picture5").attr("src", "content/images/slider_bike/bikeparts_brakecable_complete.png");
                    });
                    $("#picture6").click(function () {
                        $("#picture6").attr("src", "content/images/slider_bike/bikeparts_brake_complete.png");
                    });
                    $("#picture7").click(function () {
                        $("#picture7").attr("src", "content/images/slider_bike/bikeparts_pedal_complete.png");
                    });
                    $("#picture8").click(function () {
                        $("#picture8").attr("src", "content/images/slider_bike/bikeparts_fender_complete.png");
                    });
                    $("#picture9").click(function () {
                        $("#picture9").attr("src", "content/images/slider_bike/bikeparts_bag_complete.png");
                    });
                    $("#picture10").click(function () {
                        $("#picture10").attr("src", "content/images/slider_bike/bikeparts_headlamp_complete.png");
                    });
                }
    


    

