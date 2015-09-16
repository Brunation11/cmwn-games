
var meter;
    var full;
    var correct_items = new Array();



    $(document).ready(function () {
        

        try {
            backg.load();
            backg.play();
        }
        catch (err) {
            //no sound - log error
        }



        //this is for object to be rejected
        $(".leave").draggable({
            revert: 'invalid',
            drag: function () {
                try {
                    incorrect.play();
                }
                catch (err) {
                    //no sound - log error
                }
            }
        });


        $(".draggable1").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable2").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable3").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable4").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable5").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable6").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable7").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable8").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable").droppable({
            tolerance: "pointer",
            accept: ".draggable1",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable1").fadeOut(4000);
                $("#sleep p").css("text-decoration", "line-through");
                correct_items.push(1);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });

        $(".droppable2").droppable({
            tolerance: "pointer",
            accept: ".draggable2",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable2").fadeOut(4000);
                $("#tent p").css("text-decoration", "line-through");
                correct_items.push(2);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");

                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                         $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });

        $(".droppable3").droppable({
            tolerance: "pointer",
            accept: ".draggable3",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable3").fadeOut(4000);
                $("#bug p").css("text-decoration", "line-through");
                correct_items.push(3);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                         $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });

        $(".droppable4").droppable({
            tolerance: "pointer",
            accept: ".draggable4",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable4").fadeOut(4000);
                $("#flash p").css("text-decoration", "line-through");
                correct_items.push(4);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                         $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });

        $(".droppable5").droppable({
            tolerance: "pointer",
            accept: ".draggable5",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable5").fadeOut(4000);
                $("#aid p").css("text-decoration", "line-through");
                correct_items.push(5);
               var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });

        $(".droppable6").droppable({
            tolerance: "pointer",
            accept: ".draggable6",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable6").fadeOut(4000);
                $("#batter p").css("text-decoration", "line-through");
                correct_items.push(6);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                         $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });


        $(".droppable7").droppable({
            tolerance: "pointer",
            accept: ".draggable7",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable7").fadeOut(4000);
                $("#food p").css("text-decoration", "line-through");
                correct_items.push(7);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                       $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });

        $(".droppable8").droppable({
            tolerance: "pointer",
            accept: ".draggable8",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable8").fadeOut(4000);
                $("#water p").css("text-decoration", "line-through");
                correct_items.push(7);
                var path = "content/images/meter_";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 8) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                         $("#putcontenthere").load("action_items/ai9.html");
                    }, 2000);
                }
            }
        });




    });