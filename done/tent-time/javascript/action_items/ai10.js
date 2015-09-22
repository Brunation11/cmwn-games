
 var meter;
    var full;
    var correct_items = new Array();


    $(document).ready(function () {
        

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
       

        $(".draggable").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable2").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable3").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable4").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable5").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable6").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable7").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable8").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable9").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable10").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable11").draggable({ cursor: 'move', revert: 'invalid' });
        $(".draggable12").draggable({ cursor: 'move', revert: 'invalid' });



        $(".droppable").droppable({
            tolerance: "pointer",
            accept: ".draggable",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable").fadeOut(4000);
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 4) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");

                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
               var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
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
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
                }
            }
        });


        $(".droppable9").droppable({
            tolerance: "pointer",
            accept: ".draggable9",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable9").fadeOut(4000);
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
                }
            }
        });

        $(".droppable10").droppable({
            tolerance: "pointer",
            accept: ".draggable10",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable10").fadeOut(4000);
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
                }
            }
        });

        $(".droppable11").droppable({
            tolerance: "pointer",
            accept: ".draggable11",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable11").fadeOut(4000);
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
                }
            }
        });

        $(".droppable12").droppable({
            tolerance: "pointer",
            accept: ".draggable12",
            drop: function () {
                try {
                    correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $(".draggable12").fadeOut(4000);
                correct_items.push(0);
                var path = "content/images/meter_5";
                var file_ext = ".png";
                var image_src = path + correct_items.length + file_ext;

                $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                if (correct_items.length === 3) {
                    //pop or redirect your game complete screen
                    setTimeout(function () {
                        $("#putcontenthere").load("action_items/ai11.html");
                    }, 1000);
                    try {
                    backg.pause();
                }
                catch (err) {
                    //no sound - log error
                }
                }
            }
        });









    })