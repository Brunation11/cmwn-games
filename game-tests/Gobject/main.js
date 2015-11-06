
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
    if (currentSlide == 2) {
            alert('Sound goes here !!!');
    }
}

game.loadScreen(1);


$('.next').on('click', function(){
    game.loadNextScreen();
});

$('.prev').on('click', function(){
    game.loadPrevScreen();
});

$("#start-over").on('click', function() {
    game.loadScreen(1);
});