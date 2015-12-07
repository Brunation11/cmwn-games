var correct_items = new Array();
var clicked_item = $(this).attr("#Salmon");
//var min = 0;
//var max = $('#Salmon img').length;
//var randomLi = Math.floor(Math.random() * (max - min + 1)) + min;
//var Modals = new Array()


    //"I can reach speeds up to 25 mph on land and 6 mph on water.",
    //"I am the largest carnivore (meat-eater) that lives on land.",
    //"I use floating sea ice as a platform to hunt seals.",
    //"Seals make up most of my diet. Yum!",
    //"Male Polar Bears like me can weigh up to 1500 pounds.",
    //"I spend most of my time in the water.",
    //"There are only around 2000 Polar Bears in the world.",
    //"I have 42 teeth.",
    //"My scientific name is 'ursus maritimus'.",
    //"I have an excellent sense of smell.",
    //"I use floating sea ice as a platform to hunt seals.");


//Modals[1] = "I can reach speeds up to<br /> 25 mph on land<br /> and 6 mph on water.",
//Modals[2] = "I am the largest<br /> carnivore (meat-eater)<br /> that lives on land.",
//Modals[3] = "I use floating sea ice<br /> as a platform to hunt seals.",
//Modals[4] = "Seals make up most of <br /> my diet. Yum.",
//Modals[5] = "Male Polar Bears like me<br /> can weigh up to 1500 pounds.",
//Modals[6] = "I spend most of my time in the water.",
//Modals[7] = "There are only around <br /> 2000 Polar Bears in the world.",
//Modals[8] = "I have 42 teeth.",
//Modals[9] = "My scientific name is<br /> 'ursus maritimus'.",
//Modals[10] = "I have an excellent sense of smell.",
//Modals[11] = "I use floating sea ice<br /> as a platform to hunt seals.",


//Scoring table

$(function () {

    $("#c1").hide();
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();
    $("#c5").hide();

});

$(document).ready(function () {

    // Close Button
    $('#close').click(function () {
        $('#game-close').modal('show');
        //$('#facts').modal('hide');
        //$('#game-info').modal('hide');
        //$('.Next-arrow').hide();
        //$('#game-complete').hide();

    });

    $('.No-Btns').click(function () {
        $('#game-close').modal('hide');
        // $('.Next-arrow').show();

    });

    $('.Next-Ai').click(function () {
        $("#putcontenthere").load("action_items/ai6.html");
        $("div").removeClass("paw");
    });

    $('.Re-play').click(function () {
        $("#putcontenthere").load("action_items/ai5.html");
    });

    Fishbkg.play();

    // all fun facts modals hide first
    $('#game-complete').modal('hide');

    //Hide fish
    $('.Fish').hide();

    //When document loads show modal
    $('#game-info').modal('show');

    // when next-arrow button is clicked, hide modal
    $('.Next-arrow').click(function () {
        //apply css to body-content - add paw class
        // $(".body-content").addClass("paw")

        $('#game-info').modal('hide');
        //Show fish
        $('.Fish').show();

        $('#facts').modal('hide');

    });

    function buildFactModal() {
        // randomize modals text
        //randno = Modals[Math.floor(Math.random() * Modals.length)];
        $('.factList li').hide();
        var items = $('.factList li').sort(function () {

            return Math.round(Math.random()) - 0.1;

        }).slice(0, 1);
        $(items).show();
        $('#facts').modal('show');
        $('.Next-arrow').hide().fadeIn();
        //$('.Message').text(randno);
        $('.Message').each(function () {

            $('.Message').css('font-size', '30px');
            $('.Message').css('position', 'absolute');
            $('.Message').css('top', '104px');
            $('.Message').css('left', '82px');
            $('.Message').css('text-align', 'center');
            $('.Message').css('font-family', 'Source Sans Pro', 'serif');
            $('.Message').css('font-weight', 'bolder');
            $('.Message').css('line-height', '41px');
            $('.Message').css('position', 'absolute');
            $('.Message').css('z-index', '2');

        });
    }


    // Push in to new array
    $('.Fish').click(function () {
        //remove the paw class
        //$(".body-content").removeClass("paw");
        $(this).hide();

        correct_items.push(clicked_item);
        if (correct_items.length === 1) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 2) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 3) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 4) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 5) {
            Captured.load();
            Captured.play();
            $("#c1").show();
            buildFactModal();

        } else if (correct_items.length === 6) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 7) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 8) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 9) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 10) {
            Captured.load();
            Captured.play();
            $("#c2").show();
            buildFactModal();
        } else if (correct_items.length === 11) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 12) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 13) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 14) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 15) {
            Captured.load();
            Captured.play();
            $("#c3").show();
            buildFactModal();
        } else if (correct_items.length === 16) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 17) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 18) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 19) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 20) {
            Captured.load();
            Captured.play();
            $("#c4").show();
            buildFactModal();
        } else if (correct_items.length === 21) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 22) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 23) {
            Captured.load();
            Captured.play();

        } else if (correct_items.length === 24) {
            Captured.load();
            Captured.play();

        }  else if (correct_items.length === 25) {
            Captured.load();
            Captured.play();
            $("#c5").show();
            buildFactModal();
            $('.Next-arrow').click(function () {
                Completed.play();
                Completed.play();
                $("#c4").show();
                buildFactModal();
                Fishbkg.pause();
                $('.Fish').hide();
                $('#game-complete').modal('show');
                $('#facts').modal('hide');

                $('.Message').text('randno').hide();
            });

        }

    });

});