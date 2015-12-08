pl.game.component('title', function () {

	this.start = function () {
		this.open();
		this.audio.background[0].play();
		this.delay(1500, this.showTitle);
	};

	this.showTitle = function () {
		this.image.addClass('animated '+this.image.attr('pl-animation'));
		this.complete();
	};

});