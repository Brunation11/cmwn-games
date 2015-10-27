
var game = {
    currentSlide: 1,
    loadScreen : function(slide) {
        this.currentSlide = slide;

         $('.replace').hide();

        var divId = "#div" + slide;

        $(divId).show();
        console.log("current slide: " + this.currentSlide);

        this.loadScreenCallback(this.currentSlide);
    },

    loadNextScreen: function() {
        this.currentSlide++;

        this.loadScreen(this.currentSlide);

    },

    loadPrevScreen: function() {
        this.currentSlide--;

        this.loadScreen(this.currentSlide);
    }


};



game.loadScreenCallback = function (currentSlide) {
    if (currentSlide == 7) {


    }

    if (currentSlide == 4) {
            $(".leachate-text").hide();
            $(".methane-gas-text").hide();
            $(".contamination-text").hide();
            $(".pollution-text").hide();
            $('.next').show();
    }
    if (currentSlide == 3) {
            $(".recycling-text").hide();
            $(".composting-text").hide();
            $(".landfill-text").hide();
            $(".incineration-text").hide();
            $('.next').show();
    }
    if (currentSlide == 2) {
            $('.arrows').fadeIn(500);
            $('.next').hide();
            $('.card').removeClass('flipped');
    }
    if (currentSlide == 1) {
            $('#play, .next').fadeIn(500);
            $('.arrows').fadeOut(100);
    }

}



game.loadScreen(1);



$(document).ready(function () {

    $(".bkg-image2").hide();

    $('.next').on('click', function(){
        game.loadNextScreen();
    });

    $('.prev').on('click', function(){
        game.loadPrevScreen();
    });

    $("#start-over").on('click', function() {
        game.loadScreen(1);
    });

    $('.close-Btn').click(function () {
        $('#retry-level').modal('show');
    });
    $('#Btn-hide1').click(function () {
        $('#retry-level').modal('hide')
    });

    $('.card').click(function () {
        $(this).addClass('flipped');
        setTimeout(function () { $('.next').fadeIn(500); }, 1000);
    });

    //////// DIV3 /////////

    $("#drag").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag2").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag3").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag4").draggable({ cursor: 'move', revert: 'invalid' });
    $("#drag5").draggable({ cursor: 'move', revert: 'invalid' });

    $(".balance-right-cup").droppable({
            tolerance: "pointer",
            accept: "#drag",
            drop: function () {
                try {
                    alert('correct');
                    // correct.play();
                }
                catch (err) {
                    //no sound - log error
                }
                $("#drag").fadeOut(4000);
                // $("#sleep p").css("text-decoration", "line-through");
                // correct_items.push(1);
                // var path = "content/images/meter_";
                // var file_ext = ".png";
                // var image_src = path + correct_items.length + file_ext;

                // $("#meter").html("<img src=" + image_src + " class='img-responsive' alt='Responsive image'/>");
                // if (correct_items.length === 8) {
                //     //pop or redirect your game complete screen
                //     setTimeout(function () {
                //         $("#putcontenthere").load("action_items/ai9.html");
                //     }, 2000);
                // }
            }
        });

    //////// DIV4 /////////

$('.recycling').click(function (){
    $(".recycling-text").fadeIn(500);
    $(".composting-text").hide();
    $(".landfill-text").hide();
    $(".incineration-text").hide();
});

$('.composting').click(function(){
    $(".recycling-text").hide();
    $(".landfill-text").hide();
    $(".incineration-text").hide();
    $(".composting-text").fadeIn(500);
});

$('.landfill').click(function(){
    $(".recycling-text").hide();
    $(".composting-text").hide();
    $(".incineration-text").hide();
    $(".landfill-text").fadeIn(500);
});

$('.incineration').click(function(){
    $(".recycling-text").hide();
    $(".composting-text").hide();
    $(".landfill-text").hide();
    $(".incineration-text").fadeIn(500);
});

    ///////// DIV 5 ////////////
$('.leachate').click(function (){
    $(".leachate-text").fadeIn(500);
    $(".methane-gas-text").hide();
    $(".contamination-text").hide();
    $(".pollution-text").hide();
});

$('.methane-gas').click(function(){
    $(".contamination-text").hide();
    $(".leachate-text").hide();
    $(".pollution-text").hide();
    $(".methane-gas-text").fadeIn(500);
});

$('.contamination').click(function(){
    $(".contamination-text").fadeIn(500);
    $(".leachate-text").hide();
    $(".pollution-text").hide();
    $(".methane-gas-text").hide();
});

$('.pollution').click(function(){
    $(".pollution-text").fadeIn(500);
    $(".methane-gas-text").hide();
    $(".leachate-text").hide();
    $(".contamination-text").hide();

});



    //////// DIV6 /////////


    //////// DIV7 /////////


});