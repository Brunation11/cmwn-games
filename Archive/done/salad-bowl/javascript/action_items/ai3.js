 
          var full;
    var correct_items = new Array();



    $(document).ready(function () {
       
        try {
            slides4.load();
            slides4.play();
        }
        catch (err) {
            //no sound - log error
        }


        document.getElementById('slides4').addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);

        $('.play2').hide();

        $('.play2').click(function () {
            $('.play2').delay(1000).delay(1000, function () {
                $("#putcontenthere").load("action_items/ai4.html");
            });
         
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }
            slides4.pause();
        });


        //start cheese

        $("#cheese").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable").droppable({
            tolerance: "pointer",
            accept: "#cheese",
            drop: function () {
                $("#cheese img").fadeOut(3000);
                $("#cheesy").modal('show');
            }
        });

        $('#back').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#cheesy').modal('hide');
            correct_items.push(1);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end cheese


        //start broccoli

        $("#broccoli").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable1").droppable({
            tolerance: "pointer",
            accept: "#broccoli",
            drop: function () {
                $("#broccoli img").fadeOut(3000);
                $("#broc").modal('show');
            }
        });

        $('#back1').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#broc').modal('hide');
            correct_items.push(2);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end broccoli


        //start cucumber

        $("#cucumber").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable2").droppable({
            tolerance: "pointer",
            accept: "#cucumber",
            drop: function () {
                $("#cucumber img").fadeOut(3000);
                $("#cu").modal('show');
            }
        });

        $('#back2').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#cu').modal('hide');
            correct_items.push(3);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end cucumber


        //start melon

        $("#melon").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable3").droppable({
            tolerance: "pointer",
            accept: "#melon",
            drop: function () {
                $("#melon img").fadeOut(3000);
                $("#mel").modal('show');
            }
        });

        $('#back3').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#mel').modal('hide');
            correct_items.push(4);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end melon


        //start beets

        $("#beets").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable4").droppable({
            tolerance: "pointer",
            accept: "#beets",
            drop: function () {
                $("#beets img").fadeOut(3000);
                $("#beet").modal('show');
            }
        });

        $('#back4').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#beet').modal('hide');
            correct_items.push(5);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end beets

        //start cabbage

        $("#cabbage").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable5").droppable({
            tolerance: "pointer",
            accept: "#cabbage",
            drop: function () {
                $("#cabbage img").fadeOut(3000);
                $("#cab").modal('show');
            }
        });

        $('#back5').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#cab').modal('hide');
            correct_items.push(6);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end cabbage


        //start nuts

        $("#nuts").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable6").droppable({
            tolerance: "pointer",
            accept: "#nuts",
            drop: function () {
                $("#nuts img").fadeOut(3000);
                $("#nut").modal('show');
            }
        });

        $('#back6').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#nut').modal('hide');
            correct_items.push(7);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end nuts



        //start apple

        $("#apple").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable7").droppable({
            tolerance: "pointer",
            accept: "#apple",
            drop: function () {
                $("#apple img").fadeOut(3000);
                $("#app").modal('show');
            }
        });

        $('#back7').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#app').modal('hide');
            correct_items.push(8);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end apple



        //start cranberry

        $("#cranberry").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable8").droppable({
            tolerance: "pointer",
            accept: "#cranberry",
            drop: function () {
                $("#cranberry img").fadeOut(3000);
                $("#cran").modal('show');
            }
        });

        $('#back8').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#cran').modal('hide');
            correct_items.push(9);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end cranberry


        //start strawberry

        $("#strawberry").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable9").droppable({
            tolerance: "pointer",
            accept: "#strawberry",
            drop: function () {
                $("#strawberry img").fadeOut(3000);
                $("#straw").modal('show');
            }
        });

        $('#back9').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#straw').modal('hide');
            correct_items.push(10);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end strawberry


        //start carrot

        $("#carrot").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable10").droppable({
            tolerance: "pointer",
            accept: "#carrot",
            drop: function () {
                $("#carrot img").fadeOut(3000);
                $("#car").modal('show');
            }
        });

        $('#back10').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#car').modal('hide');
            correct_items.push(11);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end carrot


        //start geens

        $("#geens").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable11").droppable({
            tolerance: "pointer",
            accept: "#geens",
            drop: function () {
                $("#geens img").fadeOut(3000);
                $("#geen").modal('show');
            }
        });

        $('#back11').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#geen').modal('hide');
            correct_items.push(12);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end geens


        //start lemon

        $("#lemon").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable12").droppable({
            tolerance: "pointer",
            accept: "#lemon",
            drop: function () {
                $("#lemon img").fadeOut(3000);
                $("#lem").modal('show');
            }
        });

        $('#back12').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#lem').modal('hide');
            correct_items.push(13);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end lemon


        //start cauliflower

        $("#cauliflower").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable13").droppable({
            tolerance: "pointer",
            accept: "#cauliflower",
            drop: function () {
                $("#cauliflower img").fadeOut(3000);
                $("#cauli").modal('show');
            }
        });

        $('#back13').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#cauli').modal('hide');
            correct_items.push(14);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end cauliflower


        //start geens2

        $("#geens2").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable14").droppable({
            tolerance: "pointer",
            accept: "#geens2",
            drop: function () {
                $("#geens2 img").fadeOut(3000);
                $("#geen2").modal('show');
            }
        });

        $('#back14').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#geen2').modal('hide');
            correct_items.push(15);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end geens2

        //start avacado

        $("#avacado").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable15").droppable({
            tolerance: "pointer",
            accept: "#avacado",
            drop: function () {
                $("#avacado img").fadeOut(3000);
                $("#ava").modal('show');
            }
        });

        $('#back15').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#ava').modal('hide');
            correct_items.push(16);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end avacado

        //start geens3

        $("#geens3").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable16").droppable({
            tolerance: "pointer",
            accept: "#geens3",
            drop: function () {
                $("#geens3 img").fadeOut(3000);
                $("#geen3").modal('show');
            }
        });

        $('#back16').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#geen3').modal('hide');
            correct_items.push(17);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end geens3


        //start tomato

        $("#tomato").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable17").droppable({
            tolerance: "pointer",
            accept: "#tomato",
            drop: function () {
                $("#tomato img").fadeOut(3000);
                $("#tom").modal('show');
            }
        });

        $('#back17').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#tom').modal('hide');
            correct_items.push(18);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end tomato



        //start red

        $("#red").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable18").droppable({
            tolerance: "pointer",
            accept: "#red",
            drop: function () {
                $("#red img").fadeOut(3000);
                $("#red1").modal('show');
            }
        });

        $('#back18').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#red1').modal('hide');
            correct_items.push(19);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end red

        //start geens4

        $("#geens4").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable19").droppable({
            tolerance: "pointer",
            accept: "#geens4",
            drop: function () {
                $("#geens4 img").fadeOut(3000);
                $("#geen4").modal('show');
            }
        });

        $('#back19').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#geen4').modal('hide');
            correct_items.push(20);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end geens4

        //start onion

        $("#onion").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable20").droppable({
            tolerance: "pointer",
            accept: "#onion",
            drop: function () {
                $("#onion img").fadeOut(3000);
                $("#ion").modal('show');
            }
        });

        $('#back20').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#ion').modal('hide');
            correct_items.push(21);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end onion

        //start watermelon

        $("#watermelon").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable21").droppable({
            tolerance: "pointer",
            accept: "#watermelon",
            drop: function () {
                $("#watermelon img").fadeOut(3000);
                $("#water").modal('show');
            }
        });

        $('#back21').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#water').modal('hide');
            correct_items.push(22);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end watermelon


        //start geens5

        $("#geens5").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable22").droppable({
            tolerance: "pointer",
            accept: "#geens5",
            drop: function () {
                $("#geens5 img").fadeOut(3000);
                $("#geen5").modal('show');
            }
        });

        $('#back22').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#geen5').modal('hide');
            correct_items.push(23);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end geens5


        //start pepper

        $("#pepper").draggable({ cursor: 'move', revert: 'invalid' });

        $(".droppable23").droppable({
            tolerance: "pointer",
            accept: "#pepper",
            drop: function () {
                $("#pepper img").fadeOut(3000);
                $("#pep").modal('show');
            }
        });

        $('#back23').click(function () {
            try {
                click.play();
            }
            catch (err) {
                //no sound - log error
            }

            $('#pep').modal('hide');
            correct_items.push(23);
            if (correct_items.length === 24) {
                //pop or redirect your game complete screen
                $('.play2').show();
            }

        });

        //end pepper



    });