
     $(document).ready(function () {
        var bkg = document.getElementById("background");
        var start = document.getElementById("start1");
        var timer1;
        var $countdown;
        var $form;
        var incrementTime = 1000;
        var currentTime;

        //var back_audio = $(this).add("back-audio");
        //back_audio.src = "content/sound/Background.mp3";
        //back_audio.loop = true;
        //back_audio.autoplay = true;

        //background.play();
        startGame();

        $(".drag-item").click(function (ui) {
            updateWordBox(this);
        })

        $('#game-complete').modal('hide');
        setTimeout(function () {

            $('#game-complete').modal('hide');
            $('.text-modal').append("<p>Are you sure you want to quit?</p>");

            $("#close").click(function () {
                $('#game-complete').modal('show');

            });

        });

        init();

    })

    //shows the selected toolbox item in the word box
    function updateWordBox(ui) {
        var drag_item = $(ui);
        var drag_item_data = drag_item.attr('data-display-text');

        //this is where the wording goes
        $('.box').html('<p><strong>' + drag_item_data + '</p></strong>').show();
    }

    //create count up function
    var sec = 0;
    var minutes;
    var seconds;

    //pad the values for 0 when necessary
    function pad(val) { return val > 9 ? val : "0" + val };

    //starts the game and get's everything ready to load
    function startGame() {
        //createTimer('100000');

        //startTimer();


        setInterval(function () {
            seconds = pad(++sec % 60);
            minutes = pad(parseInt(sec / 60, 10));
            $('#counter').html(minutes + ":" + seconds);

            //start.loop = true;
            //start.play();
        }, 1000);
    }

    //initialize the drag and drop items
    function init() {
        var dropped_item;
        var correct_items = new Array();

        $('.drag-item').draggable({
            revert: 'invalid',
            cursor: 'move',
            snap: '.container'

        });

        //initailize the draggable items
        setDroppable();


        //initalize the drop zone for this drag and drop
        function setDroppable() {
            $('.drop-zone').droppable({
                drop: handleDrop
            });
        }

        //handles the drop event for all items
        function handleDrop(event, ui) {
            var draggable = ui.draggable;
            var dragged_item = draggable.attr('id');
            var dropped_zone = $(this).attr('id');

            //this will ensure that the item text always appear on the drop
            updateWordBox(draggable);

            //logic to manage the drops
            switch (dropped_zone) {
                case ('handle-drop'):
                    {
                        //check to see if this is the correct drag item for this drop
                        if (dragged_item === 'handlebars') {
                            //show the completed image
                            draggable.html('<img src="content/images/slider_bike/bikeparts_handlebars_complete.png" class="img-top"></img>').show();

                            //snap completed image into the correct location
                            $('div', '#handle-drop').each(function () {
                                var $div = $(this);
                                $div.droppable({
                                    drop: function () {
                                        $('#handlebars').addClass('dropped').
                                        css({
                                            top: $div.offset().top,
                                            left: $div.offset().left
                                        });
                                        $('#handle-drop').addClass('focus');
                                    }
                                });
                            });

                            //make the image non-draggable
                            $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                            //remove the drop zone so that you can layer over it
                            $('#' + dropped_zone).droppable('disable');
                            $('#handlebars').css('z-index', '1002');

                            correct_items.push(dropped_zone);
                            //correct.play();

                            if (correct_items.length === 10) {
                                //pop or redirect your game complete screen
                                setTimeout(function () {
                                    $("#putcontenthere").load("action_items/ai4.html");
                                }, 2000);
                            }

                        } else {
                            //revert here
                            $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                            //wrong.play();
                        }
                        break;
                    }   // end of case

                case ('whee-l-drop'):
                    {
                        //test to see if it is the correct item
                        if (dragged_item === 'wheel' || dragged_item === "wheell") {

                            //show the completed image
                            draggable.html('<img src="content/images/slider_bike/bikeparts_wheel_complete.png" class="img-topw"></img>').show();

                            //snap completed image into the correct location
                            $('div', '#whee-l-drop').each(function () {
                                var $div = $(this);
                                $div.droppable({
                                    drop: function () {
                                        $('#wheel').addClass('dropped').
                                        css({
                                            top: $div.offset().top,
                                            left: $div.offset().left
                                        });
                                        $('#whee-l-drop').addClass('focus');
                                    }
                                });
                            });

                            //make the image non-draggable
                            $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                            //remove the drop zone so that you can layer over it
                            $('#' + dropped_zone).droppable('disable');
                            $('#wheel').css('z-index', '1001');

                            correct_items.push(dropped_zone);
                            //correct.play();

                            if (correct_items.length === 10) {
                                //pop or redirect your game complete screen
                                setTimeout(function () {
                                    $("#putcontenthere").load("action_items/ai4.html");
                                }, 2000);
                            }

                        } else {
                            //revert here
                            $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                            //wrong.play();
                        }
                        break;
                    }   // end of case



                case ('seat-drop'):
                    {
                        //test to see if it is the correct item
                        if (dragged_item === 'seat') {

                            //show the completed image
                            draggable.html('<img src="content/images/slider_bike/bikeparts_seat_complete.png" class="img-top"></img>').show();

                            //snap completed image into the correct location
                            $('div', '#seat-drop').each(function () {
                                var $div = $(this);
                                $div.droppable({
                                    drop: function () {
                                        $('#seat').addClass('dropped').
                                        css({
                                            top: $div.offset().top,
                                            left: $div.offset().left
                                        });
                                        $('#seat-drop').addClass('focus');
                                    }
                                });
                            });

                            //make the image non-draggable
                            $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                            //remove the drop zone so that you can layer over it
                            $('#' + dropped_zone).droppable('disable');

                            correct_items.push(dropped_zone);

                            //correct.play();

                            if (correct_items.length === 10) {
                                //pop or redirect your game complete screen
                                setTimeout(function () {
                                    $("#putcontenthere").load("action_items/ai4.html");
                                }, 2000);
                            }
                        }
                        else {
                            //revert here
                            $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                            //wrong.play();
                        }
                        break;
                    }   // end of case

                case ('chain-drop'):
                    {

                        //test to see if it is the correct item
                        if (dragged_item === 'chain') {

                            //show the completed image
                            draggable.html('<img src="content/images/slider_bike/bikeparts_chain_complete.png" class="img-topc"></img>').show();

                            //snap completed image into the correct location
                            $('div', '#chain-drop').each(function () {
                                var $div = $(this);
                                $div.droppable({
                                    drop: function () {
                                        $('#chain').addClass('dropped').
                                        css({
                                            top: $div.offset().top,
                                            left: $div.offset().left
                                        });
                                        $('#chain-drop').addClass('focus');
                                    }
                                });
                            });

                            //make the image non-draggable
                            $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                            //remove the drop zone so that you can layer over it
                            $('#' + dropped_zone).droppable('disable');

                            correct_items.push(dropped_zone);
                            //correct.play();

                            if (correct_items.length === 10) {
                                //pop or redirect your game complete screen
                                setTimeout(function () {
                                    $("#putcontenthere").load("action_items/ai4.html");
                                }, 2000);
                        }
                    }
                    else {
                            //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                            //wrong.play();
                    }
                    break;
                }   // end of case


            case ('brake-cable-drop'):
                {
                    //test to see if it is the correct item
                    if (dragged_item === 'brakecable') {

                        //show the completed image
                        draggable.html('<img src="content/images/slider_bike/bikeparts_brakecable_complete.png" class="img-top"></img>').show();

                        //snap completed image into the correct location
                        $('div', '#brake-cable-drop').each(function () {
                            var $div = $(this);
                            $div.droppable({
                                drop: function () {
                                    $('#brakecable').addClass('dropped').
                                    css({
                                        top: $div.offset().top,
                                        left: $div.offset().left
                                    });
                                    $('#brake-cable-drop').addClass('focus');
                                }
                            });
                        });

                        //make the image non-draggable
                        $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                        //remove the drop zone so that you can layer over it
                        $('#' + dropped_zone).droppable('disable');

                        correct_items.push(dropped_zone);

                        //correct.play();

                        if (correct_items.length === 10) {
                            //pop or redirect your game complete screen
                            setTimeout(function () {
                                $("#putcontenthere").load("action_items/ai4.html");
                            }, 2000);
                        }

                    }
                    else {
                        //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                        //wrong.play();
                    }
                    break;
                }

            case ('pedal-drop'):
                {
                    //test to see if it is the correct item
                    if (dragged_item === 'pedal') {
                        //show the completed image
                        draggable.html('<img src="content/images/slider_bike/bikeparts_pedal_complete.png" class="img-top"></img>').show();

                        //snap completed image into the correct location
                        $('div', '#pedal-drop').each(function () {
                            var $div = $(this);
                            $div.droppable({
                                drop: function () {
                                    $('#' + dragged_item).addClass('dropped').
                                    css({
                                        top: $div.offset().top,
                                        left: $div.offset().left
                                    });
                                    $('#' + dropped_zone).addClass('focus');
                                }
                            });
                        });

                        //make the image non-draggable
                        $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                        //remove the drop zone so that you can layer over it
                        $('#' + dropped_zone).droppable('disable');

                        correct_items.push(dropped_zone);

                        //correct.play();

                        if (correct_items.length === 10) {
                            //pop or redirect your game complete screen
                            setTimeout(function () {
                                $("#putcontenthere").load("action_items/ai4.html");
                            }, 2000);
                        }


                    }
                    else {
                        //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                        //wrong.play();
                    }
                    break;
                }   // end of case


            case ('fen-der-drop'):
                {
                    //test to see if it is the correct item
                    if (dragged_item === 'fender') {

                        //show the completed image
                        draggable.html('<img src="content/images/slider_bike/bikeparts_fender_complete.png" class="img-topf"></img>').show();

                        //snap completed image into the correct location
                        $('div', '#fen-der-drop').each(function () {
                            var $div = $(this);
                            $div.droppable({
                                drop: function () {
                                    $('#' + dragged_item).addClass('dropped').
                                    css({
                                        top: $div.offset().top,
                                        left: $div.offset().left
                                    });
                                    $('#' + dropped_zone).addClass('focus');
                                }
                            });
                        });

                        //make the image non-draggable
                        $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                        //remove the drop zone so that you can layer over it
                        $('#' + dropped_zone).droppable('disable');

                        correct_items.push(dropped_zone);
                        //correct.play();

                        if (correct_items.length === 10) {
                            //pop or redirect your game complete screen
                            setTimeout(function () {
                                $("#putcontenthere").load("action_items/ai4.html");
                            }, 2000);
                        }


                    }
                    else {
                        //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                        //wrong.play();
                    }
                    break;
                }   // end of case


            
            case ('headlamp-drop'):
                {
                    //test to see if it is the correct item
                    if (dragged_item === 'headlamp') {
                        //show the completed image
                        draggable.html('<img src="content/images/slider_bike/bikeparts_headlamp_complete.png" class="img-top"></img>').show();

                        //snap completed image into the correct location
                        $('div', '#headlamp-drop').each(function () {
                            var $div = $(this);
                            $div.droppable({
                                drop: function () {
                                    $('#' + dragged_item).addClass('dropped').
                                    css({
                                        top: $div.offset().top,
                                        left: $div.offset().left
                                    });
                                    $('#' + dropped_zone).addClass('focus');
                                }
                            });
                        });

                        //make the image non-draggable
                        $(ui.draggable).detach().css({ top: 39, left: 20 }).appendTo(this);

                        //remove the drop zone so that you can layer over it
                        $('#' + dropped_zone).droppable('disable');

                        correct_items.push(dropped_zone);
                        //correct.play();

                        if (correct_items.length === 10) {
                            //pop or redirect your game complete screen
                            setTimeout(function () {
                                $("#putcontenthere").load("action_items/ai4.html");
                            }, 2000);
                        }

                    }
                    else {
                        //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                        //wrong.play();
                    }
                    break;
                }   // end of case


            case ('whee-ll-drop'):
                {
                    //test to see if it is the correct item
                    if (dragged_item === 'wheel' || dragged_item === "wheell") {
                        //show the completed image
                        draggable.html('<img src="content/images/slider_bike/bikeparts_wheel_complete.png" class="img-topw"></img>').show();

                        //snap completed image into the correct location
                        $('div', '#whee-ll-drop').each(function () {
                            var $div = $(this);
                            $div.droppable({
                                drop: function () {
                                    $('#' + dragged_item).addClass('dropped').
                                    css({
                                        top: $div.offset().top,
                                        left: $div.offset().left
                                    });
                                    $('#' + dropped_zone).addClass('focus');
                                }
                            });
                        });

                        //make the image non-draggable
                        $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                        //remove the drop zone so that you can layer over it
                        $('#' + dropped_zone).droppable('disable');

                        correct_items.push(dropped_zone);
                        //correct.play();

                        if (correct_items.length === 10) {
                            //pop or redirect your game complete screen
                            setTimeout(function () {
                               $("#putcontenthere").load("action_items/ai4.html");
                            }, 2000);
                        }


                    }
                    else {
                        //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                        //wrong.play();
                    }
                    break;
                }   // end of case


            case ('brake-drop'):
                {
                    //test to see if it is the correct item
                    if (dragged_item === 'brake') {
                        //show the completed image
                        draggable.html('<img src="content/images/slider_bike/bikeparts_brake_complete.png" class="img-top"></img>').show();

                        //snap completed image into the correct location
                        $('div', '#brake-drop').each(function () {
                            var $div = $(this);
                            $div.droppable({
                                drop: function () {
                                    $('#' + dragged_item).addClass('dropped').
                                    css({
                                        top: $div.offset().top,
                                        left: $div.offset().left
                                    });
                                    $('#' + dropped_zone).addClass('focus');
                                }
                            });
                        });

                        //make the image non-draggable
                        $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);

                        //remove the drop zone so that you can layer over it
                        $('#' + dropped_zone).droppable('disable');

                        correct_items.push(dropped_zone);
                        //correct.play();

                        if (correct_items.length === 10) {
                            //pop or redirect your game complete screen
                            setTimeout(function () {
                               $("#putcontenthere").load("action_items/ai4.html");
                            }, 2000);

                        }

                    }
                    else {
                        //revert here
                        $('#' + dragged_item + '').css({ 'left': '0px', 'top': '0px' });
                        //wrong.play();
                    }
                    break;
                }   // end of case

        }

    }

}