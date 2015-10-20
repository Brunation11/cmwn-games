
var game = {
    currentSlide: 1,
    loadScreen : function(slide) {
        this.currentSlide = slide;

         $('.replace').hide();

        var divId = "#div" + slide;

        $(divId).show();
        console.log("current slide: " + this.currentSlide);
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

game.loadScreen(1);

// function loadScreen(x) {

//     return document.getElementById(x);

// }


$('.next').on('click', function(){
    game.loadNextScreen();
});

$('.prev').on('click', function(){
    game.loadPrevScreen();
});

$("#start-over").on('click', function() {
    game.loadScreen(1);
});