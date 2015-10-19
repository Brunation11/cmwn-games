var correct_items = new Array();
$(document).ready(function () {
    vo1.play();

    $ ('.bkg-image').css('background-image','url(content/images/new/BKG_2.png)');

    $('.No').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.close-Btn').click(function () {

        $("#retry-level").modal('show');

    });

    var selected_item = $(".next-Btn-1");

    $(".text_2").hide();
    $(".text_3").hide();
    $(".text_4").hide();

     Ocean.load();
    Ocean.play();


    $(".next-Btn-1").click(function () {
        click.load();
        click.play();
        correct_items.push(selected_item);
        if (correct_items.length === 1) {
            $(".text_1").hide();
            $(".text_2").show();
            vo1.pause();
            vo2.play();
        }
        if (correct_items.length === 2) {
            Ocean.pause();
            Seconddino.load();
            Seconddino.play();
            vo2.pause();
            vo3.play();
           // setInterval(function () {
           //     Seconddino.load();
           //     Seconddino.play();
           // },10000);

            $ ('.bkg-image').css('background-image','url(content/images/new/BKG_3.png)');
            $(".text_2").hide();
            $(".text_3").show();
        }
        if (correct_items.length === 3) {
            //setInterval(function () {
            //    Seconddino.load();
            //    Seconddino.pause();
            //});
            Firstdino.load();
            Firstdino.play();
            vo3.pause();
            vo4.play();

           // setInterval(function () {
           //     Firstdino.load();
            //    Firstdino.play();
            //},8000);

            $(".text_3").hide();
            $(".text_4").show();
        }
        if (correct_items.length === 4) {
            $("#putcontenthere").load("action_items/ai3.html");

        }

    });


});