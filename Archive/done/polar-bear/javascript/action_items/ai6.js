$(document).ready(function () {

    // Quit screen function
          
    $('#close').click(function () {
        $('#game-close').modal('show');

    });
     
    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
                      
    });

    $('#next-button2').click(function () {
        $("#putcontenthere").load("action_items/ai6_2.html");
    });

    // First modal
    $('#game-info').modal('show');
    $('#game-info2').modal('hide');

    // next and back button function
   
    $('#next-button').click(function () {
        $('#game-info').modal('hide');
        $('#game-info2').modal('show');

    });

    $('#back').click(function () {
        $('#game-info').modal('show');
        $('#game-info2').modal('hide');
    });

    //$('#next-button2').click(function () {
    //    $('#game-info3').modal('hide');
    //    $('#game-info4').modal('show');
    //});

    //$('#back-button2').click(function () {
    //    $('#game-info3').modal('show');
    //    $('#game-info4').modal('hide');
    //});

    //$('#next-button3').click(function () {
    //    $('#game-info4').modal('hide');
    //    $('#game-info5').modal('show');
    //});

    //$('#back-button3').click(function () {
    //    $('#game-info4').modal('show');
    //    $('#game-info5').modal('hide');
    //});

    //$('#next-button4').click(function () {
    //    $('#game-info5').modal('hide');
    //    $('#game-info6').modal('show');
    //});

    //$('#back-button4').click(function () {
    //    $('#game-info5').modal('show');
    //    $('#game-info6').modal('hide');
    //});

    //$('#next-button5').click(function () {
    //    $('#game-info6').modal('hide');
    //    $('#game-info7').modal('show');
    //});

    //$('#back-button5').click(function () {
    //    $('#game-info6').modal('show');
    //    $('#game-info7').modal('hide');
    //});

    //$('#next-button6').click(function () {
    //    $('#game-info7').modal('hide');
    //    $('#game-info8').modal('show');
    //});

    //$('#back-button6').click(function () {
    //    $('#game-info7').modal('show');
    //    $('#game-info8').modal('hide');
    //});      

});