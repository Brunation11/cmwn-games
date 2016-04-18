pl.game.component('video', function () {

	this.start = function() {
		this.video.on('ended', function() {
			this.complete();
		}.bind(this));
		this.video[0].play();
	};

	this.pause = function() {
		this.video[0].pause();
	};

});
