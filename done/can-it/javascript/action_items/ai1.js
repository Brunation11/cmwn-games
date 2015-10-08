$(document).ready(function () {
    tittle.load();
    tittle.play();

//Background.play();

    //Quit game
    $('.close-Button').click(function () {

        $('#quit-game').modal('show');
    });

    $('#no-btn').click(function () {

        $('#quit-game').modal('hide');
    });

    $('.exit-Modal-Btn').click(function () {
        $('#quit-game').modal('hide');

    });
    //quit modal window
    $('.close-Modal-Btn').hide();

    $('.close-Modal-Btn').click(function () {

            ButtonClick.load();
            ButtonClick.play();

        $('#game-info').modal('show');
        $('#game-info2').modal('hide');
        $('#game-info3').modal('hide');
        $('#game-info4').modal('hide');
        $('#game-info5').modal('hide');
        $('#game-info6').modal('hide');
        $('#game-info7').modal('hide');
    });

    $('#game-info').modal('show');
    $('#game-info2').modal('hide');
    $('#game-info3').modal('hide');
    $('#game-info4').modal('hide');
    $('#game-info5').modal('hide');
    $('#game-info6').modal('hide');
    $('#game-info7').modal('hide');


    function playButtonSound()
    {
        try {
            ButtonClick.load();
            ButtonClick.play();
        }
        catch (err) {
            //no sound - log error
        }
    }

    $('#slide-1').click(function () {
        playButtonSound();
        $("#next-button3").hide().delay(3000).fadeIn(2000);
        $('.close-Modal-Btn').show();
        $('#game-info').modal('hide');
        $('#game-info2').modal('show');
    });

    $('#next-button3').click(function () {
        playButtonSound();
        $("#next-button4").hide().delay(3000).fadeIn(2000);
        //$('#next-button3').hide().delay(5000).fadeIn(800);
        $('.close-Modal-Btn').show();
        $('#game-info2').modal('hide');
        $('#game-info3').modal('show');
    });

    $('#next-button4').click(function () {
        playButtonSound();
        $("#next-button5").hide().delay(3000).fadeIn(2000);
        $('.close-Modal-Btn').show();
        $('#game-info3').modal('hide');
        $('#game-info4').modal('show');
    });

    $('#next-button5').click(function () {
        playButtonSound();
        $("#next-button6").hide().delay(3000).fadeIn(2000);
        $('.close-Modal-Btn').show();
        $('#game-info4').modal('hide');
        $('#game-info5').modal('show');
    });

    $('#next-button6').click(function () {
        playButtonSound();
        $('.close-Modal-Btn').show();
        $('#game-info5').modal('hide');
        $('#game-info6').modal('show');
    });

    $('#next-button7').click(function () {
        try {
            slide.load();
            slide.play();
        }
        catch (err) {
            //no sound - log error
        }

        $('.close-Modal-Btn').show();
        $('#game-info6').modal('hide');
        $('#game-info7').modal('show');

    });

    $('#next-button8').click(function () {
        $("#putcontenthere").load("action_items/ai2.html");
    });

    // back button functions

    $('#back-button1').click(function () {
        playButtonSound();
        $('#game-info').modal('show');
        $('#game-info2').modal('hide');
    });

    $('#back-button2').click(function () {
        playButtonSound();
        $('#game-info2').modal('show');
        $('#game-info3').modal('hide');
    });

    $('#back-button3').click(function () {
        playButtonSound();
        $('#game-info3').modal('show');
        $('#game-info4').modal('hide');
    });

    $('#back-button4').click(function () {
        playButtonSound();
        $('#game-info4').modal('show');
        $('#game-info5').modal('hide');
    });

    $('#back-button5').click(function () {
        playButtonSound();
        $('#game-info5').modal('show');
        $('#game-info6').modal('hide');
    });

    $('#back-button6').click(function () {
        playButtonSound();
        $('#game-info6').modal('show');
        $('#game-info7').modal('hide');
    });
});