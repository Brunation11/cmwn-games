var correct_items = new Array();
var clicked_item = $(this).attr(".yes");
var COUNT_START = 01*21*44; // tenths * seconds * hours
var count = COUNT_START;
var playing = false;

playpause = document.getElementById('playpause');
reset = document.getElementById('reset');
// var timer1;
// var $form;
// var $countdown;
// var incrementTime = 1000;
// var currentTime;

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

$('#time-modal').modal('hide');
    
        $(".body-content").addClass("net");
        $('#game-info').modal('hide');
        $('#scoop-game').show();
        // startGame();
  
$('#next-button2').hide();

    $('#next-button2').click(function () {
        vo18.pause();
        vo19.pause();
        $('#game-complete').modal('hide');
        $('#game-flip').modal('show');
        flip.play();
        vo20.play();
    });

    $('#close').click(function () {
        $('#game-close').modal('show');
        // timer1.Timer.stop();
    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        // timer1.Timer.play();
    });

    $('#replay1').click(function () {
      $('#time-modal1').remove();
        $("#putcontenthere").load("action_items/ai4_2.html");
        // correct_matches = new Array();
        // currentTime = 90000;
        // timer1.Timer.play();

        // background.play();
        // start.loop = true;
        // start.play();
    });


//Correct Items

    $('.yes').click(function () {

        $(this).hide();

        correct_items.push(clicked_item);

        if (correct_items.length === 1) {
            //$('#star2').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 2) {
            //$('#star3').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 3) {
            //$('#star4').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 4) {
            //$('#star5').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 5) {
            //$('#star6').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 6) {
           // $('#star7').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 7) {
           // $('#star8').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 8) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 9) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 10) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 11) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 12) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 13) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 14) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 15) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 16) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 17) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 18) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 19) {
          //  $('#star9').show();
            correct.load();
            correct.play();

        } else if (correct_items.length === 20) {
          //  $('#star9').show();
            vo18.play();
            setTimeout(function(){ vo19.play(); }, 5000);
            $('#game-complete').modal('show');
            complete.play();
            $('#scoop-game').hide();
            correct.load();
            correct.play();
            setTimeout(function(){$('#next-button2').show(); }, 7000);
            playing = false;
        }
    });

    //Wrong Items

    $('#fish').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#root').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#turtle').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#octo').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#shell').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#fish2').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#crab').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#horse').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#rock').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#nemo').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#fish3').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#star').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#clam').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#shell2').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#red').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#jelly').click(function () {
        incorrect.load();
        incorrect.play();
    });

    $('#lob').click(function () {
        incorrect.load();
        incorrect.play();
    });


//////////////// Timer functionality ////////////////////////////////////////////////////////////////////////////////
playpause.onclick = function() {
  if (playing) {
    playing = false; 
    console.log("Pause!");
  } else if (!playing) {
    playing = true; 
    console.log("Play!");
  }
  
}

pause.onclick = function() {
  if (playing) {
    playing = false; 
    console.log("Pause!");
  }
  
}

play.onclick = function() {
   if (!playing) {
    playing = true; 
    console.log("Play!");
  }
  
}

reset.onclick = function() {
  if (playing) {
    playing = false; 
  }
  console.log("Reset Timer!");
  count = COUNT_START;
}

function countdown(){
    displayTime();

    if (count == 0) {
      playing = false;
      count++;
    setTimeout(function() { countdown; }, 10000); //////////    reset counter     ////////////////
       $('#time-modal1').modal('show');
    } else if (playing) {
      setTimeout(countdown, 100);
      count--;
    } else {
      setTimeout(countdown, 100); 
    }
  
}
countdown();

function displayTime() {
  
  var tenths = count;  
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    document.getElementById('time_left').innerHTML = LeadingZero(mins)+':'+LeadingZero(sec);
  }
  else {
    document.getElementById('time_left').innerHTML = hours+':'+LeadingZero(mins)+':'+LeadingZero(sec);
  }
}

function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}


// $(function() {
//    $( '.timer' ).timer(function() {
//         $('#time-modal').modal('show');

//         if (correct_items.length >= 8) {
//            $('#retry-screen').modal("show");
//            $('#fail-screen').modal("hide");
//        } else {
//            $('#fail-screen').modal("show");
//            $('#retry-screen').modal("hide");
//        }
//    });

// });

});
// function startGame() {
//     startTimer();
//     start.loop = true;
// }

// var timer1 = new (function () {
//     currentTime = '90000'; // 24 hours (in milliseconds)
// });

// function delayTimerStart(delayLength) {
//     $('#counter').slideUp(300).delay(delayLength).queue(function () {

//     });
// }

// function startTimer() {
//     $countdown = $('#counter');
//     $countdown.show();

//     timer1.Timer = $.timer(updateTimer, incrementTime, true);
// }

// function updateTimer() {

//     // Output timer position
//     var timeString = currentTime.toString();
//     $countdown.html(displayTime(timeString));

//     // If timer is complete, trigger alert
//     if (currentTime == 0) {
//         timer1.Timer.stop();
//         //alert('Times up!');
//         $('#time-modal').modal('show');
//         start.pause();
//         start.currentTime = 0;
        
//         runout.play();

//         setTimeout(function () {
//             Background.pause();
            
            
//         });

//     }
//     // Increment timer position
//     currentTime -= incrementTime;
//     if (currentTime < 0) currentTime = 0;
// }

// function displayTime(timeString) {
//     var seconds = ~~((timeString / 1000) % 60);
//     var minutes = ~~((timeString / (1000 * 60)) % 60);
//     //var hours = ~~((timeString / (1000 * 60 * 60)) % 24);

//     //alert('hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds);

//     if (seconds < 10) seconds = "0" + seconds;
//     if (minutes < 10) minutes = "" + minutes;
//     //if (hours < 10) hours = "" + hours;

//     //if (hours = 0) hours = "00";
//     //if (minutes = 0) minutes = "00";

//     return minutes.toString() + seconds.toString();
// }