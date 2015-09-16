    var dropped_items = new Array();
    var correct_answers;
    var question;
    var question_number;
    var game_meter = 0;

    var current_question;
    var questions = [
    "Filter 2 gallons in 1 hour ?",
    "Filter 4 gallons in 1 hour ?",
    "Filter 6 gallons in 1 hour ?",
    "Filter 8 gallons in 1 hour ?",
    "Filter 1 gallon in 1 hour ?",
    "Filter 4 gallons in 2 hours ?",
    "Filter 8 gallons in 2 hours ?",
    "Filter 2 gallons in 2 hours ?",
    "Filter 10 gallons in  1 hour ?",
    "Filter 6 gallons in 2 hours ?",
    "Filter 1 gallon in 3 hours ?",
    "Filter 3 gallons in 2 hours ?",
    "Filter 5 gallons in 1 hour ?",
    "Filter 1 gallon in 5 hours ?",
    "Filter 3 gallons in 3 hours ?"];
    var answers   = [1, 2, 3, 4, 1, 1, 2, 1, 5, 2, 1, 1, 3, 1, 1];

    $(document).ready(function () {

        $(".text-modal-start").css({
            "color":"#000",
            "font-size":"24px",
            "font-family":"Source Sans Pro, sans serif",
            "font-weight":"600",
            "left":"88px",
            "top":"33px"
        });

        //hide button first
        $('#check-answer').hide();

        // background sound
        try
        {
            background.volume = 0.1,
            background.load();
            background.play();
        }
        catch(err)
        {
            //no sound - log error
        }

        //get the question from the model
        resetQuestions();

        // Hide Success Messages
        $('#game-info-correct').modal('hide');

        //initialize the draggable objects
        $('.makeMeDraggable').draggable();

        // Hide water tank images for now
        hideWaterState();

        // Hide filled Meters for now
        hideGameMeter();

        $(init);

        $('#check-answer').click(function () {

            $('#check-answer').hide();
            //check to see of the answer is correct

            if (dropped_items.length === answers[current_question])
            {
                //add bubble to meter
                showGameMeter();

                //hide the question screen
                $('#game-info-Question').modal('hide');

                //show the correct screen for 3 seconds
                $('#game-info-correct').modal('show');

                // correct sound
                try
                {
                    CorrectSound.volume = 0.5,
                    CorrectSound.play();
                }
                catch(err)
                {
                    //no sound - log error
                }

                setTimeout(function () {
                    //test to see if this is the end of the game - 10 correct answers

                    if (game_meter === 10) {
                        //this is where you will send it to the next screen
                        // window.location.href="";
                        $("#putcontenthere").load("action_items/ai4.html");
                    }
                    else
                    {
                        //reset question
                        resetQuestions();
                    }
                }, 3000)

            }
            else
            {
                //hide the question screen
                $('#game-info-Question').modal('hide');

                //show the incorrect screen for 3 seconds
                $('#game-info-incorrect').modal('show');

                // incorrect sound
                try
                {
                    Wrong.play();
                }
                catch(err)
                {
                    //no sound - log error
                }

                setTimeout(function () {
                    //reset question
                    resetQuestions();
                }, 3000)
            }

            // Click sound;
            try
            {
                Btn_Click.play();
            }
            catch (err)
            {
                //no sound - log error
            }

        })
    });

    // Hide water tank images for now
    function hideWaterState()
    {
        $('.water_05').show();
        $('.water_04').hide();
        $('.water_03').hide();
        $('.water_02').hide();
        $('.water_01').hide();
    }

    function hideGameMeter()
    {
        $('.bubble_1').hide();
        $('.bubble_2').hide();
        $('.bubble_3').hide();
        $('.bubble_4').hide();
        $('.bubble_5').hide();
        $('.bubble_6').hide();
        $('.bubble_7').hide();
        $('.bubble_8').hide();
        $('.bubble_9').hide();
        $('.bubble_10').hide();
    }

    function showGameMeter()
    {
        game_meter = game_meter + 1;

        $('.bubble_' + game_meter + '').show();
    }

    function revertOysters() {

        $('#Oyster1').css({ 'left': '3px', 'top': '152px' });
        $('#Oyster2').css({ 'left': '54px', 'top': '167px' });
        $('#Oyster3').css({ 'left': '1px', 'top': '153px' });
        $('#Oyster4').css({ 'left': '32px', 'top': '156px' });
        $('#Oyster5').css({ 'left': '2px', 'top': '157px' });
        $('#Oyster6').css({ 'left': '47px', 'top': '160px' });
    }


    function resetQuestions()
    {
        $('#check-answer').hide();
        //make sure dropped_items is reset
        dropped_items = [];

        //revert and dragged items
        revertOysters();


        //hidewater state
        hideWaterState();

        current_question = Math.floor(Math.random()*questions.length);
        question = questions[current_question];

        //question = 'here is a question';
        question_number = 3;

        //make sure no other modal is being displayed
        $('#game-info-incorrect').modal('hide');
        $('#game-info-correct').modal('hide');

        //display question modal
        $('#game-info-Question').modal('show');
        $('.text-modal-start').html("<p>" + question + "</p>");

        $('.dragOyster').draggable({ revert: true });

    //     //reset game functions
    //     $.ajax({
    //         type: "POST",
    //         url: "@Url.Action("SelectRandomJQuery", "ActionItem")",
    //         dataType: "json",
    //         success: (function (data) {
    //             var new_question = data.split(",");
    //             if (new_question != null)
    //             {
    //                 //rebind model data with new question
    //                 question = new_question[1];
    //                 question_number = new_question[3];

    //                 //make sure no other modal is being displayed
    //                 $('#game-info-incorrect').modal('hide');
    //                 $('#game-info-correct').modal('hide');


    //                 //display question modal
    //                 $('#game-info-Question').modal('show');
    //                 $('.text-modal-start').html("<p>" + question + "</p>");

    //                 $('.dragOyster').draggable({ revert: true });
    //             }
    //         })
    //     })
    }

    function init() {

        $('.dragOyster').draggable({

            containment: '#content',
            cursor: 'move',
            revertDuration: 1000,
            snap: '#makeMeDroppable',
            revert: 'invalid',
            //delay: 200,
            //refreshPositions: true,

            snap: true,

        });


        $('#makeMeDroppable').droppable({
            //accept: '.dragOyster',
            drop: handleDropEvent,

        });
        $('#Oyster1').css({ 'left': '3px', 'top': '152px' });
        $('#Oyster2').css({ 'left': '54px', 'top': '167px' });
        $('#Oyster3').css({ 'left': '1px', 'top': '153px' });
        $('#Oyster4').css({ 'left': '32px', 'top': '156px' });
        $('#Oyster5').css({ 'left': '2px', 'top': '157px' });
        $('#Oyster6').css({ 'left': '47px', 'top': '160px' });

        function handleDropEvent(event, ui) {
            var draggable = ui.draggable;
            var dragged_item = draggable.attr('.makeMeDraggable');
            var dropped_zone = $(this).attr('#makeMeDroppable');

            //$(ui.draggable).detach().css({ top: 20, left: 100,}).appendTo(this);

            //add the dragged oyster to the dropped_items array to increase the count
            dropped_items.push(dragged_item);

            $('.dragOyster').draggable({ revert: false });
            //produce the animation for the oyster dropping into the tank

            $(ui.draggable).css({

                step: function (now, fx) {

                    $(this).css({ top: 90,});
                    $(this).css('-webkit-animation-timing-function: linear ');
                    $(this).css('-moz-animation-timing-function: linear ');
                    $(this).css('-ms-animation-timing-function: linear ');
                    $(this).css('-o-animation-timing-function: linear ');
                    $(this).css('animation-timing-function: linear ');

                },
                duration: 3000,


            }).animate({
                top: '+=130px',  rotate: -20

            }, {

                step: function (now, fx) {

                    //$(this).css({ top: 0});
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');

                    },

                duration: 4000,


            }, 3000);


            //show the appropriate water clean
            if (dropped_items.length === 1) {
                $('#check-answer').hide().fadeIn(1000);
                //hideWaterState();
                $('.water_04').show().hide().fadeIn(2000);

                // splash sound
                try
                {
                    splash1.volume = 0.5,
                    splash1.play();
                }
                catch(err)
                {
                    //no sound - log error
                }
            }
            else if (dropped_items.length === 2) {
                //hideWaterState();
                $('.water_03').show().hide().fadeIn(2000);

                //splash sound
                try
                {
                    splash2.volume = 0.5,
                    splash2.play();
                }
                catch (err) {
                    //no sound - log error
                }
            }
            else if (dropped_items.length === 3) {
                //hideWaterState();
                $('.water_02').show().hide().fadeIn(2000);

                //splash sound
                try
                {
                    splash3.volume = 0.5,
                    splash3.play();
                }
                catch (err)
                {
                    //no sound - log error
                }

            }
            else if (dropped_items.length === 4) {
                //hideWaterState();
                $('.water_01').show().hide().fadeIn(2000);

                //splash sound
                try
                {
                    splash4.volume = 0.5,
                    splash4.play();
                }
                catch (err)
                {
                    //no sound - log error
                }

            }
            else if (dropped_items.length === 5) {


                //splash sound
                try
                {
                    splash5.play();
                }
                catch(err)
                {
                    //no sound - log error
                }

            }
            else if (dropped_items.length === 6) {


                //splash sound
                try
                {
                    splash5.volume = 0.5,
                    splash5.play();
                }
                catch(err)
                {
                    //no sound - log error
                }

            }



        }


    }// end init()