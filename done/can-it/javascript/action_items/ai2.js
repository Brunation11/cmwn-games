    var start = document.getElementById("start1");
    var runout = document.getElementById("runout4");
    var $countdown;
    var $form;
    var incrementTime = 1000;
    var currentTime;
    var correct_items = new Array();


$(document).ready(function () {


    // hide points animation
    $('.win').hide();
    $('.loose').hide();

    $('.item').click(function () {
            //stop the main carousel
            $('#carousel_ul').carousel().animate('pause',3000);
    });
    // All items click
    $(".Hit_One,.Hit_two,.Hit_three,.Hit_four,.Hit_five,.Hit_six,.Hit_seven,.Hit_eight,.Hit_nine,.Hit_ten,.Hit_eleven,.Hit_twelve,.Hit_thirteen,.Hit_fourteen,.Hit_fifteen,.Hit_sixteen,.Hit_seventeen,.Hit_eighteen,.Hit_nineteen,.Hit_twenty,.Hit_twentyone,.Hit_twentytwo,.Hit_twentythree,.Hit_twentyfour,.Hit_twentyfive,.Hit_twentysix,.Hit_twentyseven,.Hit_twentyeight,.Hit_twentynine,.Hit_thirty,.Hit_thirtyone,.Hit_thirtytwo,.Hit_thirtythree,.Hit_thirtyfour,.Hit_thirtyfive,.Hit_thirtysix,.Hit_thirtyseven,.Hit_thirtyeight,.Hit_thirtynine,.Hit_forty").dblclick(function (event) {

        var click_item = $(this).attr('id');
        var click_correct = $(this).attr('data-correct');
        var item_animate = click_item + "#";
        var current = $('.item');

        var selected_item = $("#carousel_ul li")[2].id;
        selected_item = selected_item.replace("-li", "");
        // alert(click_correct + " " +selected_item);

        /// Main if statement
        if (click_correct == selected_item) {


            correct_items.push(selected_item);

            if (correct_items.length == 1) {
                // alert("hey");
                // $('#score p').html(function (i, val) { return val * 1 + 15; });
                $('.win').show().animate({ top : -10 }, 800).hide(1000);
                // $('.carousel-inner').parent().carousel('next', 10);
            }

        } ///// End om main "if" statement
    }); /// End of big click function
}); ///End of document.ready

